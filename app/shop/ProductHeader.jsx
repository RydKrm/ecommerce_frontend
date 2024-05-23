'use client';
import { FlexRow } from '@/components/ui/container/Container';
import Dropdown from '@/components/ui/DropDown';
import React, { useState } from 'react';

const ProductHeader = () => {
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
    <FlexRow className="justify-between mt-6">
      <p className="my-1 text-gray-500 font-medium"></p>
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

export default ProductHeader;
