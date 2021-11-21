import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row noPadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To
        <br />
        My Portfolio
      </SectionTitle>
      <SectionText>
        After months of self-learning and becoming a MERN fullstack developer, I
        am looking to make a career change and am hungry for first professional
        role as a devloper.
      </SectionText>
      <Button
        onClick={() => (window.location.href = "mailto:jarredlanier@live.com")}
      >
        Contact Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
