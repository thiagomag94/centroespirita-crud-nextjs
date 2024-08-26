'use client'

import { useState, useEffect } from "react"
import { bookInterface } from "../BookCointainer/bookInterface"
import { BookContainer } from "../BookCointainer/BookContainer"

export const AcervoContainer = ()=>{

    const [booksArray, setBooksArray] = useState<bookInterface[]>([])

    useEffect(()=>{
        fetchData().then((data)=> setBooksArray(data))
    },[])

    const fetchData = async ()=>{
        const response = await fetch('http://localhost:8080/api/livros')
        const data = await response.json()
        console.log(data)
        return data


    }

    return(
        <div className="w-full grid grid-cols-4 px-32 gap-16">
            {booksArray.map((item) => (
                        <BookContainer
                            key={item.titulo}
                            id = {item.id}
                            autor={item.autor}
                            titulo={item.titulo}
                            ano={item.ano}
                            foialugado={item.wasBorrowed}
                        />
                    ))}
        </div>
    )
}