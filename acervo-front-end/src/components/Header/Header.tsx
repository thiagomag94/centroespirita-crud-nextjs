import { Menu } from "../Menu/Menu";
import Image from "next/image";

export  const Header = () => {
    return (
      <nav className={"flex  flex-row items-center justify-between py-8 px-8 "}>
        <div className="rounded-full overflow-hidden"><Image alt={'logotipo'} src={'/logo.jpg'} width={80} height={80}/></div>
        <Menu/>
      </nav>
       
    );
  }
  