'use client';
import React from 'react';
import { FlexCol, FlexRow } from './container/Container';
import { H1 } from './text/Heading';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome } from 'react-icons/fa';

const Hero = ({title}) => {
  const pathName = usePathname();

  const breadcrumbList = pathName.split('/');

  return (
    <FlexRow className="hero_bg_image w-full h-56 rounded-xl items-center justify-start ps-16">
      <FlexCol>
        <H1>{ title}</H1>
        <FlexRow>
          <FaHome className="text-green-400 mt-1" />
          <Link
            className="hover:text-green-300 text-base font-semibold"
            href={`/`}
          >
            Home
          </Link>
          {breadcrumbList.map((item) => (
            <Link
              href={`${item}`}
              key={item}
              className="capitalize font-semibold hover:text-green-400 text-gray-600"
            >
              {item} <span> {'>'}</span>
            </Link>
          ))}
        </FlexRow>
      </FlexCol>
      <H1></H1>
    </FlexRow>
  );
};

export default Hero;
