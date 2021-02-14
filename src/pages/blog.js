import React from 'react'
import Layout from "../components/Layout/Layout"
import Head from "../components/Head/Head"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { useStaticQuery, graphql } from "gatsby"
const BlogPage = () => {
    const data =useStaticQuery(graphql`
  query Myquery {
    mdx(id: {eq: "f65b828c-0754-51f6-82cd-54e6b8dc96cd"}) {
        body
      }
  }
`)  
    return (
        <div>
        <Layout>
            <Head title="Home" />
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </Layout>
        </div>
    )
}

export default BlogPage

