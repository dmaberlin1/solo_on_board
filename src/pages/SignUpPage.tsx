import React from 'react';
import SignUpForm from "@/components/ui/SignUpForm.tsx";

const SignUpPage = () => {
    return (
        <div className={'container mt-2'}>
            <h2 className={'mb-5 text-center'}>Sign Up </h2>

            <SignUpForm></SignUpForm>
        </div>
    );
};

export default SignUpPage;
