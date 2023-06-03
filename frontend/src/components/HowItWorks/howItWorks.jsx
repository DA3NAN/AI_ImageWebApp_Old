import Card from "/src/components/Cards/Card";
import { SimpleGrid } from "@mantine/core";
import styles from "./howItWorks.module.css";
import Spacer from "../../components/Spacers/spacer";

export default function howItWorks() {
  return (
    <section className={styles.howItWorks}>
      <h1>How it works</h1>
      <Spacer />
      <p className={styles.howItWorksDescription}>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which dont look even slightly believable.
      </p>
      <Spacer />
      <SimpleGrid cols={3} spacing="lg">
        <Card
          number={1}
          title="Payment and Access"
          content="To get started, click on start creating button, proceed to the payment page, securely enter your payment details, and complete the transaction. Once your payment is successful, you'll have 30 minutes of access to our app."
        />
        <Card
          number={2}
          title="Image Generation"
          content="With access to our app, input your text or descriptions to generate stunning images. Our app will work its magic, creating visuals based on your input. Feel free to experiment for diverse image outputs."
        />
        <Card
          number={3}
          title="Download and Renewal"
          content="After the image generation, preview and download your favorite images within the app. Download the chosen ones to your device and enjoy them at your leisure."
        />
      </SimpleGrid>
    </section>
  );
}
