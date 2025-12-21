import SignInFormClient from "@/modules/auth/components/sign-in-form-client";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <Image
        src=""
        alt="login-Image"
        height={300}
        width={300}
        className="m-6 object-cover"
      />
      <SignInFormClient/>
    </div>
  );
};

export default page;
