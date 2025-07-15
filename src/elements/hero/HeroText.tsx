import { type FC, type PropsWithChildren } from "react";

import { Button } from "@/components/ui/button";
import { Star } from "@/images/icons";

const BulletPoint: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex py-1">
      <div className="pt-1">
        <Star className="size-4" />
      </div>
      <div className="px-2 font-bold text-white md:text-xl dark:text-gray-400">
        {children}
      </div>
    </div>
  );
};

const CTAButton: FC<PropsWithChildren> = ({ children }) => {
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

export const HeroText: FC = () => {
  return (
    <div className="pt-8">
      <div className="flex flex-col space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none">
            Step into the Future
          </h1>
          <div>
            <p className="max-w-3/4 py-8 text-2xl text-white dark:text-gray-400">
              We deliver cutting-edge software solutions for any mission,
              anywhere. Let's transform your ideas into reality.
            </p>

            <div className="max-w-3/4">
              <BulletPoint>
                Secure, Section 508 Compliant Web & Application Development
              </BulletPoint>
              <BulletPoint>
                Intelligent Solutions Powered by AI/ML and Data Integration
              </BulletPoint>
              <BulletPoint>Proudly 100% SDVOSB owned and operated</BulletPoint>
              <div className="pt-8">
                <CTAButton>Contact Us</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
