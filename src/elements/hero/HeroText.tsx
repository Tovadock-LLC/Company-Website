import { type FC, type PropsWithChildren, useEffect, useRef } from "react";
import { type Scope, createScope, animate, stagger } from "animejs";

import { Button } from "@/components/ui/button";
import { Star } from "@/images/icons";

const BulletPoint: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="_bullet flex py-1">
      <div className="pt-[6px]">
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
  const rootRef = useRef<HTMLDivElement>(null);
  const scopeRef = useRef<Scope | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    scopeRef.current = createScope({ root: rootRef }).add(() => {
      animate("._bullet", {
        opacity: [{ from: 0, to: 1 }],
        y: [{ from: "3rem", to: "0rem" }],
        duration: 500,
        delay: stagger(300),
      });
    });

    animate("._heading", {
      x: [{ from: "-1rem", to: "0rem" }],
      opacity: [{ from: 0, to: 1 }],
      duration: 1500,
      // delay: 1000,
    });

    return () => scopeRef.current?.revert();
  }, []);
  return (
    <div className="pt-8" ref={rootRef}>
      <div className="flex flex-col space-y-4">
        <div className="space-y-2">
          <h1 className="_heading text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none">
            The Future of Government Starts Here
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
