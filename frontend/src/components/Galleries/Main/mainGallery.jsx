import Gallery1 from "/src/components/Galleries/Gallery1/gallery1";
import Gallery2 from "/src/components/Galleries/Gallery2/gallery2";
import styles from "./mainGallery.module.css";
import Spacer from "/src/components/Spacers/spacer";
import { Grid } from "@mantine/core";
import { useState } from "react";

export default function MainGallery() {
  const [selectedLink, setSelectedLink] = useState(1);

  let content;

  if (selectedLink === 1) {
    content = <Gallery1 />;
  } else if (selectedLink === 2) {
    content = <Gallery2 />;
  } else if (selectedLink === 3) {
    content = <Gallery1 />;
  } else {
    content = <Gallery1 />;
  }
  return (
    <section className={styles.gallery}>
      <h1>Get inspired with our Gallery</h1>
      <Spacer />
      <Grid className={styles.galleryLinks}>
        <Grid className={styles.galleryBar}></Grid>
        <p
          className={
            selectedLink === 1
              ? `${styles.galleryLink} ${styles.active}`
              : styles.galleryLink
          }
          onClick={() => setSelectedLink(1)}
        >
          Digital art
        </p>

        <p
          className={
            selectedLink === 2
              ? `${styles.galleryLink} ${styles.active}`
              : styles.galleryLink
          }
          onClick={() => setSelectedLink(2)}
        >
          Photo
        </p>

        <p
          className={
            selectedLink === 3
              ? `${styles.galleryLink} ${styles.active}`
              : styles.galleryLink
          }
          onClick={() => setSelectedLink(3)}
        >
          3D
        </p>

        <p
          className={
            selectedLink === 4
              ? `${styles.galleryLink} ${styles.active}`
              : styles.galleryLink
          }
          onClick={() => setSelectedLink(4)}
        >
          Painting
        </p>
        <Grid className={styles.galleryBar}></Grid>
      </Grid>
      <Spacer />
      {content}
    </section>
  );
}
