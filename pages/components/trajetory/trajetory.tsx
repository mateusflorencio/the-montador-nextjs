import Styles from "./trajetory.module.scss"
import TrajetoryImage from "../../../public/trajetory.svg"

import Image from "next/image"

export const Trajetory = () => (
  <section className={Styles.trajetory}>
      <div className={Styles.content}>
        <h2>Uma trajetória incrível</h2>
        <p>
          Há 4 anos trabalho montando móveis para os mais diversos tipos de
          clientes e empresas.
        </p>
      </div>
      <div>
        <Image
          className={Styles.onda}
          src={TrajetoryImage}
          width={382}
          height={413}
          alt="pessoa em escolhendo o caminho"
        />
    </div>
  </section>
)
