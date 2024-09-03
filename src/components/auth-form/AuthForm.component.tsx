import Image from "next/image";
import { InputBox } from "../input-box/InputBox";
import google from "@/assests/google.png";
import Link from "next/link";

interface AuthFormProps {
  formType: "login" | "register";
}

export const AuthForm = ({ formType }: AuthFormProps) => {
  return (
    <section className="h-cover flex items-center justify-center">
      <form className="w-[80%] max-w-[400px]">
        <h1 className="text-4xl text-center mb-10 capitalize">
          {formType == "login" ? "welcome back" : "join us today"}
        </h1>
        {formType == "register" ? (
          <InputBox
            type="text"
            name="fullName"
            placeholder="Full Name"
            icon="person"
          />
        ) : (
          <></>
        )}
        <InputBox type="email" name="email" placeholder="Email" icon="mail" />
        <InputBox
          type="password"
          name="password"
          placeholder="Password"
          icon="key"
        />
        <button className="btn-dark center mt-14 w-[90%]">{formType}</button>
        <div className="relative w-full flex items-center gap-2 opacity-10 my-10 text-black font-bold">
          <hr className="w-1/2 border-black" />
          <p>OR</p>
          <hr className="w-1/2 border-black" />
        </div>
        <button className="btn-light center flex items-center gap-4 w-[90%] justify-center">
          <Image src={google} alt="Google Icon" width={20} height={20} />
          Continue With Google
        </button>
        {formType == "login" ? (
          <p className="mt-6 text-dark-grey text-xl text-center">
            Don&apos;t have an account?{" "}
            <Link
              href={"/admin/auth/register"}
              className="underline text-xl ml-1"
            >
              Register
            </Link>
          </p>
        ) : (
          <p className="mt-6 text-dark-grey text-xl text-center">
            Already have an account?{" "}
            <Link href={"/admin/auth/login"} className="underline text-xl ml-1">
              Login
            </Link>
          </p>
        )}
      </form>
    </section>
  );
};
