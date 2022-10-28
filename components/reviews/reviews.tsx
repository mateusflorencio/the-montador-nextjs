import Styles from "./reviews.module.scss";
import Star from "../../public/star.png";
import Image from "next/image";

export const Reviews = () => {
  const obj = [
    {
      name: "Amanda Santos Suky",
      reviews:
        "Contratei o serviço a partir de uma indicação é super recomendo! Montador zeloso e atencioso durante todo o processo da montagem, já recomendei para três pessoas e todas gostaram muito do serviço!",
    },
    {
      name: "Agnes Dias",
      reviews:
        "Excelente profissional! Muito atencioso, montagem rápida e eficiente.",
    },
    {
      name: "Lukas Alves",
      reviews:
        "Brabo demais se tá doido sem ele eu não consegui comer pizza na mesa nova de casa.",
    },
    {
      name: "Ely Rodrigues",
      reviews:
        "Simplesmente impecável , super pontual , bem profissional , realiza o trabalho em um ótimo tempo e em uma qualidade melhor ainda!!!! Super indico.",
    },
  ];

  return (
    <section className={Styles.wrap}>
      <h2>Reviews</h2>

      <div className={Styles.wrap_contents}>
        {obj &&
          obj.map(({ name, reviews }) => (
            <div className={Styles.card} key={name}>
              <div className={Styles.star}>
                <Image src={Star} alt="star" width={20} height={20}/>
                <Image src={Star} alt="star" width={20} height={20}/>
                <Image src={Star} alt="star" width={20} height={20}/>
                <Image src={Star} alt="star" width={20} height={20}/>
                <Image src={Star} alt="star" width={20} height={20}/>
              </div>
              <p className="sub-name">{reviews}</p>
              <strong className="name">- {name}</strong>
            </div>
          ))}
      </div>
    </section>
  );
};
