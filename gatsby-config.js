/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title:"My First Gatsby Website"
  },
  plugins: [
	'gatsby-plugin-react-helmet',
	{
		resolve:"gatsby-source-contentful",
		options:{
			spaceId: process.env.CONTENTFUL_SPACE_ID,
			accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
		}

	},
    'gatsby-plugin-sass',
    {
      resolve:"gatsby-source-filesystem",
      options: {
        name:'src',
        path:`${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve:"gatsby-transformer-remark",
      options:{
        plugins: [
          'gatsby-remark-images',
          {
            resolve:"gatsby-remark-images",
            options:{
				maxWidth: 750,
				linkImagesToOriginal: false
            }
          }
        ]
      }
    },
  ],
}
