import { type FC, type PropsWithChildren } from "react";

export const ContentWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="px-8 xl:min-w-7xl">{children}</div>
      </div>
    </>
  );
};
