import { ButtonVerAcervo } from "@/components/ButtonVerAcervo/ButtonVerAcervo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-white px-8">
      <div className="w-full flex justify-start items-start  h-[24rem] overflow-hidden rounded-xl bg-gradient-to-b from-cyan-700 via-cyan-700 to-cyan-400">
        <div className="w-2/3  "><Image alt={'logo'} src={'/main-image.jpg'} width={1200} height={1200} className="-ml-8 w-full h-[24rem]" /></div>
        
        <div className="flex flex-col justify-start  py-16 gap-8">
          <h2 className="text-4xl text-slate-50 font-semibold drop-shadow-2xl">Bem-Vindo ao acervo do Centro Espírita Lar da Luz</h2>
          <div className="rounded-l-lg bg-cyan-600 px-4 font-light py-4 leading-loose">
          <p className="pr-[24em] text-justify text-white">Aqui você encontra todo o acervo de mais de 100 livros, 
          entre novos autores e os mais consagrados, inclusive todos os livros da codificação de Allan Kardec e todo trabalho de nomes como Chico Xavier e Ramatis, entre outros</p>
          </div>
          <ButtonVerAcervo/>
        </div>
      </div>
    </main>
  );
}
