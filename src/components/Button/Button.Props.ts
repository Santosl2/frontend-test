import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  bgColor?: "default" | "grey";
  align?: "End" | "Baseline";
};
