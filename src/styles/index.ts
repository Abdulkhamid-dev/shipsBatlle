import styled from "styled-components";
import { pxToRem } from "../utils";

const StyledStart = styled.div`
  /* position: absolute; */
  top: ${pxToRem(20)};
  bottom: ${pxToRem(20)};
  right: ${pxToRem(20)};
  left: ${pxToRem(20)};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  min-height: 100vh;
  div {
    /* position: absolute; */
    .myVideo {
      position: fixed;
      right: 0;
      bottom: 0;
      min-width: 100vh;
      min-height: 100vh;
      z-index: -55;
    }
    .content {
      position: relative;
      bottom: 0;
      color: #f1f1f1;
      max-width: ${pxToRem(550)};
      width: 100%;
      padding: ${pxToRem(20)};
    }
  }
`;

export { StyledStart };
