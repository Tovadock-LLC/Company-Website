import { type FC } from "react";

import { Button } from "./components/ui/button";
import { ContentWrapper } from "@/components/helpers/ContentWrapper";
import { SectionTitle } from "@/components/helpers/SectionTitle";
import { CTAButton } from "@/components/helpers/CTAButton";

export const Contact: FC = () => {
  return (
    <div className="pt-4 pb-8">
      <ContentWrapper>
        <SectionTitle>Contact Us</SectionTitle>
        <div className="flex flex-col items-center justify-center">
          <div className="pb-8 text-2xl">
            We look forward to helping you take your agency to the next level.
          </div>
          <CTAButton>Get Started</CTAButton>
        </div>
      </ContentWrapper>
    </div>
  );
};
