import FooterSection from "@/Components/Footer";
import { useState } from "react";
import ZeroHeader from '@/Components/ZeroHeader/ZeroHeader';
import ContactForm from '@/Components/ContactForm';
import useIsMobile from "@/hooks/useIsMobile";
  

export default function ContactUs() {
  const isSmallScreen = useIsMobile();
  const [scrolledToHeader, setScrolledToHeader] = useState(false);

  const onEnter = () => {
    setScrolledToHeader(false);
  };

  const onLeave = () => {
    setScrolledToHeader(true);
  };

  return (
    <>
      <ZeroHeader isSmallScreen={isSmallScreen} scrolledToHeader={scrolledToHeader} />
      {/* <ContactForm />    */}
      <FooterSection />
    </>
  );
}