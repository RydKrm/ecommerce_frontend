"use client"
import Button from "@/components/ui/Button";
import Container, { FlexCol } from "@/components/ui/container/Container";
import InputField from "@/components/ui/inputField";
import { H1, Paragraph } from "@/components/ui/text/Heading";
import Link from "next/link";
import React, { useState } from "react";

const Registration = () => {
    const [userInfo, setUserInfo] = useState({});
    const handleForm = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }

    return <Container className="px-24 my-20">
        <FlexCol>
            <H1>Create Your Account</H1>
            <Paragraph>Already have an account?<Link href={`/login`} className="text-primary ms-1">Login</Link> </Paragraph>
            <InputField name="userName" type="text" placeholder="Username" handler={handleForm} className="w-96" />
            <InputField name="email" type="text" placeholder="Email" handler={handleForm} className="w-96" />
            <InputField name="password" type="password" placeholder="password" handler={handleForm} className="w-96" />
            <InputField name="confirmPassword" type="password" placeholder="confirmPassword" handler={handleForm} className="w-96" />
            <Button className="flex justify-start ms-2 mt-5">Submit & Register </Button>
        </FlexCol>

    </Container>
};

export default Registration;
