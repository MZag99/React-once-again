import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { infoData } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText = {infoData.title} titleImage = {infoData.image}/>
    {infoData.description}
  </Container>
);

export default Info;