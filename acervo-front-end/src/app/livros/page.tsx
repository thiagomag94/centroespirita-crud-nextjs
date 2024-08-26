import { AcervoContainer } from "@/components/AcervoContainer/AcervoContainer";
import { ContateContainer } from "@/components/ContateContainer/ContateContainer";
import Image from "next/image";


export default function Livros() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white px-8 pb-32">
      <div className=" h-fit w-full  py-16 mb-16">
      <AcervoContainer/>
      
      </div>
      <ContateContainer/>
    </main>
  );
}
