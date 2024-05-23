'use client';
import { FlexRow } from '@/components/ui/container/Container';
import Dropdown from '@/components/ui/DropDown';
import { H1, Paragraph } from '@/components/ui/text/Heading';
import Image from 'next/image';
import React, { useState } from 'react';

const BlogHeader = () => {
  const [perPage, setPerPage] = useState(50);
  const [sortBy, setSortBy] = useState('Featured');

  const pageOptions = ['50', '100', '150', '200', 'All'];
  const sortByOptions = [
    'Featured',
    'Price: Low to High',
    'Price: High to Low',
    'Rating:High to Low',
    'Rating: Low to High',
  ];

  return (
    <FlexRow className="justify-between my-10">
      <FlexRow>
        <Image
          src={'/images/category-svg/category-1.svg'}
          className="w-10 h-10"
          alt="Images here"
          height={100}
          width={100}
        />
        <H1 className="text-2xl mt-1 ms-1">Recips Articles</H1>
      </FlexRow>

      <FlexRow>
        <Dropdown
          selectedValue={perPage}
          setSelectedValue={setPerPage}
          options={pageOptions}
        />
        <Dropdown
          selectedValue={sortBy}
          setSelectedValue={setSortBy}
          options={sortByOptions}
        />
      </FlexRow>
    </FlexRow>
  );
};

export default BlogHeader;
