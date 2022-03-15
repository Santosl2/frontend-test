import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  bgColor?: "default" | "grey" | "red";
  align?: "End" | "Baseline";
};
