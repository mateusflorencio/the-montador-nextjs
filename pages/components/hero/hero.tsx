import Styles from "./hero.module.scss";
import { Button } from "../../../components/button/button"
export const Hero = () => (
  <section className={Styles.hero}>
      <p>
        Oferecemos Serviços Acessíveis de Montagem de Móveis Para sua{" "}
        <label>Casa</label>
      </p>
      <Button text="Fazer orçamento agora" />
  </section>
);
