import React from 'react'
import { Section } from './Components/Section';
import { Heading } from './Components/Heading';

export const LevelSection = () => {
    return (
        <Section>
          <Heading>Title</Heading>
          <Section>
            <Heading>Heading</Heading>
            <Heading>Heading</Heading>
            <Heading>Heading</Heading>
            <Section>
              <Heading>Sub-heading</Heading>
              <Heading>Sub-heading</Heading>
              <Heading>Sub-heading</Heading>
              <Section>
                <Heading>Sub-sub-heading</Heading>
                <Heading>Sub-sub-heading</Heading>
                <Heading>Sub-sub-heading</Heading>
              </Section>
            </Section>
          </Section>
        </Section>
      );
}
