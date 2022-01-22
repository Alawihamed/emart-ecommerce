import styled from "styled-components";

export const Nav = styled.div`
  background-color: #ddd;
  height: 60px;
  .container {
    width: 100%;
    height: 60px;
    padding-left: 16px;
    padding-right: 16px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    @media (min-width: 600px) {
      padding-left: 24px;
      padding-right: 24px;
    }
    @media (min-width: 1200px) {
      max-width: 1200px;
    }
    img {
      width: 150px;
    }
    .right-item {
      margin-left: auto;
      ul {
        display: flex;
        align-items: center;
        li {
          position: relative;
          display: flex;
          align-items: center;
          margin-right: 10px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s;
          &:hover {
            color: #7fad39;
          }
          svg {
            margin-left: 3px;
          }
          p {
            text-align: center;
            position: absolute;
            top: -25px;
            right: -15px;
            background: #7fad39;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            color: #fff;
            font-size: 14px;
          }
          a {
            color: #000;
            text-decoration: none;
            position: relative;
            display: flex;
            align-items: center;
            margin-right: 10px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s;
            &:hover {
              color: #7fad39;
            }
          }
        }
      }
    }
  }
`;
