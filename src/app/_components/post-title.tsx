import { ReactNode } from "react";
import Logo from "./logo";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <div className="flex justify-evenly items-start">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
        {children}
      </h1>
      <Logo />
    </div>

  );
}
