"use client";

import { verifyToken } from "@/store";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { usePathname, useRouter } from "next/navigation";

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const userState = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  console.log(userState);

  if (userState.status == "failed") {
    router.push(`/auth/login?redirect=${pathname}`);
  }

  if (userState.status == "succeeded") {
    return children;
  }

  if (userState.status == "loading") {
    return <div className="flex justify-center items-center">Loading...</div>;
  }

  if (userState.status == "idle") {
    dispatch(verifyToken());
  }
};
