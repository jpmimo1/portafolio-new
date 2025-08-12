import { Select, SelectItem } from "@heroui/select";
import { useRouter } from "next/navigation";
import { MdLanguage } from "react-icons/md";

type TProps = {
  language: TLanguages;
  menuLanguage: TMenuLanguage;
};

export const SelectLanguage = ({ language, menuLanguage }: TProps) => {
  const router = useRouter();
  return (
    <div className="flex items-center gap-1">
      <div className="w-[75px]">
        <Select
          size="sm"
          selectedKeys={[language]}
          onSelectionChange={(keys) => {
            const arr = Array.from(keys as Set<string>);
            router.push(`/${arr[0]}`);
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
            trigger:'after:hidden shadow-none'
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
