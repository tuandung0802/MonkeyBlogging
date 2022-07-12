import React from "react";
import styled from "styled-components";
import { Button } from "../../button.js";

const HomeBannerStyles = styled.div`
  min-height: 520px;
  padding: 40px 0;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );

  .banner {
    display: flex;
    justify-content: center;
    align-items: center;
    &-content {
      max-width: 600px;
      color: white;
    }
    &-heading {
      font-size: 36px;
      margin-bottom: 20px;
    }
    &-desc {
      line-height: 1.75;
      margin-bottom: 40px;
    }
  }
`;

const HomeBanner = () => {
  return (
    <HomeBannerStyles>
      <div className="container">
        <div className="banner">
          <div className="banner-content">
            <h1 className="banner-heading">Monkey Blogging</h1>
            <p className="banner-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              magni voluptates nesciunt dignissimos sint tenetur cupiditate rem
              architecto, id inventore veritatis corrupti consectetur dolor
              suscipit? Ipsa minima a odio voluptas.
            </p>
            <Button to="/sign-up" kind="secondary">
              Get Started
            </Button>
          </div>
          <div className="banner-image">
            <img src=" ./img-banner.png " alt="" />
          </div>
        </div>
      </div>
    </HomeBannerStyles>
  );
};

export default HomeBanner;
