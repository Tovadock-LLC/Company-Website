import { type FC, useEffect, useRef } from "react";
import {
  type Scope,
  createScope,
  createSpring,
  animate,
  svg,
  utils,
  engine,
  stagger,
} from "animejs";

import SvgTest from "@/images/svg/svgtest.svg?react";
import EagleHead from "@/images/svg/eagle.svg?react";
import path from "path";

const AnimeFC: FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const scopeRef = useRef<Scope | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    scopeRef.current = createScope({ root: rootRef }).add((self) => {
      // Do animation things
    });

    return () => scopeRef.current?.revert();
  }, []);

  return (
    <>
      <div ref={rootRef}></div>
    </>
  );
};

type BasicSvgCircleProps = {
  radius?: number; // Radius of the circle
  strokeColorClass?: string; // Tailwind class for stroke color
  strokeWidth?: number; // Stroke width
};

const BasicSvgCircle: React.FC<BasicSvgCircleProps> = ({
  radius = 200, // Default radius of 200px
  strokeColorClass = "stroke-white", // Default to Tailwind's stroke-white
  // strokeWidth = 4, // Default stroke width
  strokeWidth = 8, // Default stroke width
}) => {
  // Calculate the center of the circle based on the radius
  // To keep the circle fully visible and centered, the viewBox needs to be at least
  // (radius * 2 + strokeWidth) on each side.
  // We'll place the circle's center at (radius + strokeWidth / 2, radius + strokeWidth / 2)
  // within the viewBox.
  const viewBoxSize = radius * 2 + strokeWidth;
  const centerX = radius + strokeWidth / 2;
  const centerY = radius + strokeWidth / 2;

  const rootRef = useRef<HTMLDivElement>(null);
  const scopeRef = useRef<Scope | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    scopeRef.current = createScope({ root: rootRef }).add((self) => {
      // Make wisp travel along circle svg
      //   animate(".test_circle", {
      //     ease: "linear",
      //     duration: 5000,
      //     loop: true,
      //     // ...svg.createMotionPath("path"),
      //   });
      // animate(".testCircle", {
      //   scale: [
      //     { to: 1.25, ease: "inOut(3)", duration: 200 },
      //     { to: 1, ease: createSpring({ stiffness: 300 }) },
      //   ],
      //   loop: true,
      //   loopDelay: 250,
      // });
    });
    return () => scopeRef.current?.revert();
  }, []);

  return (
    <div className="h-full w-full" ref={rootRef}>
      {/* The SVG container. Tailwind classes control its overall size.
        The viewBox defines the internal coordinate system of the SVG.
        preserveAspectRatio ensures it scales correctly without distortion.
      */}
      {/* <Wisp /> */}
      <div className="testCircle size-6 bg-blue-600"></div>
      <svg
        className="testCircle max-h-lg h-full w-full max-w-lg" // Adjust these Tailwind classes to size your SVG
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* The <circle> element:
          - cx, cy: The x and y coordinates of the center of the circle.
          - r: The radius of the circle.
          - fill: Sets the fill color. 'none' means transparent.
          - stroke: Sets the stroke color. Here, we use a CSS variable controlled by Tailwind.
          - strokeWidth: Sets the thickness of the stroke.
        */}
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="none"
          // We apply the Tailwind class directly here.
          // Tailwind generates CSS variables (e.g., --tw-stroke-opacity) or direct color values.
          // The CSS will apply to the SVG element.
          className={strokeColorClass}
          // className="stroke-to-r"
          strokeWidth={strokeWidth}
        />
      </svg>
    </div>
  );
};

const ParticleTest: FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const scopeRef = useRef<Scope | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    scopeRef.current = createScope({ root: rootRef }).add((self) => {
      const [$container] = utils.$(".ctr");
      // const [$range] = utils.$(".range");

      for (let i = 0; i < 3; i++) {
        const $particle = document.createElement("div");
        $container.children.length < 3
          ? $container.appendChild($particle)
          : null;
        // $particle.classList.add("particle");
        $particle.className = "particle size-2 bg-blue-600";
        $container.appendChild($particle);
        animate($particle, {
          x: utils.random(-10, 10, 2) + "rem",
          y: utils.random(-3, 3, 2) + "rem",
          scale: [{ from: 0, to: 1 }, { to: 0 }],
          delay: utils.random(0, 1000),
          loop: true,
        });
        // $particle.remove();
      }
    });

    // function onInput() {
    //   utils.sync(() => (engine.speed = self.value));
    // }

    // $range.addEventListener("input", onInput);

    return () => scopeRef.current?.revert();
  }, []);
  return (
    <div ref={rootRef} className="h-1/2 w-1/2 bg-black">
      <div className="ctr flex h-full flex-col items-center justify-center">
        {/* <div className="size-6 bg-blue-600"></div> */}
      </div>
      {/* <div className="medium row">
        <fieldset className="controls">
            type="range"
            min={0.1}
            max={2}
            value={1}
            step={0.01}
            className="range"
            onInput={() => {}}
          />
        </fieldset>
      </div> */}
    </div>
  );
};

