import { type FC, useRef, useEffect } from "react";
import { createScope, type Scope } from "animejs";

/**
 *
 * This is just boilerplate for copy/pasting.
 * Don't love it but I can't be bothered to make a HOC.
 */
export const AnimeJSBoilerplate: FC = () => {
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
