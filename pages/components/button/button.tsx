import Styles from "./btn.module.scss";

export const Button = ({text}: {text:string}) => (
  <button className={Styles.btn}>{text}</button>
)
