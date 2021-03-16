import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Section from "../components/Section";
import { SEO } from "../components/SEO";

const isNull = variable => variable === "" || variable === null;

const renderBlocks = services => {
  return services !== null
    ? services.map(service => (
        <Card
          title={service.title}
          small={true}
          image={service.image}
          buttonText={service.buttontext}
          buttonLink={service.buttonlink}
        >
          {service.description}
        </Card>
      ))
    : null;
};

const OverviewPageTemplate = ({
  subtitle,
  sectitle,
  secbody,
  secimage,
  title,
  body,
  image,
  image2,
  image3,
  secvideo,
  services
}) => (
  <div className="s-body s-body--internal">
    <Section
      title={title}
      subtitle={subtitle}
      image={image}
      image2={image2}
      image3={image3}
    >
      {body}
    </Section>
    {secvideo && <Section>{secvideo}</Section>}
    {(!isNull(secbody) || !isNull(sectitle)) && (
      <Section title={sectitle} image={secimage} theme="dark" leftImage={true}>
        {secbody}
      </Section>
    )}
    <div className="s-body_card-container s-body_card-container--dark">
      {renderBlocks(services)}
    </div>
  </div>
);

const OverviewPage = ({ data, ...props }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout {...props}>
      <SEO title={frontmatter.seotitle} description={frontmatter.description} />
      <OverviewPageTemplate
        {...frontmatter}
        body={data.markdownRemark.rawMarkdownBody}
      />
    </Layout>
  );
};

export default OverviewPage;

export const overviewPageQuery = graphql`
  query ServiceOverviewPage($id: String!) {
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
