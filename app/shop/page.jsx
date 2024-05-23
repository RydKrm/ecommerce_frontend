import Container from '@/components/ui/container/Container';
import Hero from '@/components/ui/Hero';
import React from 'react';
import ProductList from './ProductList';

const page = () => {
  return (
    <Container>
      <Hero title="Snacks" />
      <ProductList />
    </Container>
  );
};

export default page;
