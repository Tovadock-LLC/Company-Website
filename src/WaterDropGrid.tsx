// import anime from "animejs";
import { FC, MouseEvent, useEffect, useRef } from "react";
import { animate, stagger, createScope, Scope } from "animejs";

export const WaterDropGrid: FC = () => {
    return (
        <div className="relative grid place-content-center bg-slate-900 px-8 py-12">
            <DotGrid />
        </div>
    );
};

const GRID_WIDTH = 25;
const GRID_HEIGHT = 20;

const DotGrid: FC = () => {
    const rootRef = useRef<HTMLDivElement>(null);
    const scopeRef = useRef<Scope | null>(null);

    useEffect(() => {
        if (!rootRef.current) return;

        scopeRef.current = createScope({ root: rootRef }).add(self => {
            // Register the animation method
            self.add('ripple', (index: number) => {
                animate(".dot-point", {
                    scale: [
                        { value: 1.35, easing: "easeOutSine", duration: 250 },
                        { value: 1, easing: "easeInOutQuad", duration: 500 },
                    ],
                    translateY: [
                        { value: -15, easing: "easeOutSine", duration: 250 },
                        { value: 0, easing: "easeInOutQuad", duration: 500 },
                    ],
                    opacity: [
                        { value: 1, easing: "easeOutSine", duration: 250 },
                        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
                    ],
                    delay: stagger(100, {
                        grid: [GRID_WIDTH, GRID_HEIGHT],
                        from: index,
                    }),
                });
            });
        });

        return () => scopeRef.current?.revert();
    }, []);

    const handleDotClick = (e: MouseEvent) => {
        // Find the actual element that has the data-index
        const clickedElement = (e.target as HTMLElement).closest('[data-index]') as HTMLElement;
        const index = clickedElement?.dataset.index;

        console.log('Clicked index:', index);

        if (index && scopeRef.current) {
            scopeRef.current.methods.ripple(parseInt(index));
        }
    };

    const dots = [];
    let index = 0;

    for (let i = 0; i < GRID_WIDTH; i++) {
        for (let j = 0; j < GRID_HEIGHT; j++) {
            dots.push(
                <div
                    className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600"
                    data-index={index}
                    key={`${i}-${j}`}
                >
                    <div
                        className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white"
                        data-index={index}
                    />
                </div>
            );
            index++;
        }
    }

    return (
        <div
            ref={rootRef}
            onClick={handleDotClick}
            style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
            className="grid w-fit"
        >
            {dots}
        </div>
    );
};
