import Layout from '../components/layouts/layouts'
import type { NextPage } from "next"
import { Header } from "../components"
import Styles from "../styles/home.module.scss"
import { Hero } from "./components/hero/hero"
import { Trajetory } from "./components/trajetory/trajetory"
import { Servicos } from "./components/servicos/servicos"
import { Brands } from "./components/marcas/marcas"

const Home: NextPage = () => {
  return (
    <Layout>
    <div className={Styles.wrap}>
      <Header />
      <Hero />
      <div className={Styles.container}>
        <Trajetory />
      </div>
      <Servicos/>
      <Brands/>
    </div>
    </Layout>
  )
}

export default Home
