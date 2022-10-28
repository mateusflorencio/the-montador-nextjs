import { StaticImageData } from "next/image"
import Styles from "./carousel.module.scss"
import { ImageCarousel } from "./image-carousel"

type Props = {
  brands: StaticImageData[];
}

export const Carousel = ({ brands }: Props) => {
  return (
    <div className={Styles.wrap}>
      <div className={Styles.carousel}>
        {brands && brands.map((i, n) => <ImageCarousel key={n}  img={i} />)}
      </div>
    </div>
  )
}
