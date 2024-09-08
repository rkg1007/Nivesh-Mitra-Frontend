"use client";

import Image from "next/image";
import { InputBoxComponent } from "../input-box/input-box.component";
import google from "@/assests/google.png";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { login, verifyToken } from "@/store";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useState, FormEvent } from "react";

interface AuthFormProps {
  formType: "login" | "register";
}

export const AuthFormComponent = ({ formType }: AuthFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const queryParams = useSearchParams();
  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state.user);
  const router = useRouter();
  const redirectPath = queryParams.get("redirect") || "/";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(login({ email, password })).then((action) => {
      if (login.fulfilled.match(action)) {
        router.push(redirectPath);
      }
    });
  };

  if (userState.status == "succeeded") {
    router.push(redirectPath);
  }

  if (userState.status == "idle") {
    dispatch(verifyToken());
  }

  return (
    <section className="h-cover flex items-center justify-center">
      <form className="w-[80%] max-w-[400px]" onSubmit={handleSubmit}>
        <h1 className="text-4xl text-center mb-10 capitalize">
          {formType === "login" ? "Welcome back" : "Join us today"}
        </h1>
        {formType === "register" && (
          <InputBoxComponent
            type="text"
            name="fullName"
            placeholder="Full Name"
            icon="person"
          />
        )}
        <InputBoxComponent
          type="email"
          name="email"
          placeholder="Email"
          icon="mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputBoxComponent
          type="password"
          name="password"
          placeholder="Password"
          icon="key"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn-dark center mt-14 w-[90%]" type="submit">
          {formType === "login" ? "Login" : "Register"}
        </button>
        <div className="relative w-full flex items-center gap-2 opacity-10 my-10 text-black font-bold">
          <hr className="w-1/2 border-black" />
          <p>OR</p>
          <hr className="w-1/2 border-black" />
        </div>
        <button className="btn-light center flex items-center gap-4 w-[90%] justify-center">
          <Image src={google} alt="Google Icon" width={20} height={20} />
          Continue With Google
        </button>
        <p className="mt-6 text-dark-grey text-xl text-center">
          {formType === "login" ? (
            <>
              Don&apos;t have an account?{" "}
              <Link
                href={`/auth/register?redirect=${redirectPath}`}
                className="underline text-xl ml-1"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link
                href={`/auth/login?redirect=${redirectPath}`}
                className="underline text-xl ml-1"
              >
                Login
              </Link>
            </>
          )}
        </p>
        <p className="text-dark-grey mt-6 text-xl text-center">
          Want to go back?{" "}
          <Link href={redirectPath} className="underline text-xl ml-1">
            Click Here
          </Link>
        </p>
      </form>
    </section>
  );
};
