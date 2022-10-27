import Styles from "./numbers.module.scss";

export const Numbers = () => {
  const obj = [
    { title: "4mil", sub_title: "Móveis Montado" },
    { title: "1.7mil", sub_title: "Casas Visitadas" },
    { title: "96mil", sub_title: "Km andados" },
    { title: "9", sub_title: "cidades visitadas" },
    { title: "10mil", sub_title: "Horas trabalhadas" },
    { title: "&", sub_title: "muito mais" },
  ];

  return (
    <section className={Styles.wrap}>
      <h2>Nossos Numeros</h2>
      <div className={Styles.wrap_contents}>
        {obj && obj.map(({ title, sub_title }) => (
          <div className={Styles.card} key={title}>
            <h3 className="title">{title} </h3>
            <span className="sub-title">{sub_title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
