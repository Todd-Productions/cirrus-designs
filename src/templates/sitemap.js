import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { SEO } from "../components/SEO";
import Section from "../components/Section";

const SiteMapTemplate = ({ title, children }) => (
  <div className="s-body s-body--internal">
    <Section title={title} renderHtml={false}>
      {children}
    </Section>
  </div>
);

const SiteMapQuery = ({ data, ...props }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout {...props}>
      <SEO
        title={frontmatter.seotitle}
        description={frontmatter.seodescription}
      />
      <SiteMapTemplate title="Cirrus Design Website Sitemap">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridGap: "4rem",
            marginTop: "2rem",
          }}
        >
          <div>
            <ul style={{ lineHeight: "150%" }}>
              <li>
                <Link to="/">Cirrus Design Home</Link> - Our experience with
                professional 3D scanning industrial power plants, architectural
                engineering and 3D printing services
              </li>
              <br />
              <li>
                <Link to="/3d-scanning">3D Scanning</Link> - 3D Scanning
                produces what is known as a point cloud, or a set of data points
                created by measuring many points on the external surface of an
                existing object
                <br />
                <br />
                <ul style={{ paddingLeft: "3rem", lineHeight: "120%" }}>
                  <li>
                    <Link to="/services/industrial-plants">
                      Industrial Plants
                    </Link>{" "}
                    - 3D scanning technology offers a powerful and effective
                    means to gather existing conditions, which includes machine
                    locations, piping, equipment and existing building structure
                  </li>
                  <br />
                  <li>
                    <Link to="/services/aec">
                      Architectural Engineering Construction (AEC)
                    </Link>{" "}
                    - multi-disciplinary approach to the planning, design,
                    construction and operation of a building
                  </li>
                  <br />
                  <li>
                    <Link to="/services/real-estate">Real Estate</Link> -
                    Three-dimensional scanning technology has revolutionized the
                    real estate industry, providing true immersive 3D virtual
                    walkthroughs
                  </li>
                  <br />
                  <li>
                    <Link to="/services/reverse-engineering">
                      Reverse Engineering
                    </Link>{" "}
                    - The use of our technology and capabilities has helped our
                    clients reverse engineer machinery wear items and parts with
                    complex geometry, such as turbines, bearings and scroll
                    cases
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <ul style={{ lineHeight: "150%" }}>
              <li>
                <Link to="/about">About Cirrus Design</Link> - Our design
                process is rooted in three-dimensional design and drafting using
                programs like AutoCAD, Solidworks, or Inventor, depending on the
                needs of our clients
              </li>
              <br />
              <li>
                <Link to="/confined-space-uav-inspections">
                  UAV Inspections
                </Link>{" "}
                - Cirrus Design helps turn our clients’ designs into reality. We
                provide comprehensive design engineering services in the
                mechanical, electrical and structural fields
              </li>
              <br />
              <li>
                <Link to="/contact">Contact Cirrus Design</Link> - Contact
                Cirrus Design Industrial 3D scanning, 3D printing, mechanical
                engineering services and more
              </li>
            </ul>
          </div>
        </div>
      </SiteMapTemplate>
    </Layout>
  );
};

export default SiteMapQuery;

export const siteMapQuery = graphql`
  query SiteMapQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        seotitle
        seodescription
      }
    }
  }
`;
