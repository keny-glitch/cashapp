import { IoBagRemoveSharp } from "react-icons/io5"
import Image from "next/image";
import { AiFillHome } from "react-icons/ai";
import { CiMoneyCheck1 } from "react-icons/ci";
import { FaMeh } from "react-icons/fa"
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { LiaWhatsapp } from "react-icons/lia";
export function Footer(){
    const year = new Date().getFullYear();
    return(
        <footer className="bg-stone-950 h-15">
          <div className="grid grid-cols-5 gap-15 px-10 md:gap-15 text-white md:px-20 py-5 rounded-md shadow-md mb-5">
            <div className="">
              <AiFillHome className="text-2xl"/>
              <p>Home</p>
            </div>

            <div className="">
                <IoBagRemoveSharp className="text-2xl" />
                <p>Reward</p>
            </div>

            
            <div className="">
            <CiMoneyCheck1 className="text-2xl" />
                <p>Finance</p>

                
            </div>

            
            <div className="">
                <CiMoneyCheck1 className="text-2xl" />
                <p>Cards</p>
                
            </div>

            
            <div className="">
                <FaMeh className="text-2xl"/>
                <p>Me</p>
                
            </div>
            
          </div>

          
       </footer>
         
    )
    
}