"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { ModeToggle } from "./mode-toggler";
import { Button } from "./ui/button";

export default function Header() {
  const session = useSession();
  return (
    <header>
      <div>
        {session?.data ? (
          <Button onClick={() => signOut()}>Sign Out</Button>
        ) : (
          <Button onClick={() => signIn("google")}>Sign In</Button>
        )}
        <ModeToggle />
      </div>
    </header>
  );
}
