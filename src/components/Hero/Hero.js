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
        A software developer with specialization in web development.
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
