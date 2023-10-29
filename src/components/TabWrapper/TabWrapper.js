import Container from "components/Container";
import PropTypes from "prop-types";
import { Wrapper } from "./TabWrapper.styled";

const TabWrapper = ({ children }) => {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export default TabWrapper;

TabWrapper.propTypes = {
  children: PropTypes.node,
};
