import React from "react";

interface MaxWidthWrapperProps {
  children: React.ReactNode;
}

const MaxWidthWrapper: React.FC<MaxWidthWrapperProps> = ({ children }) => {
  return (
    <div className="h-full mx-auto w-full max-w-screen-xl px-2 md:px-20">
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
