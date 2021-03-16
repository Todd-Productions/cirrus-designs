import React from "react";
import { Link } from "gatsby";

class Banner extends React.Component {
  state = {
    activeSlide: 0,
  };

  componentDidMount() {
    this.startSlider();
  }
  componentWillUnmount() {
    this.clearSlider();
  }

  startSlider = () => {
    this.sliderInterval = setInterval(() => {
      this.transitionSlides();
    }, 4000);
  };
  clearSlider = () => {
    clearInterval(this.sliderInterval);
  };

  // Go To Next
  nextSlide = () => {
    this.clearSlider();
    this.transitionSlides();
    this.startSlider();
  };

  // Go Back
  prevSlide = () => {
    this.clearSlider();
    const activeSlide =
      this.state.activeSlide <= 0
        ? this.props.slides.length - 1
        : this.state.activeSlide - 1;
    this.setState({
      activeSlide,
    });
    this.startSlider();
  };

  transitionSlides = () => {
    const activeSlide =
      this.state.activeSlide >= this.props.slides.length - 1
        ? 0
        : this.state.activeSlide + 1;

    // Set new slide
    this.setState({
      activeSlide,
    });
  };

  renderItems = slides => {
    return slides.map((slide, ix) => {
      return (
        <div
          className={`banner_slide ${this.state.activeSlide === ix &&
            "active"}`}
          key={ix}
          style={{ backgroundImage: `url("${slide.image}")` }}
        >
          <div className="banner_slide_overlay">
            <h1 className="banner_slide_title">{slide.title}</h1>
            <h2 className="banner_slide_subtitle">{slide.subtitle}</h2>
            <p className="banner_slide_text">{slide.description}</p>
            {/* <Link
              className="btn btn--default btn--margin-top"
              to={slide.buttonlink}
            >
              {slide.buttontext}
            </Link> */}
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <section className="banner">
        <div
          className="banner_arrow banner_arrow--prev"
          onClick={this.prevSlide}
        />
        {this.renderItems(this.props.slides)}
        <div
          className="banner_arrow banner_arrow--next"
          onClick={this.nextSlide}
        />
      </section>
    );
  }
}
export default Banner;
