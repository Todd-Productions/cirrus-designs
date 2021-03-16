import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { SEO } from "../components/SEO";
import Section from "../components/Section";

import video from "../video/logo-animation.mp4";

const AboutPageTemplate = ({ subtitle, title, body }) => (
  <div className="s-body s-body--internal">
    <Section title={title} subtitle={subtitle} video={video}>
      {body}
    </Section>
  </div>
);

const AboutPage = ({ data, ...props }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout {...props}>
      <SEO title={frontmatter.seotitle} description={frontmatter.description} />
      <AboutPageTemplate
        {...frontmatter}
        body={data.markdownRemark.rawMarkdownBody}
      />
    </Layout>
  );
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        image
        image2
        image3
        secbody
        sectitle
        secimage
        secvideo
        seotitle
        seodescription
        services {
          title
          description
          buttontext
          buttonlink
          image
        }
      }
      rawMarkdownBody
    }
  }
`;
