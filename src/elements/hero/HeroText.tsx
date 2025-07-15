import { type FC } from "react";

import Star from "@/images/svg/star.svg?react";

type BulletPointProps = {
  text: string;
};

const BulletPoint: FC<BulletPointProps> = ({ text }) => {
  return <div className="text-white md:text-xl dark:text-gray-400">{text}</div>;
};

export const HeroText: FC = () => {
  return (
    <>
      <>
        <div className="pt-8">
          <div className="flex flex-col space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none">
                Step into the Future
              </h1>
              <div className="w-1/2">
                <p className="max-w-[700px] text-white md:text-xl dark:text-gray-400">
                  We deliver cutting-edge software solutions for any mission,
                  anywhere. Let's transform your ideas into reality.
                </p>
                <BulletPoint text="Secure, Section 508 Compliant Web & Application Development" />
              </div>
            </div>
          </div>
        </div>
        );
      </>
    </>
  );
};
