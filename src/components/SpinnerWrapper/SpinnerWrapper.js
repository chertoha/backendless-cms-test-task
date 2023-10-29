import PropTypes from "prop-types";
import { Wrapper } from "./SpinnerWrapper.styled";

const SpinnerWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default SpinnerWrapper;

SpinnerWrapper.propTypes = {
  children: PropTypes.node,
};
