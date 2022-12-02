import styled from "styled-components";

export const StyledSquart = styled.div`
  width: 50px;
  height: 50px;
  display: inline-block;
  border: 1px solid black;
  font-size: 30px;
  line-height: 50px;
  text-align: center;
  background-color: ${(props: { bgColor: string }) => props.bgColor};
  float: left;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: grey;
  }
`;
