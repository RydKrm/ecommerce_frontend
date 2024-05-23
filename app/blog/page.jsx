import Container from '@/components/ui/container/Container';
import Hero from '@/components/ui/Hero';
import React from 'react';
import BlogHeader from './BlogHeader';
import BlogList from './BlogList';

const Blog = () => {
  return (
    <Container>
      <Hero title={'Blog & News'} />
      <BlogHeader />
      <BlogList />
    </Container>
  );
};

export default Blog;
