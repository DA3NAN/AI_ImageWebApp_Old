import utilsStyle from "/src/styles/utils.module.css";
import Spacer from "/src/components/Spacers/spacer";
import { Container } from "@mantine/core";
import Hero from "/src/components/Hero/hero";
import PricingCard from "/src/components/PricingCard/pricingCard";
import HowItWorks from "/src/components/HowItWorks/howItWorks";
import MainGallery from "/src/components/Galleries/Main/mainGallery";
import Services from "/src/components/Services/services";
import CallToAction from "/src/components/CallToAction/callToAction";
import Footer from "/src/components/Footer/footer";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <Hero />
      <Container size="lg" className={utilsStyle.container}>
        <Spacer />
        <Spacer />
        <Spacer />
        {/* How it works */}
        <HowItWorks />
        <Spacer />
        <Spacer />
        <Spacer />
        {/* Gallery */}
        <MainGallery />
        <Spacer />
        <Spacer />
        <Spacer />
        {/* Pricing Card */}
        <PricingCard />
        <Spacer />
        <Spacer />
        {/* Services */}
        <Services />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        {/* Call to action */}
        <CallToAction />
        <Spacer />
        <Spacer />
        <Spacer />
        {/* Footer */}
        <Footer />
      </Container>
    </>
  );
}
