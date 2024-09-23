import React from "react";
import { Helmet } from "react-helmet";

import Header from "../Header";
import Footer from "../Footer";

import "../../styles/main.sass";

const Layout = ({ children, location, ...props }) => {
  return (
    <div className="layout">
      <Helmet>
        <script
          id="google-script"
          key="google-script"
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GATSBY_GA_ID}`}
        ></script>
        <script type="text/javascript">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.GATSBY_GA_ID}');
        `}</script>
        <script type="text/javascript">{`
          (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", '${process.env.GATSBY_CLARITY_ID}');
        `}</script>
      </Helmet>

      <Header current={location.pathname} />

      <section className="l-content">{children}</section>

      <Footer />
    </div>
  );
};

export default Layout;
