import styled from "styled-components";
import { FlexCenterStyle, WholeContainer } from "styles/common";

export const Container = styled.div`
  ${WholeContainer}
  ${FlexCenterStyle}
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  position: absolute !important;

  background: black;
  cursor: none;
  canvas {
    width: 100%;
    height: 100vh;
  }
`;

export const ThreeContainer = styled.div`
  ${WholeContainer}
  ${FlexCenterStyle}
  flex-direction: column;

  cursor: none;
  canvas {
    width: 100vw;
    height: 100vh;
  }
`;

export const QRContainer = styled.div`
  position: absolute !important;
  bottom: 20px !important;
  right: 20px !important;
  top: auto !important;
  left: auto !important;

  ${FlexCenterStyle}
  z-index: 10;

  img {
    position: relative;
    width: 100%;
    height: 100%;
  }
`;