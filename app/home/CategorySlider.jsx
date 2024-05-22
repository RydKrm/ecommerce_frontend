import CategoryCart from '@/components/ui/CategoryCart';
import React from 'react';

export const categoryList = [
  {
    image: '/images/category/cat-1.png',
    name: 'Snack',
    total: 'Item 56',
  },
  {
    image: '/images/category/cat-2.png',
    name: 'Red Apple',
    total: 'Item 21',
  },
  {
    image: '/images/category/cat-3.png',
    name: 'Peach',
    total: 'Item 14',
  },
  {
    image: '/images/category/cat-4.png',
    name: 'Organic Kiwi',
    total: 'Item 34',
  },
  {
    image: '/images/category/cat-5.png',
    name: 'Apple',
    total: 'Item 6',
  },
  {
    image: '/images/category/cat-11.png',
    name: 'Pine Apple',
    total: 'Item 16',
  },
  {
    image: '/images/category/cat-12.png',
    name: 'Orange',
    total: 'Item 56',
  },
];

export const color = [
  'bg-[#ECFFEC]',
  'bg-[#FEEFEA]',
  'bg-[#FFFCEB]',
  'bg-[#FFF3FF]',
];

const CategorySlider = () => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-x-4 mb-10 justify-items-stretch">
      {categoryList.map((category, index) => (
        <CategoryCart
          key={category.name}
          color={color[index % color.length]}
          item={category}
        />
      ))}
    </div>
  );
};

export default CategorySlider;
