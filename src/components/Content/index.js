import React, { Fragment } from "react";
import paragraphs from "lines-to-paragraphs";
import remark from "remark";
import recommended from "remark-preset-lint-recommended";
import remarkHtml from "remark-html";

const remarkContent = content =>
  remark()
    .use(recommended)
    .use(remarkHtml)
    .processSync(content)
    .toString();

const Content = ({ children, renderHtml }) => (
  <Fragment>
    {renderHtml ? (
      <div
        dangerouslySetInnerHTML={{
          __html: paragraphs(remarkContent(children))
        }}
      />
    ) : (
      <div>{children}</div>
    )}
  </Fragment>
);

export default Content;
