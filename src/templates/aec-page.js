import React from "react";
import { graphql } from "gatsby";

import { SEO } from "../components/SEO";
import Card from "../components/Card";
import Layout from "../components/Layout";
import Section from "../components/Section";

const renderBlocks = blocks => {
  return blocks.map(block => (
    <Card
      title={block.subtitle}
      small={true}
      contain={block.contain}
      image={block.image}
    >
      <div dangerouslySetInnerHTML={{ __html: block.description }} />
    </Card>
  ));
};

const isNull = variable => variable === "" || variable === null;

const AECPageTemplate = ({
  title,
  body,
  image,
  image2,
  secbody,
  secimage,
  sectitle,
  blocks
}) => (
  <div className="s-body s-body--internal">
    <Section image={image} image2={image2} title={title}>
      {body}
    </Section>
    {(!isNull(secbody) || !isNull(sectitle)) && (
      <Section title={sectitle} image={secimage} theme="dark" leftImage={true}>
        {secbody}
      </Section>
    )}
    {!isNull(blocks) && (
      <div className="s-body_card-container">{renderBlocks(blocks)}</div>
    )}
  </div>
);

const AECPage = ({ data, ...props }) => {
  const { frontmatter } = data.markdownRemark;
  const { siteMetadata } = data.site;

  return (
    <Layout {...props}>
      <SEO title={frontmatter.seotitle} description={frontmatter.description} />
      <AECPageTemplate
        {...frontmatter}
        body={data.markdownRemark.rawMarkdownBody}
      />
    </Layout>
  );
};

export default AECPage;

export const aecPageQuery = graphql`
  query AECPage($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image
        image2
        secbody
        sectitle
        secimage
        seotitle
        seodescription
        blocks {
          contain
          subtitle
          description
          image
        }
      }
      rawMarkdownBody
    }
  }
`;
