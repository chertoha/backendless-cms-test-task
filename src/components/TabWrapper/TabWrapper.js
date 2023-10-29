import Container from "components/Container";
import { Wrapper } from "./TabWrapper.styled";

const TabWrapper = ({ children }) => {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export default TabWrapper;
