import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import UserButton from "@/modules/auth/components/user-button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Button>Get started</Button>
      <UserButton/>
    </div>
  );
}
