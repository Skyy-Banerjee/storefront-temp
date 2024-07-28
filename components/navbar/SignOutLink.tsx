'use client';

import { SignOutButton } from "@clerk/nextjs";
import { useToast } from "../ui/use-toast";
import Link from "next/link";

function SignOutLink() {
  const {toast} = useToast();

  function handleLogOut(){
    toast({description: "Logout Successful!"})
  }

  return (
    <SignOutButton >
      <Link href="/" className="w-full text-left" onClick={handleLogOut}>Logout</Link>
    </SignOutButton>
  )
}

export default SignOutLink
