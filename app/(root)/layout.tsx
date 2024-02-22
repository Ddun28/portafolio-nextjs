'use client'

import { ReactNode, useState } from "react"
import Sidebar from "@/components/shared/sidebar";
import { RiMenu2Line } from "react-icons/ri";
import ButtonIcon from "@/components/shared/ui/button-icon";
import Footer from "@/components/shared/footer";

const MainLayaout = ({children}: {children: ReactNode}) => {

    const [showMenu, setShowMenu] = useState(false)

  return (
    <div>
         <Sidebar showMenu={showMenu} onClose={() => setShowMenu(false)}/>
         <ButtonIcon 
         icon={RiMenu2Line} 
         onClick={() => setShowMenu(true)} 
         className="lg:hidden fixed right-0 bottom-0 z-30 bg-primary p-4 rounded-lg"
         />

        {children}
        <Footer/>
        </div>
  )
}

export default MainLayaout