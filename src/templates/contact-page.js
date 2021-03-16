import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Section from "../components/Section";
import ContactForm from "../components/ContactForm";
import { SEO } from "../components/SEO";

const ContactPageTemplate = ({ subtitle, title }) => (
  <div className="s-body s-body--internal">
    <Section title={title} subtitle={subtitle} />
    <div className="section section--dark">
      <div className="wrapper wrapper--no-flex">
        <p>Fill out the information below and have us contact you!</p>
        <ContactForm />
      </div>
    </div>
  </div>
);

const ContactPage = ({ data, ...props }) => {
  const { frontmatter } = data.markdownRemark;
  const { siteMetadata } = data.site;

  return (
    <Layout {...props}>
      <SEO title={frontmatter.seotitle} description={frontmatter.description} />
      <ContactPageTemplate
        {...frontmatter}
        body={data.markdownRemark.rawMarkdownBody}
      />
    </Layout>
  );
};

export default ContactPage;

export const contactPageQuery = graphql`
  query ContactPageQuery($id: String!) {
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
