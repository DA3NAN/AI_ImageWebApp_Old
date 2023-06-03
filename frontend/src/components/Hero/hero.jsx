import Layout from "/src/components/Layout/layout";
import styles from "./hero.module.css";
import Spacer from "/src/components/Spacers/spacer";
import { FaMagic } from "react-icons/fa";
import { Grid } from "@mantine/core";
import PrimaryButton from "/src/components/Buttons/primaryButton";

export default function hero() {
  return (
    <Grid className={styles.hero}>
      <Layout>
        <Grid className={styles.hero_desc}>
          <h1 className={styles.hero_title}>
            AI Image Generation to enhance your creative potential
          </h1>
          <Spacer />
          <p className={styles.hero_description}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <Spacer />
          <PrimaryButton>
            start creating &nbsp;&nbsp;&nbsp; <FaMagic />
          </PrimaryButton>
        </Grid>
      </Layout>
    </Grid>
  );
}
