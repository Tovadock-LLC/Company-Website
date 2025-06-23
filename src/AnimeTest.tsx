import { animate, createScope, createSpring, createDraggable, Scope, stagger } from 'animejs';
import { useEffect, useRef, useState } from 'react';
import tdLogo from '../public/vite.svg';



export const AnimeTest = () => {
    const root = useRef<HTMLDivElement>(null);
    const scope = useRef<Scope | null>(null);
    const [rotations, setRotations] = useState(0);

    useEffect(() => {

        scope.current = createScope({ root }).add(self => {

            // Every anime.js instances declared here are now scopped to <div ref={root}>
            animate('.square', {
                // x: '17rem',
                x: stagger('2rem',
                    {
                        start: 16
                    }
                )
                // x: stagger(['16rem', '3rem'])
                // x: stagger('2rem', {
                // start: '16rem'
                // })
                // scale: stagger([1, .1]),
                // delay: stagger(100),
            });

            // Created a bounce animation loop
            animate('.logo', {
                scale: [
                    { to: 1.25, ease: 'inOut(3)', duration: 200 },
                    { to: 1, ease: createSpring({ stiffness: 300 }) }
                ],
                loop: true,
                loopDelay: 250,
            });

            // Make the logo draggable around its center
            createDraggable('.logo', {
                container: [0, 0, 0, 0],
                releaseEase: createSpring({ stiffness: 200 })
            });

            // Register function methods to be used outside the useEffect
            self.add('rotateLogo', (i: number) => {
                animate('.logo', {
                    rotate: i * 360,
                    ease: 'out(4)',
                    duration: 1500,
                });
            });

        });

        // Properly cleanup all anime.js instances declared inside the scope
        return () => scope.current?.revert()

    }, []);

    const handleClick = () => {
        setRotations(prev => {
            const newRotations = prev + 1;
            // Animate logo rotation on click using the method declared inside the scope
            scope.current?.methods.rotateLogo(newRotations);
            console.log(`rotations: ${newRotations}`)
            return newRotations;
        });
    };

    const SquareTest = () => {
        const squares = 3;

        const Square = () => {
            return (
                <img
                    src={tdLogo}
                    className="square"
                />
            );
        }

        return (
            <>
                {/* Create as many squares as needed */}
                {Array.from({ length: squares }).map((_, index) => (
                    <Square key={index} />
                ))}
            </>
        );
    }

    return (
        <div ref={root}>
            <SquareTest />
            <div className="large centered row">
                <img
                    src={tdLogo}
                    className="logo react cursor-pointer"
                    alt="React logo"
                    onClick={handleClick}
                />
            </div>
            <div className="medium row">
                <fieldset className="controls">
                    <button>rotations: {rotations}</button>
                </fieldset>
            </div>
        </div>
    )
};