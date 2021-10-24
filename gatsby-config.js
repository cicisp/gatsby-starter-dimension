module.exports = {
  siteMetadata: {
    title: 'Portfolio',
    author: 'Cece SP',
    description: '',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: ' '
         // This path is relative to the root of the site.
      },
      // resolve: `gatsby-source-ghost`,
      // options: {
      //   apiUrl: `https://ghost.critically-mia.me`,
      //   contentApiKey: `a700141b95c14b1022cb4eb7fa`,
      // }
    },
    'gatsby-plugin-sass',
  ],
}