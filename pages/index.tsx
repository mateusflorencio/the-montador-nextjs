import Layout from '../components/layouts/layouts'
import type { NextPage } from "next"
import { Header } from "../components"
import Styles from "../styles/home.module.scss"
import { Hero } from "./components/hero/hero"
import { Trajetory } from "./components/trajetory/trajetory"
import { Servicos } from "./components/servicos/servicos"
import { Brands } from "./components/brands/marcas"
import { Numbers } from "./components/numbers/numbers"
import { Reviews } from "./components/reviews/reviews"
import { Footer } from '../components/footer/footer'

const Home: NextPage = () => {
  return (
    <Layout>
    <div className={Styles.wrap}>
      <Header />
      <Hero />
      <Trajetory />
      <Servicos/>
      <Brands/>
      <Numbers/>
      <Reviews/>
      <Footer/>
    </div>
    </Layout>
  )
}

export default Home
