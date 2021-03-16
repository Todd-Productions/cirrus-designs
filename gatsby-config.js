// const { GA_TRACKING } = "";

module.exports = {
  siteMetadata: {
    siteUrl: "https://cirrusdesign.net",
    title: "Cirrus Design",
    description: "Cirrus Design website developed by Todd Productions Inc.",
    facebook: "http://facebook.com",
    twitter: "http://twitter.com",
    linkedin: "http://linkedin.com",
    phone: "509-368-9794",
    address_one: "123 Main St",
    address_two: "Any City, USA 12345",
    email: "3dscanning@cirrusdesign.net",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: GA_TRACKING,
    //   },
    // },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `{
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
          }`,
      },
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ["/all.sass"], // applies purging only on the bulma css file
      },
    },
  ],
};
