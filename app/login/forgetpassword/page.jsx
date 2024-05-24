'use client';
import Button from '@/components/ui/Button';
import Container, {
  FlexCol,
  FlexRow,
} from '@/components/ui/container/Container';
import InputField from '@/components/ui/inputField';
import { H1, Paragraph } from '@/components/ui/text/Heading';
import Link from 'next/link';
import React, { useState } from 'react';

const ForgetPassword = () => {
  const [userEmail, setUserEmail] = useState('');
  const handleForm = (e) => {
    setUserEmail(e.target.value);
  };
  return (
    <Container className="mx-auto">
      <FlexCol>
        <H1>Forget Password</H1>
        <InputField
          name="email"
          type="email"
          placeholder="Your Email"
          handler={handleForm}
          className="w-96 mt-5"
        />

        <Button className="flex justify-start ms-2 mt-5">
          Forget Password
        </Button>
      </FlexCol>
    </Container>
  );
};

export default ForgetPassword;
