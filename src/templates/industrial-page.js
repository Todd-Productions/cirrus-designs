import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Section from "../components/Section";
import { SEO } from "../components/SEO";

import video from "../video/point-cloud.mp4";

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

const IndustrialPageTemplate = ({
  subtitle,
  sectitle,
  secbody,
  secimage,
  title,
  body,
  image,
  image2,
  image3,
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

    {(!isNull(secbody) || !isNull(sectitle)) && (
      <Section
        title="GENERATE A 2D BLUEPRINT FROM A 3D SCAN"
        imageTitleLink="https://my.matterport.com/show/?m=YCBLWTM96af"
        imagetitle={sectitle}
        image={secimage}
        theme="dark"
        leftImage={true}
        addition={() => (
          <div className="embed-response">
            <video autoPlay loop>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        )}
      />
    )}

    <div className="s-body_card-container s-body_card-container--dark">
      {renderBlocks(services)}
    </div>
  </div>
);

const IndustrialPage = ({ data, ...props }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout {...props}>
      <SEO title={frontmatter.seotitle} description={frontmatter.description} />
      <IndustrialPageTemplate
        {...frontmatter}
        body={data.markdownRemark.rawMarkdownBody}
      />
    </Layout>
  );
};

export default IndustrialPage;

export const industrialPageQuery = graphql`
  query IndustrialOverviewPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        seotitle
        seodescription
        subtitle
        image
        image2
        image3
        secbody
        sectitle
        secimage
        secvideo
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
