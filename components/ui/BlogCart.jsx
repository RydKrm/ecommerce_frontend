import Image from 'next/image';
import React from 'react';
import { FlexRow } from './container/Container';
import { H2, Paragraph } from './text/Heading';

const BlogCart = ({ blog }) => {
  return (
    <div className="my-6">
      <Image
        className="w-[350px] h-64 rounded-3xl "
        src={blog.images}
        alt="Image here"
        height={1000}
        width={1000}
      />
      <Paragraph className="text-center mt-5" variant="gray">
        {blog.category}
      </Paragraph>
      <H2 className="text-center">{blog.name}</H2>
      <FlexRow className="justify-center my-1">
        <Paragraph className="text-sm">{blog.date}</Paragraph>
        <Paragraph className="text-sm">{blog.views}</Paragraph>
        <Paragraph className="text-sm">{blog.time}</Paragraph>
      </FlexRow>
    </div>
  );
};

export default BlogCart;
