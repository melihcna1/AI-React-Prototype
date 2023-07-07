import React from "react";

const sizeClasses = {
  txtInterMedium18Gray60001: "font-inter font-medium",
  txtInterMedium18: "font-inter font-medium",
  txtInterRegular14Black900: "font-inter font-normal",
  txtInterRegular16Gray700: "font-inter font-normal",
  txtInterRegular14Bluegray400: "font-inter font-normal",
  txtInterBold14: "font-bold font-inter",
  txtInterMedium16: "font-inter font-medium",
  txtInterMedium14: "font-inter font-medium",
  txtInterSemiBold40: "font-inter font-semibold",
  txtInterRegular18Black900: "font-inter font-normal",
  txtInterMedium16Black900: "font-inter font-medium",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtInterRegular18: "font-inter font-normal",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
