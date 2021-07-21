import React from 'react';
import { faqData } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';

const faq = () => {
  return (
    <Container>
      <Hero titleText={faqData.title} titleImage={faqData.image}/>
      {faqData.description}
    </Container>
  );
};

export default faq;
