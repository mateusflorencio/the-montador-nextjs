import Styles from './image-carousel.module.scss'
import Image, { StaticImageData } from "next/image"

type Props = {
  img : StaticImageData
}

export const ImageCarousel = ({img}:Props) => {
  return (
     <div className={Styles.wrap}>
       <Image
                src={img}
                alt="parafusadeira"
                width={216}
                height={51}
                className={Styles.image}
              />
     </div>
  )
}