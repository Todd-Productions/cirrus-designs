import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";

const NotFoundPage = props => (
  <Layout {...props}>
    <div className="s-body s-body--internal">
      <Section title="404 Error" subtitle="PAGE NOTE FOUND">
        Sorry the route you requested does not exists. Please try another route.
      </Section>
    </div>
  </Layout>
);

export default NotFoundPage;
