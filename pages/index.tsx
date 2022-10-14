import type { NextPage } from "next"
import { Header } from "../components"
import Styles from "../styles/home.module.scss"
import { Hero } from "./components/hero/hero"
import { Trajetory } from "./components/trajetory/trajetory"

const Home: NextPage = () => {
  return (
    <div className={Styles.wrap}>
      <Header />
      <Hero />
      <div className={Styles.container}>
        <Trajetory />
      </div>
    </div>
  )
}

export default Home
