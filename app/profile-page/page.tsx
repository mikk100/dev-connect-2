import { auth } from "@/auth";
import { redirect } from "next/navigation";
import ProfileContent from "./profile-content";

export default async function ProfilePage() {
  const session = await auth();

  if (!session) {
    redirect("/signin");
  }

  return <ProfileContent session={session} />;
}