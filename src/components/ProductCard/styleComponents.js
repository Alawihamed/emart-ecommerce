import styled from "styled-components";
import Modal from "@mui/material/Modal";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  .card {
    width: 260px;
    background-color: #fff;
    margin-right: 20px;
    margin-bottom: 50px;
    text-align: center;
    box-shadow: 5px 5px 20px #ddd;
    transition: 0.3s;
    &:hover {
      transform: translateY(5px);
    }
    &:hover .pic .list-function {
      bottom: 15px;
    }
    .pic {
      background-color: #f0f4fc;
      height: 270px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
      img {
        width: 65%;
      }
      .list-function {
        display: flex;
        position: absolute;
        bottom: -50px;
        transition: all 0.5s;
      }
      li {
        background-color: #fff;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 6px;
        transition: all 0.3s;
        border: 1px solid #ebebeb;
        cursor: pointer;
        &:hover {
          background-color: #7fad39;
          &:hover svg {
            transition: all 0.3s;
            color: #fff;
            transform: rotate(360deg);
          }
        }
      }
    }
    .card-info {
      p {
        margin-top: 10px;
        margin-bottom: 10px;
      }
      .price {
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
`;
export const PModal = styled(Modal)`
  .close-icon {
    float: right;
    cursor: pointer;
  }
  .row {
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    .col-6 {
      width: 50%;
      padding: 20px;
      text-align: left;
      @media (max-width: 768px) {
        width: 100%;
      }
      .pic {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          padding: 30px;
          width: 100%;
        }
      }
      .name {
        color: #000;
        font-size: 28px;
        font-weight: bold;
        margin-top: 0px;
      }
      .desc {
        color: #969696;
        font-size: 16px;
      }
      .price {
        color: #7fad39;
        font-size: 22px;
        font-weight: bold;
        margin-top: 0px;
        margin-bottom: 30px;
      }
      button {
        background-color: #7fad39;
        color: #fff;
        font-size: 18px;
        padding: 10px 30px;
        border: 1px solid #7fad39;
        outline: none;
        border-radius: 5px;
        margin-bottom: 30px;
        cursor: pointer;
        &:hover {
          background-color: #558c02;
        }
        @media (max-width: 567px) {
          font-size: 14px;
        }
      }
      hr {
        background-color: #7fad39;
        border: 1px solid #7fad39;
      }
      h4 {
        display: flex;
        align-items: center;
        p {
          color: #000;
          padding: 10px;
          margin: 0px 20px;
          border: 1px solid #e2e2e2;
          border-radius: 5px;
          transition: 0.3s;

          &:hover {
            color: #7fad39;
            border: 1px solid #7fad39;
          }
        }
      }
    }
  }
`;
