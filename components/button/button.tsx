import Styles from "./btn.module.scss";
import Link from "next/link";

export const Button = ({ text }: { text: string }) => (
  <Link
    className=""
    href="https://api.whatsapp.com/send?phone=5511960153285&text=Oi,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20com%20voc%C3%AA"
  >
    <button className={Styles.btn}>{text}</button>
  </Link>
);
