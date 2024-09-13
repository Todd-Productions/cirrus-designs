import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import { lighten } from "polished";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Social = styled.div`
  a {
    color: #888888;
    display: inline-block;
    font-size: 1.5rem;
    padding: 0px 5px;

    &:hover {
      color: ${lighten(0.2, "#888888")};
    }
  }

  .sr-only {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        site {
          siteMetadata {
            address_one
            address_two
            email
            phone
          }
        }
      }
    `}
    render={(data) => (
      <footer className="s-footer">
        <div className="s-footer_top">
          <div className="wrapper s-footer_top_wrapper">
            <div className="s-footer_top_links">
              <h2 className="s-footer_heading">Links</h2>

              <nav className="f-nav">
                <ul className="f-nav_menu">
                  <li>
                    <Link to="/">Cirrus Design Home</Link>
                  </li>
                  <li>
                    <Link to="/3d-scanning/">3D Scanning</Link>
                  </li>
                  <li>
                    <Link to="/confined-space-uav-inspections/">
                      UAV Inspections
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/">About</Link>
                  </li>
                  <li>
                    <Link to="/contact/">Contact</Link>
                  </li>
                  <li>
                    <Link to="/sitemap/">Sitemap</Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="s-footer_top_contact">
              <h2 className="s-footer_heading">Contact</h2>
              <p>
                Phone: {data.site.siteMetadata.phone}
                <br />
                <br />
                <a href={`mailto: ${data.site.siteMetadata.email}`}>
                  {data.site.siteMetadata.email}
                </a>
              </p>
              <br />
              <br />
              <h2 className="s-footer_heading">Follow Us</h2>
              <Social>
                <a
                  href="https://www.linkedin.com/company/cirrus-design-industries-inc/?viewAsMember=true"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                  <span className="sr-only">Visit us on LinkedIn</span>
                </a>
              </Social>
            </div>
          </div>
        </div>
        <div className="s-footer_bottom">
          <div className="wrapper s-footer_bottom_wrapper">
            <div className="s-footer_bottom_meta">
              &copy; Cirrus Design. All Rights Reserved.
            </div>
            {/* <div className="s-footer_bottom_social">
              <SocialIcons />
            </div> */}
          </div>
        </div>
      </footer>
    )}
  />
);

export default Footer;
