import styles from "./pricingCard.module.css";
import SmallSpacer from "../../components/Spacers/smallSpacer";
import Spacer from "../../components/Spacers/spacer";
import PrimaryButton from "/src/components/Buttons/primaryButton";

export default function pricingCard() {
  const buttonStyle1 = { padding: "0 4rem" };

  return (
    <section className={styles.pricing}>
      <h1>Simple pricing for you needs</h1>
      <Spacer />
      <p>Plans that are carefully crafted to suit your business.</p>
      <Spacer />
      <Spacer />
      <div className={styles.pricingCard}>
        <div className={styles.price}>
          <h3>Simple Plan</h3>
          <h1>$15</h1>
          <p>for 30 minutes access</p>
          <PrimaryButton style={buttonStyle1}>Get started</PrimaryButton>
        </div>
        <div className={styles.priceDescription}>
          <p>
            Access these features when you get this pricing package for your
            business.
          </p>
          <SmallSpacer />
          <div className={styles.checklist}>
            <img src="/images/checked.png" width="24px" />
            Generate unlimited images
          </div>
          <SmallSpacer />
          <div className={styles.checklist}>
            <img src="/images/checked.png" width="24px" />
            High quality AI images
          </div>
          <SmallSpacer />
          <div className={styles.checklist}>
            <img src="/images/checked.png" width="24px" />
            Customize AI configurations
          </div>
          <SmallSpacer />
          <div className={styles.checklist}>
            <img src="/images/checked.png" width="24px" />
            24/7 support and consulting
          </div>
          <SmallSpacer />
        </div>
      </div>
    </section>
  );
}
