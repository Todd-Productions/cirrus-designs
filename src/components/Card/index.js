import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const classNames = (large, small, horizontal) => {
  const largeClass = large ? `card--large` : "";
  const smallClass = small ? `card--small` : "";
  const horClass = horizontal ? `card--x` : "";
  return `card ${largeClass} ${smallClass} ${horClass}`;
};

const Card = ({
  large,
  title,
  image,
  contain = false,
  subtitle,
  buttonText,
  children,
  small,
  horizontal,
  buttonLink
}) => (
  <div className={classNames(large, small, horizontal)}>
    {image && !horizontal ? (
      <div
        className={`card_image ${contain && "card_image--contain"}`}
        style={{ backgroundImage: `url("${image}")` }}
      />
    ) : null}

    {image && horizontal ? (
      <div className={`card_image ${contain && "card_image--contain"}`}>
        <img src={image} />
      </div>
    ) : null}

    <div className="card_content">
      {title ? <h3 className="card_title">{title}</h3> : null}

      {subtitle ? <h4 className="card_subtitle">{subtitle}</h4> : null}

      {children ? <p className="card_description">{children}</p> : null}

      {buttonText ? (
        <Link className="btn btn--default" to={buttonLink || "/"}>
          {buttonText}
        </Link>
      ) : null}
    </div>
  </div>
);

Card.propTypes = {
  isLarge: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string
};

export default Card;
