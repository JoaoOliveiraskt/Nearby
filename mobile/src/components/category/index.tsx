import { colors } from "@/styles/theme";
import { categoriesIcons } from "@/utils/categories-icons";
import { Text, Pressable, PressableProps } from "react-native";

type Props = PressableProps & {
  iconId: string;
  isSelected: boolean;
  name: string;
  className?: string;
};

export function Category({
  iconId,
  name,
  className,
  isSelected = false,
  ...rest
}: Props) {
  const Icon = categoriesIcons[iconId];

  return (
    <Pressable
      className={`h-12 px-4 flex flex-row items-center justify-center gap-2 rounded-full border 
        ${
          isSelected
            ? "bg-primary border-primaryLight"
            : "bg-card border-border"
        } 
        ${className}`}
      {...rest}
    >
      <Icon size={18} color={colors.dark.text} className="text-center" />
      <Text className={`text-medium text-center text-text`}>{name}</Text>
    </Pressable>
  );
}
