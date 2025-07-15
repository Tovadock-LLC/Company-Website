import { type FC, useEffect, useRef } from "react";
import { type Scope, createScope, animate, svg, utils, stagger } from "animejs";

import { ContentWrapper } from "@/components/helpers/ContentWrapper";
import { HeroText } from "@/elements/hero/HeroText";
import EagleHead from "@/images/svg/eagle.svg?react";
import Stars from "@/images/svg/stars_hero_animation.svg?react";

const EagleAnimation: FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const scopeRef = useRef<Scope | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    scopeRef.current = createScope({ root: rootRef }).add((self) => {
      const [$circle] = utils.$("circle");
      $circle.setAttribute("class", "fill-white");

      animate(svg.createDrawable("path"), {
        draw: ["0 0", "0 1", "1 1"],
        ease: "inOutQuad",
        duration: 7000,
        delay: stagger(100),
        loop: true,
      });

      animate("circle", {
        opacity: [{ from: 0, to: 1 }, { to: 0 }],
        ease: "inOutQuad",
        duration: 9200,
        loop: true,
        // loopDelay: 1000,
      });
    });

    return () => scopeRef.current?.revert();
  }, []);

  return (
    <div className="relative">
      <div ref={rootRef}>
        <EagleHead className="w-96 stroke-2" />
      </div>
      <div className="absolute top-0">
        <EagleHead className="w-96 opacity-50" />
      </div>
    </div>
  );
};

/**
 * A little clunky but it avoids animejs scope collisions
 */
export const EagleWrapper: FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const scopeRef = useRef<Scope | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    scopeRef.current = createScope({ root: rootRef }).add((self) => {
      animate(".eagle", {
        scale: [{ from: 1, to: 1.02 }, { to: 1 }],
        y: [
          { to: "-4px", ease: "inOutQuad" },
          { to: 0, ease: "inOutQuad" },
        ],
        ease: "inOutQuad",
        duration: 9200,
        loop: true,
      });
    });

    return () => scopeRef.current?.revert();
  }, []);

  return (
    <>
      <div ref={rootRef}>
        <div className="eagle pl-8">
          <EagleAnimation />
        </div>
      </div>
    </>
  );
};

export const StarsWrapper: FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const scopeRef = useRef<Scope | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    scopeRef.current = createScope({ root: rootRef }).add((self) => {
      animate("._stars", {
        scale: [{ from: 1, to: 1.02 }, { to: 1 }],
        y: [
          { to: "-4px", ease: "inOutQuad" },
          { to: 0, ease: "inOutQuad" },
        ],

        ease: "inOutQuad",
        duration: 9200,
        loop: true,
      });
    });

    animate(".star", {
      opacity: [{ from: 0, to: 1 }, { to: 0 }],
      duration: 2000,
      delay: stagger(500),
      loop: true,
    });
    return () => scopeRef.current?.revert();
  }, []);

  return (
    <>
      <div ref={rootRef}>
        <Stars className="_stars w-[800px]" />
      </div>
    </>
  );
};

const HeroAnimation: FC = () => {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center">
        <div className="absolute">
          <StarsWrapper />
        </div>
        <EagleWrapper />
      </div>
    </>
  );
};

// const HeroText: FC = () => {
//   /**
//    *
//     ✓ Secure, Section 508 Compliant Web & Application Development
//     ✓ Intelligent Solutions Powered by AI/ML and Data Integration
//     ✓ SDVOSB-Certified: Mission-Focused Excellence & Reliable Partnership
//    */
//   return (
//     <div className="pt-8">
//       <div className="flex flex-col space-y-4">
//         <div className="space-y-2">
//           <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none">
//             Step into the Future
//           </h1>
//           <div className="w-1/2">
//             <p className="max-w-[700px] text-white md:text-xl dark:text-gray-400">
//               We deliver cutting-edge software solutions for any mission,
//               anywhere. Let's transform your ideas into reality.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export const HeroBanner: FC = () => {
  return (
    <div className="w-full bg-linear-to-r from-slate-900 from-50% to-rose-950">
      <ContentWrapper>
        <div className="flex h-9/12 w-full justify-between">
          <HeroText />
          <HeroAnimation />
        </div>
      </ContentWrapper>
    </div>
  );
};
