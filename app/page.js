import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className="text-center text-4xl font-bold text-black ">Ecommerce website</h2>
      <Button>Click me</Button>
    </main>
  );
}
