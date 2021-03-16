import React from "react";
import Header from "../Header";
import Footer from "../Footer";

import "../../styles/main.sass";

const Layout = ({ children, location, ...props }) => {
  return (
    <div className="layout">
      <Header current={location.pathname} />

      <section className="l-content">{children}</section>

      <Footer />
    </div>
  );
};

export default Layout;
