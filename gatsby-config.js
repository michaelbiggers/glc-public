/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `GLC Public`,
    siteUrl: `https://greenvillelearningcollective.com`
  },
  plugins: [
    "gatsby-plugin-image",
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Shrikhand`,
            file: `https://fonts.googleapis.com/css2?family=Shrikhand&display=swap`,
          },
          {
            name: `Maven Pro`,
            file: `https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400..900&family=Shrikhand&display=swap`,
          },
          {
            name: `Work Sans`,
            file: `https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap`,
          },
          {
            name: `DM Serif Display`,
            file: `https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap`,
          },
          {
            name: `Playfair Display`,
            file: `https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap`,
          },
          {
            name: `Lora`,
            file: `https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap`,
          },
        ],
      },
    },
  ]
};