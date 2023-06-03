import { Grid } from "@mantine/core";
import styles from "./services.module.css";

export default function services() {
  return (
    <Grid className={styles.services}>
      <Grid className={styles.service}>
        <img src="/images/shield.png" width="40px" />
        <p>30 days money back Guarantee</p>
      </Grid>
      <Grid className={styles.service}>
        <img src="/images/tag.png" width="40px" />
        <p>No setup fees 100% hassle-free</p>
      </Grid>
      <Grid className={styles.service}>
        <img src="/images/ref.png" width="40px" />
        <p>No monthly subscription Pay once and for all</p>
      </Grid>
    </Grid>
  );
}
