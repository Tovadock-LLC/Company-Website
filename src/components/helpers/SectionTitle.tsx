import type { FC, HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

import { cn } from "@/lib/utils";

const sectionTitleVariants = cva(clsx`py-8 text-5xl font-bold`, {
  variants: {
    textColor: {
      light: "text-white",
      dark: "text-primary",
    },
  },
  defaultVariants: {
    textColor: "dark",
  },
});

type SectionTitleProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof sectionTitleVariants>;

export const SectionTitle: FC<SectionTitleProps> = ({
  className,
  textColor,
  children,
  ...props
}) => {
  return (
    <div className="flex w-full justify-center">
      <h1
        className={cn(sectionTitleVariants({ textColor, className }))}
        {...props}
      >
        {children}
      </h1>
    </div>
  );
};
