import { AuthGuard } from "@/components/auth-guard/auth-guard";

const EditorLayout = ({ children }: { children: React.ReactNode }) => {
  return <AuthGuard>{children}</AuthGuard>;
};

export default EditorLayout;
