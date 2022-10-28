import Styles from "./card.module.scss"

type Props = {
  img: JSX.Element
  title: string
  description: string
}
export const Card = ({ description, img, title }: Props) => {
  return (
    <div className={Styles.wrap}>
      <div className={Styles.img}>{img}</div>
      <p className={Styles.title}>{title}</p>
      <p className={Styles.description}>{description}</p>
    </div>
  )
}
