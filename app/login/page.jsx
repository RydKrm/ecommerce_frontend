'use client';
import Button from '@/components/ui/Button';
import Container, { FlexRow } from '@/components/ui/container/Container';
import InputField from '@/components/ui/inputField';
import { H1, Paragraph } from '@/components/ui/text/Heading';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const handleForm = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <div className="flex flex-wrap items-center justify-center lg:justify-center">
        <div className="hidden md:hidden lg:block md:shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
          <Image
            src={`/images/others/login-1.png`}
            className="w-[500px] py-24"
            alt="Sample image"
            width={400}
            height={400}
          />
        </div>

        <div className="mb-12 ms-5 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
          <H1 className="px-8">Login</H1>
          <form className="px-8 py-6 flex flex-col gap-y-5">
            <InputField
              name="email"
              placeholder="Username or Email"
              type="text"
              handler={handleForm}
            />
            <InputField
              name="password"
              placeholder="Your password"
              type="password"
              handler={handleForm}
            />
            <Button className="ms-2" type="submit">
              Log In
            </Button>
          </form>

          <FlexRow className="justify-evenly">
            <Paragraph>
              Do not have an account ?
              <Link href="/registration" className="text-red-400 ms-2">
                Register
              </Link>
            </Paragraph>
            <Paragraph>
              <Link href={`/login/forgetpassword`}> Forget Password</Link>
            </Paragraph>
          </FlexRow>
        </div>
      </div>
    </Container>
  );
};

export default Login;
