import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Section from "../components/Section";
import { SEO } from "../components/SEO";

const NormalPageTemplate = ({ subtitle, title, body }) => (
  <div className="s-body s-body--internal">
    <Section title={title} subtitle={subtitle}>
      {body}
    </Section>
  </div>
);

const NormalPage = ({ data, ...props }) => {
  const { frontmatter } = data.markdownRemark;
  const { siteMetadata } = data.site;

  return (
    <Layout {...props}>
      <SEO title={frontmatter.seotitle} description={frontmatter.description} />
      <NormalPageTemplate
        {...frontmatter}
        body={data.markdownRemark.rawMarkdownBody}
      />
    </Layout>
  );
};

export default NormalPage;

export const normalPageQuery = graphql`
  query NormalPageQuery($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        seotitle
        seodescription
      }
      rawMarkdownBody
    }
  }
`;
