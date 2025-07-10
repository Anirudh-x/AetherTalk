"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";



export const HomeView = () => {

  return (
    <div className="flex flex-col justify-center items-center h-[90vh] gap-[4rem]">
      <div className="gap-[2rem] flex flex-col justify-center items-center">
        <Image src="/vercel.svg" height={300} width={300} alt="AetherTalk" />
        <div className="gap-[1rem] flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-primary">Aether<span className="text-sky-500/80">Talk</span></h1>
          <h3 className="text-xl text-muted-foreground">Talk to the AI You Imagine</h3>
        </div>
      </div>

      <div className="flex gap-[2rem]">
        <Button className="h-12 w-25 text-md">
          <Link href="/meetings">Meetings</Link>
        </Button>
        <Button variant="outline" className="border-[0.5px] border-primary text-primary h-12 w-25 text-md hover:text-white">

          <Link href="/agents">Agents</Link>
        </Button>
      </div>
    </div>
  )
}
