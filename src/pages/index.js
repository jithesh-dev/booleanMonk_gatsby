import React from "react"
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Featured from "../components/Featured/Featured"
import OtherProjects from "../components/OtherProjects/OtherProjects"
import Contact from "../components/Contact/Contact"
import SimpleReactLightbox from "simple-react-lightbox"
import Head from "../components/Head/Head"
export default function Home() {
  return (
    <div className="homePage">
      <Layout>
        <Head title="Home" />
        <SimpleReactLightbox>
          <Hero />
          <About />
          <Featured />
          <OtherProjects />
          <Contact />
        </SimpleReactLightbox>
      </Layout>
    </div>
  )
}
