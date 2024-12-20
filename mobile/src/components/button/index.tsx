import {
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from "react-native";

import { IconProps as TablerIconProps } from "@tabler/icons-react-native";
import { colors } from "@/styles/colors";

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean;
};

function Button({
  children,
  className,
  isLoading = false,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      disabled={isLoading}
      {...rest}
      className={`w-full h-16 max-h-16 bg-primary rounded-xl gap-4 flex flex-row  items-center justify-center ${className}`}
    >
      {isLoading ? <ActivityIndicator color="white" /> : children}
    </TouchableOpacity>
  );
}

function Title({ children, className }: TextProps) {
  return (
    <Text className={`text-text font-medium text-lg text-center ${className}`}>
      {children}
    </Text>
  );
}

type IconProps = {
  icon: React.ComponentType<TablerIconProps>;
  className?: string;
  size?: number;
};

function Icon({ className, icon: Icon, size = 18 }: IconProps) {
  return (
    <Icon
      className={`text-text text-center ${className}`}
      color={colors.dark.text}
      size={size}
    />
  );
}

Button.Title = Title;
Button.Icon = Icon;

export { Button };
