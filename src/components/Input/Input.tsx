import style from "./Input.module.scss";
import { InputProps } from "./Input.props";

export function Input({ ...props }: InputProps): JSX.Element {
  return <input {...props} className={style.input} />;
}
