import { Grid } from "@mantine/core";
import styles from "./callToAction.module.css";
import { FaMagic } from "react-icons/fa";
import PrimaryButton from "/src/components/Buttons/primaryButton";

export default function callToAction() {
  const buttonStyle1 = { padding: "0 2rem" };

  return (
    <Grid className={styles.callToAction}>
      <p>Lets discover</p>
      <h1>Ready to take the leap into AI-powered creativity?</h1>
      <PrimaryButton style={buttonStyle1}>
        Start generating &nbsp;&nbsp;&nbsp; <FaMagic />
      </PrimaryButton>
    </Grid>
  );
}
