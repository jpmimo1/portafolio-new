"use client";

import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@heroui/react";

type TProps = {
  gallery: string[];
};

export const PhotoGallery = ({ gallery }: TProps) => {
  const [photoSelect, setPhotoSelect] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [photoModal, setPhotoModal] = useState("");

  const [emblaPhotoRef, emblaPhotoApi] = useEmblaCarousel(
    {
      loop: true,
      dragThreshold: 0.1,
    },
    [Fade()]
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
    align: "center",
    containScroll: "keepSnaps",
    breakpoints: {
      "(min-width: 1024px)": { axis: "y" },
    },
  });

  useEffect(() => {
    if (!emblaApi || !emblaPhotoApi) return;
    emblaPhotoApi.scrollTo(photoSelect);
    emblaApi.scrollTo(photoSelect);
  }, [photoSelect, emblaApi, emblaPhotoApi]);

  const timerRef = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setPhotoSelect((photoSelect + 1) % gallery.length);
    }, 5000);
  }, [photoSelect, gallery]);

  useEffect(() => {
    if (!emblaPhotoApi) return;

    const setPhotoSelectEmblaPhoto = () => {
      setPhotoSelect(emblaPhotoApi.selectedScrollSnap());
    };

    emblaPhotoApi
      .on("select", setPhotoSelectEmblaPhoto)
      .on("reInit", setPhotoSelectEmblaPhoto);
  }, [emblaPhotoApi]);

  return (
    <>
      <div className="flex gap-4 flex-col mb-6 lg:flex-row grow">
        <div className="embla-photo">
          <div className="embla-photo__viewport" ref={emblaPhotoRef}>
            <div className="embla-photo__container">
              {gallery.map((imageUrl, i) => {
                return (
                  <div
                    key={i}
                    className="embla-photo__slide aspect-video"
                    onClick={() => {
                      setPhotoModal(gallery[photoSelect]);
                      setOpenModal(true);
                    }}
                  >
                    <Image
                      src={imageUrl}
                      alt=""
                      width={800}
                      height={800}
                      className="w-full h-full object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[170px] lg:shrink-0 lg:h-auto relative">
          <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                {gallery.map((imageUrl, i) => {
                  return (
                    <div
                      key={i}
                      className={classNames(
                        "embla__slide aspect-video cursor-pointer rounded-sm transition-all duration-500 ease-in relative",
                        {
                          "brightness-75 blur-[0.5px] grayscale-50":
                            imageUrl !== gallery[photoSelect],
                        },
                        {
                          "": imageUrl === gallery[photoSelect],
                        }
                      )}
                      onClick={() => {
                        const index = gallery.findIndex(
                          (image) => image === imageUrl
                        );
                        setPhotoSelect(index);
                      }}
                    >
                      <AnimatePresence mode="wait">
                        {imageUrl === gallery[photoSelect] ? (
                          <motion.div
                            className="absolute top-0 left-0 w-full h-full border-4 border-secondary dark:border-secondary-500 rounded-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                          />
                        ) : null}
                      </AnimatePresence>
                      <Image
                        src={imageUrl}
                        alt=""
                        width={250}
                        height={250}
                        className="w-full h-full object-cover rounded-sm"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
        size="full"
      >
        <ModalContent className="bg-background">
          <ModalHeader />
          <ModalBody className="py-6">
            <div className="h-full w-full max-w-[1500px] overflow-hidden flex items-center mx-auto relative">
              <Image
                src={photoModal}
                alt=""
                width={1800}
                height={1800}
                className="w-full h-full object-contain absolute"
              />
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
