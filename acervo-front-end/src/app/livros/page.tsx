import { AcervoContainer } from "@/components/AcervoContainer/AcervoContainer";
import Image from "next/image";


export default function Livros() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white px-8">
      <div className=" h-fit w-full bg-gray-200 py-16">
      <AcervoContainer/>
      </div>
    </main>
  );
}
