import Image from "next/image";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiCustomerService2Line } from "react-icons/ri"
import { LuScanLine } from "react-icons/lu"
import { LuEyeOff } from "react-icons/lu"
import { AiFillSafetyCertificate } from "react-icons/ai"
import { PiGreaterThanLight } from "react-icons/pi";
import { RiAccountPinBoxLine } from "react-icons/ri";
import { RiBankLine } from "react-icons/ri";
import { PiHandWithdrawBold } from "react-icons/pi"
import { MdOutlineTapAndPlay } from "react-icons/md";
import { TbMobiledata } from "react-icons/tb"
import { RiFootballLine } from "react-icons/ri";
import { MdOutlineLiveTv } from "react-icons/md";
import { AiOutlinePropertySafety } from "react-icons/ai";
import { FaNairaSign } from "react-icons/fa6";
import { PiHandHeartThin } from "react-icons/pi"
import { GiArmoredBoomerang } from "react-icons/gi";
import { FaFileContract } from "react-icons/fa";
import { IoCardOutline } from "react-icons/io5";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { LiaWhatsapp } from "react-icons/lia";
import { CircularProgress } from "@mui/material";



export default function AppOpay (){
    const year= new Date().getFullYear();
  return(
    <main className="min-h-screen bg-stone-950 w-full">
     <div className="flex  text-white h-10  shadow-md">
        <div className="flex gap-4"> 
          <Image className="rounded-full "
          src="/oplogo.jpg"
          alt="logo"
          width={40}
          height={6}
          />
          <p className="py-2">Hi,AGADA</p>
        </div>

           <div className="flex ml-auto gap-3 py-2">
             
             <div className="">
              <RiCustomerService2Line className="text-2xl"/>
             </div>

             <div className="">
              <LuScanLine className="text-2xl"/>
             </div>

             <div className="">
              <IoIosNotificationsOutline className="text-2xl"/>
            </div>

         </div>

    </div>

  <div className=" bg-emerald-500 rounded-md shadow-md h-25 my-2 text-xs w-full">
      <div className="flex">
        <div className="flex py-4 px-5 gap-2 "> 
           <AiFillSafetyCertificate className="mt-1" />
           <p>Available Balance</p>
           <LuEyeOff className="mt-1" />
        </div>

        <div className="flex ml-auto py-4 px-10 gap-1">
           <p>Transaction History</p>
           <PiGreaterThanLight className="mt-1" />
        </div>
      </div> 
         
      <div className="flex gap-3 mx-10">
        <div className="flex">
              <p className="text-lg font-bold">$500.000.000</p>
              <PiGreaterThanLight className="text-lg pt-2"/>
        </div>

        <div className="ml-auto bg-black w-30 h-8 rounded-full shadow-md">
           <p className="text-green-800 mt-2 px-5 text-xs">+Add Money</p>
        </div> 
      </div>
  </div>

  <div className="grid grid-cols-4 md:grid-cols-4  bg-stone-900 rounded-md
   shadow-lg h-25 gap-10 pl-1 md:pl-20 py-5 my-2 text-xs w-full">
     
   <div className="">
    <RiAccountPinBoxLine className="text-emerald-600 text-3xl rounded-md shadow-lg" />
      <p className="text-white pt-4">To Opay</p>
    </div>

    <div className="">
      <RiBankLine className="text-emerald-600 text-3xl rounded-md shadow-md" />
      <p className="text-white pt-4">To Bank</p>
    </div>

    <div className="">
      <PiHandWithdrawBold className="text-emerald-600 text-3xl rounded-md shadow-md"/>
      <p className="text-white pt-4">Withdraw</p>
    </div>

    <div className="">
      <PiHandWithdrawBold className="text-emerald-600 text-3xl rounded-md shadow-md"/>
      <p className="text-white pt-4">Play4aChild</p>
    </div>

  </div>

  <div className="grid bg-stone-900 rounded-md shadow-md h-25 py-5  md:px-15 my-2 gap-2 w-full">
    
    <div className="grid grid-cols-4 md:grid-cols4  gap-8 ">
    <Image className="rounded-full shadow-md w-10 h-15"
    src="/boypix.jpg"
    alt="boypix"
    width={25}
    height={1}
    />
    <p className="text-xs text-gray-300 pt-4">Create a <span className="text-green-800">teenage's account </span>for your child/ward today!</p>
    <Image
    src="/opayban2.jpg"
    alt="opaybanner"
    width={100}
    height={10}
    />
    <div className=""> <p className="text-xs text-gray-300 bg-green-800 rounded-full
     shadow-md w-10 h-10 pt-3 pl-4"> GO</p>
     </div>
    
   </div>
  </div>

  <div className=" bg-stone-900 rounded-md shadow-md h-70 text-xs text-white  w-full">
    <div className="grid grid-cols-4 md:grid-cols-6 gap-15  md:px-15 py-10">
    <div>
      <MdOutlineTapAndPlay className="text-2xl" />
       <p>Airtime</p>
    </div>

    <div>
      <TbMobiledata className="text-2xl" />
    <p>Data</p>
    </div>

    <div>
      <RiFootballLine className="text-2xl" />
    <p>Beting</p>
    </div>

    <div>
      <MdOutlineLiveTv className="text-2xl" />
    <p>Tv</p>
    </div>

    
    <div>
      <AiOutlinePropertySafety className="text-2xl" />
    <p>Safebox</p>
    </div>

    
    <Link href="dashboard/get-loan"><div>
      <FaNairaSign className="text-2xl" />
    <p>Loan</p>
    </div></Link>

    <div>
    <Link href="./Shop">
    <PiHandHeartThin className="text-2xl" />
    <p>Shopping</p>
    </Link>
    </div>

    <div>
      <GiArmoredBoomerang className="text-2xl" />
    <p>More</p>
    </div>

    <div className="">
      <FaFileContract className="text-2xl" />
      <p>Finance</p>
    </div>

    <div className="">
      <IoCardOutline className="text-2xl" />
     <p>Card</p>
    </div>

    
    <Link href="hotel/booking"><div>
      <FaNairaSign className="text-2xl" />
    <p>Booking</p>
    </div></Link>

    <div>
      <GiArmoredBoomerang className="text-2xl" />
    <p>More</p>
    </div>
   </div>

  </div>


   <div className=" grid grid-cols-1 pl-25 md:grid-cols-2 lg:grid-cols-4 md:pl-30 lg:pl-30 bg-white">
              <div>
                  <p className="text-white font-bold text-2xl mb-2 mt-5">CashApp</p>
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
                    <h1 className="text-center text-gray-400 mt-3"> &copy;{year} CashApp </h1>
               </div>
       
    </main>
  )
}


//authentication verify userlogin logout,authorization

