/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Will\'s Blog',
    description: 'A blog made by Will',
    homeImgUrl: 'https://media.macphun.com/img/uploads/customer/blog/1548348087/15483505255c49f43d0c1ab5.02000369.jpeg?q=85&w=1680',
    contactImgUrl: 'https://i.imgur.com/h9dBE7p.png',
  },
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-netlify-cms',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
  ],
};
