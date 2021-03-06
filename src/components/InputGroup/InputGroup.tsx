import { ReactNode } from "react";
import style from "./InputGroup.module.scss";

export function InputGroup({ children }: { children: ReactNode }): JSX.Element {
  return <div className={`${style.inputGroup} column`}>{children}</div>;
}
