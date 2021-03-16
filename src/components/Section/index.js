import React, { Fragment } from "react";
import Content from "../Content";

const classNames = (theme, leftImage, full) => {
  const themeClass = theme ? `section--${theme}` : "";
  const imageAlign = leftImage ? `section--leftImage` : "section--rightImage";
  const fullClass = full ? `section--full` : "";
  return `section ${themeClass} ${imageAlign} ${fullClass}`;
};

const Section = ({
  children,
  theme,
  renderHtml = true,
  video,
  image,
  image2,
  image3,
  leftImage,
  title,
  titleLink,
  imageTitleLink,
  subtitle,
  addition,
  imagetitle,
  aboveSectionTitle,
  full,
  bottomRender
}) => (
  <section className={classNames(theme, leftImage, full)}>
    <div className="wrapper section_wrapper">
      {image ? (
        <div className="section_image">
          {imagetitle && (
            <Fragment>
              {imageTitleLink ? (
                <a
                  className="section_titleLink"
                  target="_blank"
                  href={imageTitleLink}
                >
                  <h1 className="section_title text-center">{imagetitle}</h1>
                </a>
              ) : (
                <h1 className="section_title text-center">{imagetitle}</h1>
              )}
            </Fragment>
          )}
          <img src={image} className="section_image" />
          {image2 && <img src={image2} className="section_image" />}
          {image3 && <img src={image3} className="section_image" />}
        </div>
      ) : null}

      {video ? (
        <div className="section_image section_video">
          <div className="embed-response">
            <video autoPlay loop>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      ) : null}

      <div className="section_content">
        {aboveSectionTitle && aboveSectionTitle()}
        {titleLink ? (
          <a target="_blank" className="section_titleLink" href={titleLink}>
            <h1 className="section_title">{title}</h1>
          </a>
        ) : (
          <h1 className="section_title">{title}</h1>
        )}
        <h2 className="section_subtitle">{subtitle}</h2>

        {addition && addition()}

        {typeof children === "function" ? (
          <Content renderHtml={renderHtml}>{children()}</Content>
        ) : (
          <Content renderHtml={renderHtml}>{children}</Content>
        )}
      </div>
    </div>
    {bottomRender && <div className="wrapper">{bottomRender()}</div>}
  </section>
);

export default Section;
