import type { FC, PropsWithChildren } from "react";

type SectionTitleProps = {
  textColor?: "light" | "dark";
} & PropsWithChildren;

export const SectionTitle: FC<SectionTitleProps> = ({
  textColor,
  children,
}) => {
  const color = textColor === "light" ? "text-white" : "text-primary";

  return (
    <div className="flex w-full justify-center">
      <h1 className={`${color} py-8 text-5xl font-bold`}>{children}</h1>
    </div>
  );
};
