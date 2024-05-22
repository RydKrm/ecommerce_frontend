import PolicyCart from '@/components/ui/PolicyCart';
import React from 'react';

const companyPolicy = [
  {
    _id: 1,
    image: '/images/category-svg/category-1.svg',
    title: 'Best prices & offers',
    text: 'Orders $50 or more',
  },
  {
    _id: 2,
    image: '/images/category-svg/category-8.svg',
    title: 'Free delivery',
    text: '24/7 amazing services',
  },
  {
    _id: 3,
    image: '/images/category-svg/category-3.svg',
    title: 'Great daily deal',
    text: 'When you sign up',
  },
  {
    _id: 4,
    image: '/images/category-svg/category-4.svg',
    title: 'Wide assortment',
    text: 'Mega Discounts  ',
  },
  {
    _id: 5,
    image: '/images/category-svg/category-5.svg',
    title: 'Easy returns  ',
    text: 'Within 30 days  ',
  },
  {
    _id: 6,
    image: '/images/category-svg/category-6.svg',
    title: 'Safe delivery  ',
    text: 'Orders $50 or more',
  },
];

const CompanyPolicy = () => {
  return (
    <div className="container grid grid-cols-3 lg:grid-cols-6 gap-2 my-10">
      {companyPolicy.map((item) => (
        <PolicyCart key={item._id} policy={item} />
      ))}
    </div>
  );
};

export default CompanyPolicy;
