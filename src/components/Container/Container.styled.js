import styled from "styled-components";
import { theme } from "styles/theme";

export const StyledContainer = styled("div")`
  margin: 0 auto;
  width: 100%;

  padding-right: 16px;
  padding-left: 16px;

  ${theme.mq.mobileOnly} {
    max-width: 480px;
  }

  ${theme.mq.tablet} {
    width: ${(p) => p.theme.breakpoints.tablet};
    padding-right: 32px;
    padding-left: 32px;
  }

  ${theme.mq.desktop} {
    width: ${(p) => p.theme.breakpoints.desktop};
    padding-right: 80px;
    padding-left: 80px;
  }
`;
