/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title:
      "Boolean Monk - Freelance Web Developer and UI/UX Designer in Nottingham",
    author: "Jithesh Kumar",
    description:
      "Hello, I am Jithesh Kumar, Creative front end software developer and data driven user experiance designer.",
    url: "http://www.booleanmonk.com",
  },
  plugins: ["gatsby-plugin-react-helmet",`gatsby-plugin-netlify-cms`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/content/blog`,
      name: `blog`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/content/assets`,
      name: `assets`,
    },
  },
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: [`.mdx`, `.md`],
    },
  },
  ],
}
