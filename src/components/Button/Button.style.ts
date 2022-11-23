import styled from "styled-components";

export const StyledButton = styled.button`
  .btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
  }
  .success {
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
    cursor: pointer;
    &:hover {
      background-color: #218838;
      border-color: #1e7e34;
    }
  }
`;
