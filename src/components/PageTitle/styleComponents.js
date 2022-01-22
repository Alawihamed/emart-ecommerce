import styled from "styled-components";

export const TitleSection = styled.div`
  text-align: center;
  margin-bottom: 50px;
  h2 {
    position: relative;
    font-size: 36px;
    color: #1c1c1c;
    font-weight: 700;
    transition: 0.6s;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -15px;
      right: 0;
      height: 4px;
      width: 80px;
      background: #7fad39;
      margin: 0 auto;
      transition: 0.8s;
    }
    /* &:hover {
      color: #fff;
    }
    &:hover::after {
      bottom: 0px;
      height: 40px;
      width: 350px;
      z-index: -1;
    } */
  }
`;
