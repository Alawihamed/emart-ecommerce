import styled from "styled-components";
import { Container } from "@mui/material";

export const CardContainer = styled(Container)`
  .table-responsive {
    display: block;
    width: 100%;
    overflow-x: auto;
    table {
      width: 100%;
      color: #000;
      border-collapse: collapse;
      thead th {
        text-align: left;
        padding: 15px 0;
        text-transform: uppercase;
        border: none;
        font-weight: 600;
        font-size: 15px;
        border-bottom: 1px solid #7fad39;
      }
      tbody td {
        color: #666;
        padding: 20px 5px;
        border-bottom: 1px solid #7fad39;
        button {
          background-color: transparent;
          border: none;
          outline: none;
          svg {
            font-size: 12px;
          }
        }
      }
      .image {
        width: 200px;
        @media (max-width: 567px) {
          width: 100px;
          img {
            width: 60px;
            height: 60px;
          }
        }
      }
      .price {
        font-weight: bold;
      }
      .quntity {
        font-size: 20px;
        font-weight: bold;
        button {
          cursor: pointer;
        }
      }
      .total {
        display: flex;
        justify-content: space-between;
        align-items: center;
        small {
          font-size: 16px;
          font-weight: bold;
        }
        .remove-button {
          cursor: pointer;
        }
      }
    }
    .subtotal {
      text-align: right;
      margin-right: 20px;
      font-size: 18px;
      font-weight: bold;
      color: #000;
    }
    .continer-buttons {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 50px;
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
        @media (max-width: 567px) {
          font-size: 14px;
        }
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
  .empty {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 250px;
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
`;
