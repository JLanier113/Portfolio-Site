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
        After months of self-learning, I am looking to make a career switch and
        get my first professional experience as a developer.
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
