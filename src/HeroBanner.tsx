import { type FC, useEffect, useRef } from "react";
import { type Scope, createScope, createSpring, animate, svg } from "animejs";

const Wisp: FC = () => {
  return (
    <>
      <>
        <svg
          width="200"
          height="200"
          xmlns="http://www.w3.org/2000/svg"
          //   xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <filter id="spotlight">
              <feSpecularLighting
                result="spotlight"
                specularConstant="1.5"
                specularExponent="80"
                lighting-color="#FFF"
              >
                <fePointLight x="50" y="50" z="220" />
              </feSpecularLighting>
              <feComposite
                in="SourceGraphic"
                in2="spotlight"
                operator="arithmetic"
                k1="0"
                k2="1"
                k3="1"
                k4="0"
              />
            </filter>
          </defs>
          <div className="wisp size-6 bg-amber-300"></div>
        </svg>
      </>
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
    <div className="w-full h-full" ref={rootRef}>
      {/* The SVG container. Tailwind classes control its overall size.
        The viewBox defines the internal coordinate system of the SVG.
        preserveAspectRatio ensures it scales correctly without distortion.
      */}
      {/* <Wisp /> */}
      <div className="testCircle size-6 bg-blue-600"></div>
      <svg
        className="testCircle w-full h-full max-w-lg max-h-lg" // Adjust these Tailwind classes to size your SVG
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

const HeroAnimation: FC = () => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  return (
    <div className="w-max">
      <BasicSvgCircle />
    </div>
  );
};

export const HeroBanner: FC = () => {
  return (
    <div className="w-screen h-9/12 bg-amber-600">
      <HeroAnimation />
    </div>
  );
};
