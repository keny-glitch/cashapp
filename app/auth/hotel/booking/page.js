import Image from "next/image";
import { GiTrophyCup } from "react-icons/gi";
import { FaCarSide } from "react-icons/fa";
import { FaBeer } from "react-icons/fa"
import { FaHiking } from "react-icons/fa";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { LiaWhatsapp } from "react-icons/lia";



 export default function BookHome (){
    const year= new Date().getFullYear()
    return(
        <main className="min-h-screen">
            <div className=" flex my-5 gap-10 mx-20">
                <div className="w-40">
                  <Link href="./Opay"><p className="text-2xl font-bold border border-black
                     text-black">Beach  <span className="text-orange-200"> Resort</span></p></Link> 
                </div>

                <div className=""> 
                <ul className="flex gap-8 font-bold">
                    <li className="hover:translate-x-6 hover:bg-gray-800 hover:text-white">Home</li>
                    <li className="hover:translate-x-6 hover:bg-gray-800 hover:text-white">Rooms</li>
                  <Link href="./history"><li className="hover:translate-x-6
                   hover:bg-gray-800 hover:text-white">Customer Profile</li></Link>
                </ul>
                </div>
            </div>
         <div className="bg-[url(/resort4.jpg)] h-screen py-50 px-90">
             <div className="bg-black/70 rounded-md shadow-md w-150 h-50 text-center">
                 <p className="text-6xl font-bold text-white mb-5">Kenny'S Resort</p>
                <div className="border-b border-orange-300/50 mb-3 mx-60"></div>
                 <p className="text-xl text-white mb-5">Deluxe Rooms Starting At $299</p>
                <p className="mx-60 bg-orange-300/50 rounded-md shadow-md w-30 h-8 px-2 py-1 mb-5">OUR ROOMS</p>
             </div>
        </div>

         <div className="bg-orange-50 w-full h-70 py-10 mb-10">
            <p className="text-2xl text-center font-bold mb-5">Services</p>
            <div className="border-b border-orange-300/50 mx-150"></div>

         <div className="grid  grid-cols-4 justify-center items-center px-20 py-10 mb-5">
            <div className=" mb-5">
                 <GiTrophyCup className="w-5 h-5 mb-5 text-orange-300"/>
               <p className="text-sm mb-4">Free Cocktails</p>
               <p className="text-sm">Lorem Lorem30 Lorem30 Lorem30<br /> Lorem Lorem30 Lorem30 Lorem30
               <br />Lorem Lorem30 Lorem30 Lorem30<br /></p>
            </div>

            <div className="mb-5">
                <FaHiking className="w-5 h-5 mb-5 text-orange-300 "/>
                <p className="text-sm mb-4">Endless Hiking</p>
                <p className="text-sm">Lorem Lorem30 Lorem30 Lorem30<br /> Lorem Lorem30 Lorem30 Lorem30
                <br />Lorem Lorem30 Lorem30 Lorem30<br /></p>
            </div>

             <div className="mb-5">
                <FaCarSide className="w-5 h-5 mb-5 text-orange-300"/>
                <p className="text-sm mb-4">Free Shuttle</p>
                <p className="text-sm">Lorem Lorem30 Lorem30 Lorem30<br /> Lorem Lorem30 Lorem30 Lorem30
                <br />Lorem Lorem30 Lorem30 Lorem30<br /></p>
            </div>

             <div className="mb-5">
                <FaBeer className="w-5 h-5 mb-5 text-orange-300 "/>
                <p className="text-sm mb-4">Strongest Beer</p>
                <p className="text-sm">Lorem Lorem30 Lorem30 Lorem30<br /> Lorem Lorem30 Lorem30 Lorem30
                <br />Lorem Lorem30 Lorem30 Lorem30<br /></p>
            </div>

        </div>

        </div>

        <div className="mb-10">
          <p className="text-2xl text-center font-bold mb-5">Featured Rooms</p>
          <div className="border-b border-orange-300/50 mx-150 mb-5"></div>

          <div className="grid grid-cols-3 px-30">
          <div className="w-[300px] h-[290px] rounded-md shadow-md 
           shadow-indigo-500 hover:scale-105 relative">
            <Image
            src="/room2.jpg"
            alt="rooms"
            width={300}
            height={100}
            className="w-[300px] h-[250px] rounded-md shadow-md"
            />
            <p className="absolute top-1 rounded-md w-20 h-12 bg-black text-white
             pl-2 text-sm hover:animate-spin">$500<br/>Pernight</p>
            <Link href="./family"><p className="text-lg text-center hover:animate-bounce">Family Deluxe</p></Link>
          </div>

           <div className="w-[300px] h-[290px] rounded-md shadow-md shadow-indigo-500 hover:scale-105 relative">
            <Image
            src="/room2.jpg"
            alt="rooms"
            width={300}
            height={100}
            className="w-[300px] h-[250px] rounded-md shadow-md"
            />
            <p className="absolute top-1 rounded-md w-20 h-12 bg-black text-white
             pl-2 text-sm hover:animate-spin">$400<br/>Pernight</p>
           <Link href="./double"><p className="text-lg text-center hover:animate-bounce">Double Deluxe</p></Link>
          </div> 

           <div className="w-[300px] h-[290px] rounded-md shadow-md shadow-indigo-500 hover:scale-105 relative">
            <Image
            src="/room2.jpg"
            alt="rooms"
            width={300}
            height={100}
            className="w-[300px] h-[250px] rounded-md shadow-md"
            />
            <p className="absolute top-1 rounded-md w-20 h-12 bg-black text-white
             pl-2 text-sm hover:animate-spin">$300<br/>Pernight</p>
            <Link href="./update"><p className="text-lg text-center hover:animate-bounce">Single Deluxe</p></Link>
          </div>
          </div>
        </div>

        <div className=" grid grid-cols-1 pl-25 md:grid-cols-2 lg:grid-cols-4 md:pl-30 lg:pl-30">
                    <div>
                        <p className="text-white font-bold text-2xl mb-2 mt-5">CasApp</p>
                        <p className="font-thin text-gray-400">About us</p>
                        <p className="font-thin text-gray-400">Contact Us</p>
                        <p className="font-thin text-gray-400">Location</p>
                    </div>
                    <div>
                        <p className="text-white font-bold text-2xl mb-2 mt-5">Financial Services</p>
                        <p className="text-gray-400 font-thin">Loans</p>
                        <p className="text-gray-400 font-thin">Investment</p>
                        <p className="text-gray-400 font-thin">Bonds</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-white mb-2 mt-5">Legal</p>
                        <p className="font-thin text-gray-400">Privacy policy</p>
                        <p className="font-thin text-gray-400">Cookies</p>
                        <p className="font-thin text-gray-400">Terms of Use</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-white mb-2 mt-5">Socials</p>
                        <div className="flex gap-4">
                          <FaFacebookF className="text-2xl text-gray-400" />
                          <FaInstagram className="text-2xl text-gray-400" />
                          <Link href="https://wa.me/+2349036786060"><LiaWhatsapp className="text-2xl text-gray-400"/></Link>
        
                        </div>
                    </div>
                </div>  
                     <div className="border-t border-gray-400 pb-5 ">
                          <h1 className="text-center text-gray-400 mt-3"> &copy;{year} FastCash </h1>
                     </div>
        
        </main>
    )
 } 