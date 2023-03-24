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
      <Hero offset={0} factor={1} />
      <Projects offset={2} factor={3} />
      <About offset={6} factor={2} />
      <Contact offset={8} factor={2.2} />
    </Parallax>
  </Layout>
)

export default Cara

export const Head: HeadFC = () => <Seo />