"use client";

import { Button } from "@heroui/button";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@heroui/react";
import classNames from "classnames";
import Fade from "embla-carousel-fade";
import useEmblaCarousel from "embla-carousel-react";
import { useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiMaximize2,
  FiPause,
  FiPlay,
  FiX,
} from "react-icons/fi";

type TProps = {
  gallery: TProjectImage[];
  coverImageId: string;
  projectTitle: string;
  labels: TProjectsLabels;
};

const AUTOPLAY_DELAY_MS = 5000;

export const PhotoGallery = ({
  gallery,
  coverImageId,
  projectTitle,
  labels,
}: TProps) => {
  const initialIndex = Math.max(
    0,
    gallery.findIndex(({ id }) => id === coverImageId),
  );
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFocusPaused, setIsFocusPaused] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(true);
  const prefersReducedMotion = useReducedMotion();
  const selectedImage = gallery[selectedIndex] ?? gallery[initialIndex];
  const hasMultipleImages = gallery.length > 1;
  const isAutoplayEnabled =
    hasMultipleImages && isPlaying && !prefersReducedMotion;
  const isAutoplayRunning =
    isAutoplayEnabled && !isModalOpen && !isFocusPaused && isPageVisible;

  const [mainRef, mainApi] = useEmblaCarousel(
    {
      loop: hasMultipleImages,
      startIndex: initialIndex,
      duration: prefersReducedMotion ? 0 : 25,
    },
    [Fade()],
  );
  const [thumbnailsRef, thumbnailsApi] = useEmblaCarousel({
    dragFree: true,
    align: "start",
    containScroll: "trimSnaps",
  });

  useEffect(() => {
    if (!mainApi) return;

    const syncSelection = () => {
      const index = mainApi.selectedScrollSnap();
      setSelectedIndex(index);
      thumbnailsApi?.scrollTo(index);
    };

    syncSelection();
    mainApi.on("select", syncSelection).on("reInit", syncSelection);

    return () => {
      mainApi.off("select", syncSelection).off("reInit", syncSelection);
    };
  }, [mainApi, thumbnailsApi]);

  useEffect(() => {
    const syncVisibility = () => setIsPageVisible(!document.hidden);
    syncVisibility();
    document.addEventListener("visibilitychange", syncVisibility);
    return () =>
      document.removeEventListener("visibilitychange", syncVisibility);
  }, []);

  useEffect(() => {
    if (!mainApi || !isAutoplayRunning) return;

    const timer = setTimeout(() => mainApi.scrollNext(), AUTOPLAY_DELAY_MS);
    return () => clearTimeout(timer);
  }, [mainApi, selectedIndex, isAutoplayRunning]);

  const selectImage = useCallback(
    (index: number) => {
      if (mainApi) {
        mainApi.scrollTo(index);
      } else {
        setSelectedIndex(index);
      }
    },
    [mainApi],
  );

  if (!selectedImage) return null;

  return (
    <>
      <section
        aria-label={`${labels.gallery}: ${projectTitle}`}
        className="min-w-0"
        onFocusCapture={() => setIsFocusPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget))
            setIsFocusPaused(false);
        }}
      >
        <figure className="overflow-hidden rounded-large border border-default-200 bg-content1 shadow-sm">
          <div className="bg-default-100/50 p-3 sm:p-6">
            <div className="relative">
              {!mainApi ? (
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  priority
                  sizes="(min-width: 1100px) 1000px, 100vw"
                  className="rounded-large object-contain"
                />
              ) : null}
              <div
                ref={mainRef}
                className={classNames(
                  "relative overflow-hidden rounded-large",
                  {
                    invisible: !mainApi,
                  },
                )}
              >
                <div className="flex touch-pan-y touch-pinch-zoom">
                  {gallery.map((image, index) => (
                    <div
                      key={image.id}
                      aria-hidden={index !== selectedIndex}
                      className="min-w-0 shrink-0 basis-full"
                    >
                      <button
                        type="button"
                        tabIndex={index === selectedIndex ? 0 : -1}
                        aria-label={`${labels.openImage}: ${image.alt}`}
                        onClick={() => setIsModalOpen(true)}
                        className="relative block w-full cursor-zoom-in overflow-hidden rounded-large bg-background focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={1920}
                          height={1200}
                          sizes="(min-width: 1100px) 1000px, 100vw"
                          className="aspect-8/5 h-auto w-full object-contain"
                        />
                        <span className="pointer-events-none absolute right-3 top-3 rounded-medium bg-content1/90 p-2 text-foreground shadow-sm">
                          <FiMaximize2 aria-hidden="true" />
                        </span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {selectedImage.caption ? (
            <figcaption
              aria-live={isAutoplayRunning ? "off" : "polite"}
              aria-atomic="true"
              className="border-t border-default-200 px-5 py-4 text-sm leading-6 text-foreground/75"
            >
              {selectedImage.caption}
            </figcaption>
          ) : null}
        </figure>

        {hasMultipleImages ? (
          <div className="mt-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Button
                isIconOnly
                size="sm"
                variant="light"
                radius="sm"
                aria-label={labels.previousImage}
                onPress={() =>
                  selectImage(
                    (selectedIndex - 1 + gallery.length) % gallery.length,
                  )
                }
                className="h-11 min-w-11 text-foreground"
              >
                <FiChevronLeft aria-hidden="true" className="text-lg" />
              </Button>
              <span className="min-w-12 text-center text-sm tabular-nums text-foreground/65">
                {selectedIndex + 1} / {gallery.length}
              </span>
              <Button
                isIconOnly
                size="sm"
                variant="light"
                radius="sm"
                aria-label={labels.nextImage}
                onPress={() =>
                  selectImage((selectedIndex + 1) % gallery.length)
                }
                className="h-11 min-w-11 text-foreground"
              >
                <FiChevronRight aria-hidden="true" className="text-lg" />
              </Button>
            </div>
            {!prefersReducedMotion ? (
              <Button
                size="sm"
                variant="light"
                radius="sm"
                onPress={() => {
                  setIsPlaying((playing) => !playing);
                  setIsFocusPaused(false);
                }}
                startContent={
                  isPlaying ? (
                    <FiPause aria-hidden="true" />
                  ) : (
                    <FiPlay aria-hidden="true" />
                  )
                }
                className="min-h-11 text-foreground/75"
              >
                {isPlaying ? labels.pauseGallery : labels.playGallery}
              </Button>
            ) : null}
          </div>
        ) : null}

        {hasMultipleImages ? (
          <div ref={thumbnailsRef} className="mt-3 overflow-hidden">
            <div className="-ml-3 flex touch-pan-y touch-pinch-zoom">
              {gallery.map((image, index) => (
                <div
                  key={image.id}
                  className="min-w-0 shrink-0 basis-1/3 pl-3 sm:basis-1/4 lg:basis-1/5"
                >
                  <button
                    type="button"
                    aria-label={`${labels.galleryImage} ${index + 1}: ${image.caption || image.alt}`}
                    aria-current={index === selectedIndex ? "true" : undefined}
                    onClick={() => selectImage(index)}
                    className={classNames(
                      "block w-full overflow-hidden rounded-large border-2 bg-content1 p-1 transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus",
                      index === selectedIndex
                        ? "border-primary"
                        : "border-default-200 hover:border-primary/60",
                    )}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={320}
                      height={200}
                      sizes="(min-width: 1100px) 200px, (min-width: 640px) 25vw, 33vw"
                      className="aspect-8/5 h-auto w-full rounded-medium object-contain"
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        size="full"
        classNames={{ base: "bg-background text-foreground" }}
        closeButton={
          <button type="button" aria-label={labels.closeGallery}>
            <FiX aria-hidden="true" className="text-xl" />
          </button>
        }
      >
        <ModalContent>
          <ModalHeader className="pr-14">
            {projectTitle} · {labels.galleryImage} {selectedIndex + 1}
          </ModalHeader>
          <ModalBody className="min-h-0 px-4 pb-6 sm:px-8">
            <div className="relative mx-auto min-h-0 w-full max-w-7xl flex-1">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            {selectedImage.caption ? (
              <p className="shrink-0 pt-3 text-center text-sm leading-6 text-foreground/75">
                {selectedImage.caption}
              </p>
            ) : null}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
