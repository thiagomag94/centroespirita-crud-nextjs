"use client"
import { useRouter } from "next/navigation"



export const ButtonVerAcervo = () =>{
    const router = useRouter()
   
    return(
    <button className="font-bold p-4 shadow-xl bg-slate-50 text-cyan-800 hover:bg-indigo-900 
    hover:text-slate-50 transition ease-in-out delay-75 curson-pointer w-fit rounded-md" 
    onClick={()=>router.push('/livros')}>
        Ver acervo
    </button>
   )
}