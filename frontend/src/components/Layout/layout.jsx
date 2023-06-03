import PropTypes from "prop-types";
import Navbar from "../Navbar/navbarComp.jsx";
import utilsStyle from "/src/styles/utils.module.css";
import { Container } from "@mantine/core";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container size="lg" className={utilsStyle.container}>
        <div className={utilsStyle.nav_spacer}></div>
        <div className={utilsStyle.nav_spacer}></div>
        <div className="content">{children}</div>
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
