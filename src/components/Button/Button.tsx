import style from "./Button.module.scss";
import { ButtonProps } from "./Button.Props";

export function Button({
  children,
  bgColor = "default",
  align = "End",
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      {...props}
      className={`${style.btn} ${
        bgColor === "grey" && style["grey"]
      } alignSelf${align}`}
    >
      {children}
    </button>
  );
}
