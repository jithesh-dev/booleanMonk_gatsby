import React from "react"
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import About from "../components/About/About"
import Featured from "../components/Featured/Featured"
export default function Home() {
  return (
    <div className="homePage">
      <Layout>
        <Hero />
        <About />
        <Featured />
      </Layout>
    </div>
  )
}
