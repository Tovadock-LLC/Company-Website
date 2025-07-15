import { type FC, useEffect, useRef } from "react";
import { type Scope, createScope, animate, svg, utils, stagger } from "animejs";

import { ContentWrapper } from "@/components/helpers/ContentWrapper";
import { HeroText } from "@/elements/hero/HeroText";
import EagleHead from "@/images/svg/eagle.svg?react";
import Stars from "@/images/svg/stars_hero_animation.svg?react";
import { ChevronDoubleDown } from "@/images/icons";

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

export const HeroBanner: FC = () => {
  return (
    <div className="from-primary relative h-full w-full bg-linear-to-r from-50% to-rose-950">
      <div className="absolute bottom-0 left-1/2 pb-8">
        <ChevronDoubleDown className="size-8 fill-white stroke-none" />
      </div>
      <ContentWrapper>
        <div className="flex h-full w-full justify-between">
          <div className="flex max-w-1/2 flex-col justify-center">
            <HeroText />
          </div>
          <HeroAnimation />
        </div>
      </ContentWrapper>
    </div>
  );
};
