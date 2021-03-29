/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
  {
    resolve: "gatsby-plugin-react-svg",
    options: {
      rule: {
        include: /images/ 
      }
    }
  },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `portfolio-aiaru`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#E63946`,
        theme_color:`#E63946`,
        icon: `src/images/icon.png`,
      }
    },
    `gatsby-plugin-react-helmet`,
  	'gatsby-plugin-theme-ui',
  	'gatsby-theme-style-guide',
    {
        resolve: `gatsby-plugin-scroll-indicator`,
        options: {
            
            color: '#E63946',
            // set the height of the scroll indicator
            height: '8px',
            // Set specific paths where you want the scroll indicator using regex
            paths: ['/'],
            // Configure the z-index of the indicator element
            zIndex: `9999`,
        },
    },
  	{
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lobster Two\:400`,
          `Roboto\:400,500,600,700`,
          `Rubik\:400,500,600,700`,
          `Quicksand\:400,500,600,700`,
          `Comfortaa\:400,500,600,700`,
           `Raleway\:400,500,600,700`
        ],
        display: 'swap'
      }
    }
  ]
}

