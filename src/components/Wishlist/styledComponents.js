import styled from "styled-components";
import { Container } from "@mui/material";

export const Containers = styled(Container)`
  .empty-wishlist {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 350px;
    }
    button {
      background-color: #7fad39;
      color: #fff;
      font-size: 18px;
      padding: 10px;
      border: 1px solid #7fad39;
      outline: none;
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        background-color: #558c02;
      }
    }
  }
  .remove-all {
    text-align: right;
    cursor: pointer;
    svg {
      margin-left: 5px;
    }
  }
`;

export const WishlistContainer = styled.div`
  height: 100px;
  padding: 5px 20px;
  background-color: #f0f4fc;
  box-shadow: 5px 5px 10px #ddd;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  .wishlist-left {
    display: flex;
    align-items: center;
    img {
      width: 80px;
    }
    p {
      font-size: 18px;
      margin-left: 20px;
      p {
        margin: 0px;
        font-size: 13px;
        font-weight: bold;
      }
    }
  }
  .close-button {
    font-size: 22px;
    cursor: pointer;
  }
`;
