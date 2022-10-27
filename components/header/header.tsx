import Styles from "./header.module.scss";
import Image from "next/image";
import WhatsApp from "../../public/whatsapp.svg";
import Link from "next/link";

export const Header = () => {
  return (
    <header className={Styles.wrap}>
      <div className={Styles.container}>
        <nav>Montador de Móveis</nav>
        <Link
          className=""
          href="https://api.whatsapp.com/send?phone=5511960153285&text=Oi,%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20com%20voc%C3%AA"
        >
          <button>
            <Image alt="WhatsApp" src={WhatsApp} width={24} height={24} />
          </button>
        </Link>
      </div>
    </header>
  );
};
