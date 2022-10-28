import { Card } from "./components/card"
import Styles from "./services.module.scss"
import Image from "next/image"

import Multiuso from "../../public/multiuso.svg"
import Truck from "../../public/truck.png"
import Instalacoes from "../../public/instalacoes.png"
import Martelo from "../../public/martelo.png"

export const Services = () => {
  return (
    <section className={Styles.wrap}>
      <h2>Nosso Serviços</h2>

      <div className={Styles.cards} >
      <Card
        img={<Image src={Multiuso} alt="Multiuso" />}
        title={"Montagem em Geral"}
        description={"Guarda-Roupas, Berços, mesa, painel e outros"}
      />
      <Card
        img={<Image src={Truck} alt="Truck" />}
        title={"Desmontagem e Montagem"}
        description={"Demonstagem e montagem de móveis e afins."}
      />
      <Card
        img={<Image src={Instalacoes} alt="instalacoes" />}
        title={"Instalações"}
        description={"Paineis, televisão, cozinhas, cortinas..."}
      />
      <Card
        img={<Image src={Martelo} alt="Martelo" />}
        title={"Mantenção de móveis"}
        description={"Portas, gavestas, trilhos..."}
      />
      </div>
    </section>
  )
}
