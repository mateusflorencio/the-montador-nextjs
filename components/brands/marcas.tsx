import Styles from "./marcas.module.scss"
import { Button } from "../button/button"
import { Carousel } from "./components/carousel/carousel"

import Americanas from "../../public/marcas/americanas.png"
import Cb from "../../public/marcas/cb.png"
import Estrela from "../../public/marcas/estrela.png"
import Etna from "../../public/marcas/etna.png"
import MadeiraMadeira from "../../public/marcas/madeira-madeira.png"
import Maga from "../../public/marcas/maga.png"
import Marabraz from "../../public/marcas/marabraz.png"
import Mobly from "../../public/marcas/mobly.png"

export const Brands  = ()=> {
  const brands = [Americanas,Cb,Estrela,Etna,MadeiraMadeira,Maga,Marabraz,Mobly]
  return (
    <section className={Styles.wrap}>
      <h2>Marcas para qual já atuamos</h2>
      <Carousel brands={brands}/>
      <Button text="Fazer orçamento agora"/>
    </section>
  )
}