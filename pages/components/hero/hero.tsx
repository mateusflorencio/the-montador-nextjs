import Styles from "./hero.module.scss"
import Parafusadeira from "../../../public/parafusadeira.png"
import Onda from "../../../public/onda.png"

import Image from "next/image"


export const Hero  = ()=>(
  <section className={Styles.hero}>
          <p>
            Oferecemos Serviços Acessíveis de Montagem de Móveis Para sua{" "}
            <label>Casa</label>
          </p>
          <button>Fazer orçamento agora</button>

          <div className={Styles.presentatio}>
            <div className={Styles.img_main_wrap}>
              <Image
                src={Parafusadeira}
                alt="parafusadeira"
                width={560}
                height={560}
              />
            </div>
            <div className={Styles.wrap_onda}>
              <Image
                className={Styles.onda}
                src={Onda}
                width={2000}
                height={400}
                alt="background"
              />
            </div>
          </div>
        </section>
)