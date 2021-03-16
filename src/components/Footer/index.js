import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";

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
    render={data => (
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
                    <Link to="/3d-scanning">3D Scanning</Link>
                  </li>
                  <li>
                    <Link to="/3d-modeling-printing">3D Modeling</Link>
                  </li>
                  <li>
                    <Link to="/engineering-design-drafting">
                      Design Engineering
                    </Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
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
