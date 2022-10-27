import { Button } from "../../pages/components/button/button"
import Styles from "./footer.module.scss"

export const Footer = () => {
  return (
    <footer className={Styles.wrap}>
      <div className={Styles.wrap_call}>
        <p className={Styles.wrap}>
          Entre em contato agora e faça um orçamento sem compromisso pelo nosso
          whatsapp
        </p>
        <Button text="Fazer Orçamento Agora" />
      </div>
      <div className={Styles.copy}>
        {" "}
        Copyrigth ©️ 2022 Chipre | All Rigths Reserveds
      </div>
    </footer>
  )
}
