import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"
import {Helmet} from "react-helmet";




const Cara = () => (
  <Layout>
    <Helmet>
      <!-- Google tag (gtag.js) -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-BFZM5CFLR4"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-BFZM5CFLR4');
      </script>
    </Helmet>
    <Parallax pages={7}>
      <Hero offset={0} factor={1} />
      <Projects offset={1} factor={3} />
      <About offset={4} factor={2} />
      <Contact offset={6} factor={1} />
    </Parallax>
  </Layout>
)

export default Cara
