"use client"
import { useRouter } from "next/navigation";

export  const Menu = () => {

    const router = useRouter()
    return (
      <ul className="flex  flex-row items-center justify-start gap-12 p-8  outline-none text-cyan-900 font-semibold bg-gray-100 rounded-l-full border border-cyan-700/60">
       <li className="cursor-pointer hover:text-cyan-700 transition ease-in-out delay-75" onClick={()=>router.push('/')}>Home</li>
       <li className="cursor-pointer hover:text-cyan-700 transition ease-in-out delay-75" onClick={()=>router.push('/livros')}>Livros</li>
       <li className="cursor-pointer hover:text-cyan-700 transition ease-in-out delay-75" onClick={()=>router.push('/about')}>Sobre nós</li>
       <li className="cursor-pointer hover:text-cyan-700 transition ease-in-out delay-75" onClick={()=>router.push('/contactUs')}>Contato</li>
       
      </ul>
    );
  }