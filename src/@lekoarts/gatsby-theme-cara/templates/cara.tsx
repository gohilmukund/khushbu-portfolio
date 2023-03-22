import React from "react"
import { Parallax } from "@react-spring/parallax"
import type { HeadFC } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"
import Seo from "../components/seo"

const Cara = () => (
  <Layout>
    <Parallax pages={10}>
      <Hero offset={0} factor={2} />
      <Projects offset={2} factor={5} />
      <About offset={7} factor={2} />
      <Contact offset={9} factor={1} />
    </Parallax>
  </Layout>
)

export default Cara

export const Head: HeadFC = () => <Seo />