import Styles from "./header.module.scss";
import Image from "next/image";
import WhatsApp from "../../public/whatsapp.svg";

export const Header = () => {
  return (
    <header className={Styles.wrap}>
      <div className={Styles.container}>
        <nav>Montador de Móveis</nav>
        <button>
          <Image alt="WhatsApp" src={WhatsApp} width={24} height={24} />
        </button>
      </div>
    </header>
  );
};
