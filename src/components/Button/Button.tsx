import { ReactNode } from "react";
import style from "./Button.module.scss";

export function Button({ children }: { children: ReactNode }): JSX.Element {
  return <button className={style.btn}>{children}</button>;
}
