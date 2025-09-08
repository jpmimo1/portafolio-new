import { ProjectsText } from "@/data/projects";
import { Select, SelectItem } from "@heroui/select";
import { useParams, useRouter } from "next/navigation";
import { useMemo } from "react";
import { MdLanguage } from "react-icons/md";

type TProps = {
  language: TLanguages;
  menuLanguage: TMenuLanguage;
};

export const SelectLanguage = ({ language, menuLanguage }: TProps) => {
  const router = useRouter();
  const params = useParams();

  const projectUrl = useMemo(() => {
    return params.project;
  }, [params]);

  const urlLanguages = useMemo(() => {
    if (!projectUrl) {
      return null;
    }

    const projectLanguage = ProjectsText[language].projects.find(
      ({ urlProject }) => urlProject === projectUrl
    );

    if (!projectLanguage) {
      return null;
    }

    const projectId = projectLanguage.id;

    const languagesUrls = (Object.keys(ProjectsText) as TLanguages[]).reduce<{
      [key in TLanguages]: string;
    }>(
      (prev, currentLang) => {
        const projectLang = ProjectsText[currentLang].projects.find(
          ({ id }) => id === projectId
        );

        if (!projectLang) {
          return { ...prev, [currentLang]: "" };
        }

        return {
          ...prev,
          [currentLang]: `/${currentLang}/project/${projectLang.urlProject}`,
        };
      },
      {} as { [key in TLanguages]: string }
    );

    return languagesUrls;
  }, [language, projectUrl]);

  return (
    <div className="flex items-center gap-1">
      <div className="w-[75px]">
        <Select
          size="sm"
          selectedKeys={[language]}
          onSelectionChange={(keys) => {
            const arr = Array.from(keys as Set<string>);
            const keySelect = arr[0] as TLanguages;
            if (!keySelect || keySelect === language) {
              return;
            }

            if (!urlLanguages) {
              router.push(`/${keySelect}`);
              return;
            }

            router.push(urlLanguages[keySelect]);
          }}
          variant="underlined"
          aria-label="language"
          renderValue={(items) => {
            return items.map((item) => {
              return (
                <div key={item.key} className="flex gap-1 items-center">
                  <MdLanguage size={18} />
                  <div className="text-center">{item.key}</div>
                </div>
              );
            });
          }}
          classNames={{
            popoverContent: "w-[110px]",
            trigger: "after:hidden shadow-none",
          }}
          color="primary"
        >
          {menuLanguage.items.map(({ key, label }) => {
            return (
              <SelectItem key={key} textValue={label}>
                {label}
              </SelectItem>
            );
          })}
        </Select>
      </div>
    </div>
  );
};
