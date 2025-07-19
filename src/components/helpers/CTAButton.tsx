import type { FC, PropsWithChildren } from "react";
import { Button } from "@/components/ui/button";

export const CTAButton: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex w-full justify-center py-4">
      <a href="mailto:tovadockllc@gmail.com">
        <Button variant="cta" size="lg">
          {children}
        </Button>
      </a>
    </div>
  );
};
