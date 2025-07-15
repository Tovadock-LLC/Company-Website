import { type FC, type PropsWithChildren } from "react";

export const ContentWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="flex h-full items-center justify-center">
        <div className="h-full px-8 xl:w-7xl">{children}</div>
      </div>
    </>
  );
};
