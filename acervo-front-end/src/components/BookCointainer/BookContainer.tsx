import { Suspense } from "react";
import { Skeleton } from "@mui/material";
import Image from "next/image";

export const BookContainer = (props:any) =>{

    const {autor, titulo, ano, id, foialugado} = props
    return(
       <div className="relative bg-neutral-100 flex flex-col justify-bottom items-center gap-4 pl-4 pr-4 py-4 flex-wrap drop-shadow-sm">
            <Image alt={'capa do livro'} src={'/capalivro.jpg'} width={200} height={50}/>
            <span className="text-cyan-700 text-center font-bold">{titulo}</span>
            <div>
                <span className="text-neutral-700 text-center">{autor}</span>
                <span>{' - '}</span>
                <span className="text-neutral-700 text-center font-light">{ano}</span>
            
            </div>
            
            
            <div className="z-20 absolute -bottom-8 left-0 w-full bg-cyan-900 text-slate-50 text-center">{foialugado ? 'Disponível' :'reservado' }</div>
       </div>
    )
}