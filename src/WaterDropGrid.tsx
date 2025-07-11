import { FC, MouseEvent, useEffect, useRef } from "react";
import { animate, stagger, createScope, Scope } from "animejs";

const GRID_WIDTH = 25;
const GRID_HEIGHT = 20;

interface DotProps {
    index: number;
}

const Dot: FC<DotProps> = ({ index }) => {
    return (
        // Hover Overlay
        <div
            className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600"
            data-index={index}
        >
            {/* Dot */}
            <div
                className="dot-point size-2 bg-linear-to-b rounded-full from-slate-700 to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white"
                data-index={index}
            />
        </div>
    );
}

const DotGrid: FC = () => {
    const rootRef = useRef<HTMLDivElement>(null);
    const scopeRef = useRef<Scope | null>(null);

    useEffect(() => {
        if (!rootRef.current) return;

        console.log('Creating scope...');
        scopeRef.current = createScope({ root: rootRef }).add(self => {
            console.log('Scope created, registering ripple method...');
            self.add('ripple', (index: number) => {
                animate('.dot-point', {
                    scale: [
                        { to: 1.35, easing: "outSine", duration: 250 },
                        { to: 1, easing: "inOutQuad", duration: 500 },
                    ],
                    translateY: [
                        { to: -15, easing: "outSine", duration: 250 },
                        { to: 0, easing: "inOutQuad", duration: 500 },
                    ],
                    opacity: [
                        { to: 1, easing: "outSine", duration: 250 },
                        { to: 0.5, easing: "inOutQuad", duration: 500 },
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

        // console.log('Clicked index:', index);
        // console.log('Scope ref exists:', !!scopeRef.current);

        if (index && scopeRef.current) {
            console.log('Calling ripple method...');
            scopeRef.current.methods.ripple(parseInt(index));
        } else {
            console.log('Cannot call ripple - missing index or scope');
        }
    };

    const dots = [];
    let index = 0;

    for (let i = 0; i < GRID_WIDTH; i++) {
        for (let j = 0; j < GRID_HEIGHT; j++) {
            dots.push(
                <Dot index={index} key={`${i}-${j}`} />
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

export const WaterDropGrid: FC = () => {
    return (
        <div className="relative grid place-content-center bg-slate-900 px-8 py-12">
            <DotGrid />
        </div>
    );
};