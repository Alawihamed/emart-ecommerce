import styled from "styled-components";

export const FeaturedControls = styled.div`
  text-align: center;
  margin-bottom: 50px;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ul li {
    font-size: 18px;
    color: #1c1c1c;
    display: inline-block;
    margin-right: 25px;
    position: relative;
    cursor: pointer;
  }
  ul li::after {
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background: #7fad39;
    content: "";
    opacity: 0;
  }
  .active::after {
    opacity: 1;
  }
`;
