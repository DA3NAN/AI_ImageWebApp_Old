import PropTypes from "prop-types";
import { Button } from "@mantine/core";

const PrimaryButton = ({ style, children }) => {
  const buttonStyle = {
    backgroundColor: "#5f3bf3",
    fontFamily: "Poppins",
    fontWeight: "normal",
    color: "white",
    borderRadius: "6px",
    ...style, // Merge the provided style prop with the default style
  };

  return <Button style={buttonStyle}>{children}</Button>;
};

PrimaryButton.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export default PrimaryButton;
