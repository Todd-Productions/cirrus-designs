import React from "react";
import { StaticQuery, graphql } from "gatsby";

import facebook from "../../img/social/facebook.svg";
import twitter from "../../img/social/twitter.svg";
import linkedin from "../../img/social/linkedin.svg";

const SocialIcons = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            facebook
            twitter
            linkedin
          }
        }
      }
    `}
    render={data => (
      <ul className="social">
        <li>
          <a
            href={data.site.siteMetadata.facebook}
            target="_blank"
            className="social_link"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="Facebook Page" className="social_image" />
          </a>
        </li>
        <li>
          <a
            href={data.site.siteMetadata.twitter}
            target="_blank"
            className="social_link"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="Twitter Page" className="social_image" />
          </a>
        </li>
        <li>
          <a
            href={data.site.siteMetadata.linkedin}
            target="_blank"
            className="social_link"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Linkedin Page" className="social_image" />
          </a>
        </li>
      </ul>
    )}
  />
);

export default SocialIcons;
