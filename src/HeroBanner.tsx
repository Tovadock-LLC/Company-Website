import { type FC, useEffect, useRef } from "react";
import {
  type Scope,
  createScope,
  createSpring,
  animate,
  svg,
  utils,
  engine,
} from "animejs";

const Wisp: FC = () => {
  return (
    <>
      <>
        {/* <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          // xmlns:xlink="http://www.w3.org/1999/xlink"
          width="700"
          height="700"
          viewBox="610,129,700,700"
        >
          <g
            id="document"
            fill="#ffffff"
            fill-rule="nonzero"
            stroke="#000000"
            stroke-width="0"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
            // style="mix-blend-mode: normal"
          >
            <rect
              x="610"
              y="92.14286"
              transform="scale(1,1.4)"
              width="700"
              height="500"
              id="Shape 1 1"
              vector-effect="non-scaling-stroke"
            />
          </g>
          <g
            fill-opacity="0"
            fill="#000000"
            fill-rule="nonzero"
            stroke="#000000"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
            // style="mix-blend-mode: normal"
          >
            <g id="stage">
              <g id="layer1 1">
                <path
                  d="M775,404c12.91557,-20.48244 27.15068,-39.91491 41.00145,-59.75862c11.80001,-16.90563 22.90156,-34.00947 32.62961,-52.1959c4.23439,-7.91612 7.37767,-14.52687 11.21721,-22.39352c1.41854,-2.90637 2.88892,-5.92259 4.33896,-8.83586c0.40679,-0.81728 1.07695,-3.34776 1.22894,-2.44757c4.02074,23.81391 -8.9278,53.32525 -16.0063,75.49598c-12.40375,38.8501 -26.28318,77.24042 -39.04961,115.97494c-7.5612,22.94136 -15.19419,46.03428 -20.00946,69.74477c-3.4514,16.99479 -5.19948,34.22506 -3.29955,51.52644c0.3993,3.63613 1.10928,13.39433 4.52551,15.33161c5.74631,3.25863 12.12314,5.60228 18.6245,6.77321c4.78267,0.86139 9.81154,0.24984 14.55707,-0.79701c9.83744,-2.17009 19.14653,-8.05719 26.67769,-14.46724c34.36537,-29.24965 44.86076,-77.911 46.56271,-120.9977c0.55727,-14.10784 1.26178,-41.55143 -18.50284,-41.99489c-18.90939,-0.42427 -35.92867,15.09096 -49.23529,26.53536c-17.20824,14.80002 -35.07637,29.33812 -56.25768,38.06959c-12.37266,5.10032 -25.85695,8.3077 -39.30234,8.09477c-20.12659,-0.31873 -45.93757,-7.68526 -58.65113,-24.75761c-7.46563,-10.02519 -10.68668,-22.14946 -12.86479,-34.25804c-4.45663,-24.77529 -2.47879,-49.78538 9.31322,-72.18362c15.76397,-25.40503 44.28581,-34.60764 72.69057,-38.24192c21.6787,-2.77371 44.26985,-3.5947 65.84616,0.51061c31.2757,5.95081 60.88067,20.72634 88.33213,36.38809"
                  id="Path 1"
                />
              </g>
            </g>
          </g>
        </svg> */}
        {/* <svg
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
        </svg> */}
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
    <div ref={rootRef} className="w-1/2 h-1/2 bg-black">
      <div className="flex flex-col items-center justify-center ctr h-full">
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
      {/* <Wisp /> */}
      <ParticleTest />
      {/* <HeroAnimation /> */}
    </div>
  );
};
