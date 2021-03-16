import React, { Fragment } from "react";
import { graphql, Link } from "gatsby";

import Card from "../components/Card";
import Layout from "../components/Layout";
import Section from "../components/Section";
import { SEO } from "../components/SEO";

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

const PlanRender = () => (
  <Fragment>
    <div className="third-columns">
      <div>
        <div className="priceBlock">
          <h3>CONCEPT PACKAGE</h3>
          <ul>
            <li>Compare concept designs</li>
            <li>Basic 3D Model</li>
            <li>Full PDF-report</li>
            <li>Accuracy in order-of-magnitude</li>
            <li>No expert consultation included</li>
          </ul>
          <a
            className="btn btn--default btn--block"
            type="button"
            target="_blank"
            href="https://app.airshaper.com/users/sign_up?partner_id=aa223197-bb6f-4099-a46c-c9e7063e70b6"
          >
            Run Simulation
          </a>
        </div>
      </div>
      <div>
        <div className="priceBlock">
          <h3>DETAILED PACKAGE</h3>
          <ul>
            <li>Compare detailed designs</li>
            <li>Detailed 3D Model</li>
            <li>Full PDF-report</li>
            <li>Immediate accuracy</li>
            <li>Expert contact (30 minutes)</li>
          </ul>
          <a
            className="btn btn--default btn--block"
            type="button"
            target="_blank"
            href="https://app.airshaper.com/users/sign_up?partner_id=aa223197-bb6f-4099-a46c-c9e7063e70b6"
          >
            Run Simulation
          </a>
        </div>
      </div>
      <div>
        <div className="priceBlock">
          <h3>ULTIMATE PACKAGE</h3>
          <ul>
            <li>Tweak final designs</li>
            <li>Pre-production 3D Model</li>
            <li>Full PDF-report</li>
            <li>High Accuracy</li>
            <li>Expert contact (60 minutes)</li>
          </ul>
          <a
            className="btn btn--default btn--block"
            type="button"
            target="_blank"
            href="https://app.airshaper.com/users/sign_up?partner_id=aa223197-bb6f-4099-a46c-c9e7063e70b6"
          >
            Run Simulation
          </a>
        </div>
      </div>
    </div>
  </Fragment>
);

const ConceptualPageTemplate = ({
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
      <Section
        title={sectitle}
        image={secimage}
        theme="dark"
        leftImage={true}
        renderHtml={false}
        bottomRender={PlanRender}
      >
        <div dangerouslySetInnerHTML={{ __html: secbody }} />
      </Section>
    )}
    {!isNull(blocks) && (
      <div className="s-body_card-container">{renderBlocks(blocks)}</div>
    )}
  </div>
);

const ConceptualPage = ({ data, ...props }) => {
  const { frontmatter } = data.markdownRemark;
  const { siteMetadata } = data.site;

  return (
    <Layout {...props}>
      <SEO title={frontmatter.seotitle} description={frontmatter.description} />
      <ConceptualPageTemplate
        {...frontmatter}
        body={data.markdownRemark.rawMarkdownBody}
      />
    </Layout>
  );
};

export default ConceptualPage;

export const conceptualePageQuery = graphql`
  query ConceptualPage($id: String!) {
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
