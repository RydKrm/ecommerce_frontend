import BlogCart from '@/components/ui/BlogCart';
import Container from '@/components/ui/container/Container';
import React from 'react';

export const blogList = [
  {
    _id: 1,
    name: 'The Intermediate Guide to Healthy Food',
    category: 'Side Dish',
    date: '25 April 2024',
    views: '126k Views',
    time: '4 mins read',
    images: '/images/thumbnails/thumbnail-1.jpg',
  },
  {
    _id: 2,
    name: 'The Intermediate Guide to Healthy Food',
    category: 'Side Dish',
    date: '25 April 2024',
    views: '126k Views',
    time: '4 mins read',
    images: '/images/thumbnails/thumbnail-2.jpg',
  },
  {
    _id: 3,
    name: 'The Intermediate Guide to Healthy Food',
    category: 'Side Dish',
    date: '25 April 2024',
    views: '126k Views',
    time: '4 mins read',
    images: '/images/thumbnails/thumbnail-3.jpg',
  },
  {
    _id: 4,
    name: 'The Intermediate Guide to Healthy Food',
    category: 'Side Dish',
    date: '25 April 2024',
    views: '126k Views',
    time: '4 mins read',
    images: '/images/thumbnails/thumbnail-4.jpg',
  },
  {
    _id: 5,
    name: 'The Intermediate Guide to Healthy Food',
    category: 'Side Dish',
    date: '25 April 2024',
    views: '126k Views',
    time: '4 mins read',
    images: '/images/thumbnails/thumbnail-5.jpg',
  },
  {
    _id: 6,
    name: 'The Intermediate Guide to Healthy Food',
    category: 'Side Dish',
    date: '25 April 2024',
    views: '126k Views',
    time: '4 mins read',
    images: '/images/thumbnails/thumbnail-6.jpg',
  },
  {
    _id: 7,
    name: 'The Intermediate Guide to Healthy Food',
    category: 'Side Dish',
    date: '25 April 2024',
    views: '126k Views',
    time: '4 mins read',
    images: '/images/thumbnails/thumbnail-7.jpg',
  },
  {
    _id: 8,
    name: 'The Intermediate Guide to Healthy Food',
    category: 'Side Dish',
    date: '25 April 2024',
    views: '126k Views',
    time: '4 mins read',
    images: '/images/thumbnails/thumbnail-8.jpg',
  },
];

const BlogList = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5">
        {blogList.map((blog) => (
          <BlogCart key={blog._id} blog={blog} />
        ))}
      </div>
    </Container>
  );
};

export default BlogList;
