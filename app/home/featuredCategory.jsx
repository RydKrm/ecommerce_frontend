import CategoryCart from '@/components/ui/CategoryCart';
import React from 'react';
import CategorySlider from './CategorySlider';

const FeaturedCategory = () => {
  return (
    <div className="container mx-auto flex flex-col">
      <div className="flex flex-row my-5">
        <h2 className="text-h2 -mt-4">Featured Category</h2>
        <ul className="flex flex-col gap-x-3 md:flex-row text-h5 ms-3">
          <li className="field-hover">Cake & Milk</li>
          <li className="field-hover">Snack & Teas</li>
          <li className="field-hover">Pet Foods</li>
          <li className="field-hover">Vegetables</li>
        </ul>
      </div>
      <CategorySlider />
    </div>
  );
};

export default FeaturedCategory;