const Eagle: FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const scopeRef = useRef<Scope | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    scopeRef.current = createScope({ root: rootRef }).add((self) => {
      // Do animation things
    });

    return () => scopeRef.current?.revert();
  }, []);

  return (
    <>
      <div ref={rootRef}>
        <EagleHead className="w-80" />
      </div>
    </>
  );
};

const SvgPathTest: FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const scopeRef = useRef<Scope | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    scopeRef.current = createScope({ root: rootRef }).add((self) => {
      // Do animation things
      //
      const carAnimation = animate(".car", {
        // ease: "inOutQuad",
        // filter: "blur(10px)",
        ease: "linear",
        duration: 2000,
        loop: true,
        loopDelay: 200,

        ...svg.createMotionPath(".path1"),
      });

      // animate(svg.createDrawable("path"), {
      //   // draw: "0 1",
      //   ease: "linear",
      //   duration: 5000,
      //   loop: true,
      // });
      //
      const paths = [".path1", ".path2", ".path3"];

      animate(svg.createDrawable(paths), {
        draw: ["0 0", "0 1", "1 1"],
        // draw: ["0 1"],
        // scale: [{ from: 1, to: 1.1 }, { to: 1 }],
        ease: "inOutQuad",
        duration: 2000,
        delay: stagger(100),
        loop: true,
      });
    });

    return () => scopeRef.current?.revert();
  }, []);

  return (
    <>
      <div ref={rootRef} className="relative mx-24 w-full">
        {/* <div className="w-full flex justify-center"> */}
        <div>
          <SvgTest className="size-48" />
        </div>
        {/* <SvgTest className="size-48 stroke-white" /> */}
        <div className="car motion-path-car size-4 -translate-x-2 -translate-y-50 rounded-full bg-amber-50 blur-xs"></div>
      </div>
      <div className="absolute top-14 left-24">
        <SvgTest className="relative size-48 opacity-25" />
      </div>
    </>
  );
};

const EagleAnimation: FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const scopeRef = useRef<Scope | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    scopeRef.current = createScope({ root: rootRef }).add((self) => {
      const [$circle] = utils.$("circle");
      // $circle.className = "fill-white"
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
      {/* <div className="" ref={rootRef}> */}
      <div ref={rootRef}>
        <EagleHead className="w-96 stroke-2" />
      </div>
      <div className="absolute top-0">
        <EagleHead className="w-96 opacity-50" />
      </div>
      {/* <div className="absolute top-0 -z-10 h-full w-full bg-linear-to-r from-slate-900 to-rose-950"></div> */}
    </div>
  );
};

const HeroAnimation: FC = () => {
  return (
    <>
      {/* <div className="relative"> */}
      {/* <div className="absolute top-0 h-full w-full bg-linear-to-r from-slate-900 via-rose-950 to-slate-900"></div> */}
      {/* <div className="absolute top-0 h-full w-full bg-radial from-rose-950 to-slate-900"></div> */}
      <EagleAnimation />
      {/* </div> */}
    </>
  );
};

const HeroText: FC = () => {
  return (
    <div className="pt-8">
      <div className="flex flex-col space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none">
            Tovadock
          </h1>
          <p className="max-w-[700px] text-white md:text-xl dark:text-gray-400">
            We deliver cutting-edge software solutions <br /> tailored to your
            business needs. <br /> Let's transform your ideas into reality.
          </p>
        </div>
      </div>
    </div>
  );
};

export const HeroBanner: FC = () => {
  return (
    <div className="flex h-9/12 w-full justify-between px-8">
      <HeroText />
      <HeroAnimation />
    </div>
  );
};
