import Styles from "./trajetory.module.scss"
import TrajetoryImage from "../../public/trajetory.svg"

import Image from "next/image"

export const Trajetory = () => (
  <section className={Styles.wrap}>
      <div className={Styles.content}>
        <h2>Uma trajetória incrível</h2>
        <p>
          Há 4 anos trabalho montando móveis para os mais diversos tipos de
          clientes e empresas.
        </p>
      </div>
        <Image
          className={Styles.img}
          src={TrajetoryImage}
          width={382}
          height={413}
          alt="pessoa escolhendo o caminho"
        />
  </section>
)
