import styles from "./footer.module.css";
import { Grid } from "@mantine/core";
import Spacer from "/src/components/Spacers/spacer";

export default function footer() {
  return (
    <section className={styles.footer}>
      <h1>YADA</h1>
      <Spacer />
      <Grid className={styles.links}>
        <p>© YADA 2023. All Rights Reserved.</p>
        <a href="#">Privacy Policy</a>
        <a href="#">Contact</a>
      </Grid>
      <Spacer />
    </section>
  );
}
