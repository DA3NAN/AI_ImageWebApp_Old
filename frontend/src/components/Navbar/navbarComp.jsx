import styles from "./navbar.module.css";
import { FaMagic } from "react-icons/fa";
import PrimaryButton from "../Buttons/primaryButton.jsx";
import { Grid } from "@mantine/core";
// import { Link } from "react-router-dom";

export default function NavbarComp() {
  return (
    <Grid className={styles.navbar}>
      <Grid className={styles.logo}>
        <a href="/">
          <h2>YADA</h2>
        </a>
      </Grid>
      <Grid className={styles.links}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Gallery</a>
        <a href="#">Pricing</a>
      </Grid>
      <Grid className={styles.startNow}>
        <PrimaryButton>
          start creating &nbsp;&nbsp;&nbsp; <FaMagic />
        </PrimaryButton>
      </Grid>
    </Grid>
  );
}
