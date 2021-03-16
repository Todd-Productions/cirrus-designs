import React from "react";
import SocialIcons from "../SocialIcons";
import { StaticQuery, graphql, Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import logo from "../../img/logo.png";

const nav = [
  {
    label: `3D Scanning`,
    uri: `/3d-scanning`,
    children: [
      {
        label: `Industrial Plants`,
        uri: `/services/industrial-plants`
      },
      {
        label: `Arch Eng Const (AEC)`,
        uri: `/services/aec`
      },
      {
        label: `Real Estate`,
        uri: `/services/real-estate`
      },
      {
        label: `Reverse Engineering`,
        uri: `/services/reverse-engineering`
      },
      {
        label: `Conceptual Design + Testing`,
        uri: `/services/conceptual-design-testing`
      }
    ]
  },
  {
    label: `3D Modeling`,
    uri: `/3d-modeling-printing`
  },
  {
    label: `Design Engineering`,
    uri: `/engineering-design-drafting`
  },
  {
    label: `About`,
    uri: `/about`
  },
  {
    label: `Contact`,
    uri: `/contact`
  }
];

class Header extends React.Component {
  state = {
    toggle: false
  };

  constructor(props) {
    super(props);
    this.headerRef = React.createRef();
  }

  componentWillMount() {
    this.addEvents();
  }

  componentWillUnmount() {
    this.removeEvents();
  }

  addEvents = () => {
    if (typeof window === "undefined") {
      return;
    }

    window.addEventListener("scroll", this.handleScroll);
  };

  removeEvents = () => {
    if (typeof window === "undefined") {
      return;
    }

    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = () => {
    const scrollTarget = window,
      stickyDiv = this.headerRef.current || null,
      scrollRect = {
        height: scrollTarget.innerHeight,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        x: scrollTarget.scrollX,
        y: scrollTarget.scrollY
      };

    // If no sticky ref set
    if (!stickyDiv) {
      return;
    }
    const stickyRect = stickyDiv.getBoundingClientRect();
    const stuckTop = scrollRect.y > stickyRect.height;
    this.setState({ stuckTop });
  };

  renderMenuClass = () => {
    const navMenu = this.state.toggle ? `m-nav_menu--openmenu` : "";
    return `m-nav_menu ${navMenu}`;
  };

  activeClass = uri => (uri === this.props.current ? "active" : null);

  renderNav = () =>
    nav.map(item => (
      <li>
        <Link to={item.uri} className={this.activeClass(item.uri)}>
          {item.label}
        </Link>
        {item.children ? (
          <div className="m-nav_dd">
            <ul>
              {item.children.map(sub => (
                <li>
                  <Link to={sub.uri} className={this.activeClass(sub.uri)}>
                    {sub.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </li>
    ));

  render() {
    return (
      <StaticQuery
        query={graphql`
          query HeaderQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => {
          return (
            <header
              className={`s-header ${this.state.stuckTop &&
                "s-header--sticky"}`}
              ref={this.headerRef}
            >
              <section className="s-header_top">
                <div className="wrapper">
                  {/* <div className="s-header_social">
                    <SocialIcons />
                  </div> */}
                </div>
              </section>
              <section className="s-header_bottom">
                <div className="wrapper s-header_wrapper">
                  <button
                    className="btn--link s-header_menuButton"
                    onClick={() =>
                      this.setState({ toggle: !this.state.toggle })
                    }
                  >
                    <FontAwesomeIcon icon={faBars} />
                  </button>

                  <div className="s-header_logo">
                    <Link to="/">
                      <img
                        className="s-header_logo_img"
                        src={logo}
                        alt={data.site.siteMetadata.title}
                      />
                    </Link>
                  </div>

                  <nav className="m-nav">
                    <ul className={this.renderMenuClass()}>
                      {this.renderNav()}
                    </ul>
                  </nav>
                </div>
              </section>
            </header>
          );
        }}
      />
    );
  }
}

export default Header;
