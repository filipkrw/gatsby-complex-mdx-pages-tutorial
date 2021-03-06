module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `complexPage`,
        path: `${__dirname}/src/complex-pages`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`
  ],
  pathPrefix: `/gatsby-complex-mdx-pages-tutorial`
}
