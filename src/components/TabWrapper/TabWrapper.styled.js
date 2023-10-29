import styled from "styled-components";

export const Wrapper = styled("div")`
  padding-top: 30px;
  display: flex;
  justify-content: center;

  & > table {
    width: 100%;
    border-collapse: collapse;
    border: 2px solid ${(p) => p.theme.colors.accent};
  }

  & th,
  & td {
    padding: 10px;
    border: 2px solid ${(p) => p.theme.colors.accent};
  }
`;
