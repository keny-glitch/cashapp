       "use client"
import { LinearProgress, TextField } from "@mui/material";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md"
import { FaCarSide } from "react-icons/fa";
import { TiTick } from "react-icons/ti"
import { MdHeadset } from "react-icons/md";
import { MdPayment } from "react-icons/md"
import Image from "next/image";  
import Link from "next/link";

export default function Category(){
   return(
        <main className="min-h-screen">
<div className="bg-purple-500 text-xs text-white w-full h-10 py-3">
                <marquee>
                <p>We are the best in Terms of Gadget Pick Yours Today and get the sound Feelings!!! 
                        We are the best in Terms of Gadget Pick Yours Today and get the sound Feelings!!!</p>
                </marquee>
        </div>

        <div className="flex pt-3 px-2">
            <div className="flex justify-center items-center">
            <Link href="./Shop"><div className="">
                <Image
                src="/logo1.jpg"
                alt="logo"
                width={130}
                height={100}
                />
            </div></Link>

            <div className="ml-10">
                <ul className="flex justify-center items-center gap-10">
                    <li className="text-xl text-gray-800 hover:bg-gray-800 hover:text-white">Home</li>
                    <li className="text-xl text-gray-800 hover:bg-gray-800 hover:text-white">Shop</li>
                    <li className="text-xl text-gray-800 hover:bg-gray-800 hover:text-white">About</li>
                    <li className="text-xl text-gray-800 hover:bg-gray-800 hover:text-white">Blogs</li>
                </ul>
            </div>
            
        
        </div>

            <div className="flex ml-auto pt-10">
                <TextField className="text-xl  "
                fullWidth
                type ="text"
                placehloder="Enter your search"
                id="search"
                size="small"

                />
                <IoSearchOutline className="w-10 h-10 text-gray-800 pt-3" />
                <Link href="./cart"><MdOutlineShoppingCart className="w-10 h-10"/></Link>
            </div>
            </div>

            <div className="flex gap-5">
            <div className="bg-purple-50 w-70 px-10 py-10 shadow-md">
            <div className="w-50 mb-8">
                <TextField
                fullWidth
                type="text"
                size="small"
                id="search"
                placeholder="search"
                className="text-xl"
                />
                </div>

            <div className="">
                <h1 className="mb-8 text-2xl">Category</h1>
                <div className="mb-8">
                <div className="flex w-10 gap-8 mb-2">
                <TextField
                fullWidth
                type="checkbox"
                size="small"
                id="ALL"
                className="text-xl"
                />
                <p>ALL</p>
                </div>

                <div className="flex w-10 gap-8 mb-2">
                <TextField
                fullWidth
                type="checkbox"
                size="small"
                id="LAPTOP"
                className="text-xl"
                />
                <p>LAPTOP</p>
                </div>

                <div className="flex w-10 gap-8 mb-2">
                <TextField
                fullWidth
                type="checkbox"
                size="small"
                id="GAME"
                className="text-xl"
                />
                <p>GAME</p>
                </div>

                <div className="flex w-10 gap-8 mb-2">
                <TextField
                fullWidth
                type="checkbox"
                size="small"
                id="AUDIO"
                className="text-xl"
                />
                <p>AUDIO</p>
                </div>

                <div className="flex w-10 gap-8 mb-2">
                <TextField
                fullWidth
                type="checkbox"
                size="small"
                id="PHONE"
                className="text-xl"
                />
                <p>MOBILE</p>
                </div>
                </div>
            </div>
            <p className="mb-5 text-2xl">BRAND</p>

            <div className=" w-50 mb-5">
                <TextField
                fullWidth
                type="select"
                size="small"
                id="select"
                className="text-xl"
                />
                </div>
                <div>
                <p className="mb-5 text-2xl">Price Range</p>
                <p className="mb-5">price range $0-$5000</p>
                <LinearProgress
                className="w-50 h-10 mb-5"
                />
                </div>
                <div className="mb-5">
                    <button className="bg-red-600 text-white rounded-md w-30 h-10">Reset Filter</button>
                </div>
                </div>

                <div className="grid grid-cols-4 gap-5 px-1 py-5">
                <div className="rounded-md shadow-md shadow-indigo-500 w-65 h-70 mb-20 hover:scale-105">
                    <Image
                    src="/ps2.jpg"
                    alt="phto"
                    width={400}
                    height={100}
                    className="w-65 h-70"
                    />
                     <div className="text-red-500"><p>Best Iphone</p>
                    <p>$300</p></div>
                    <div> 
                    <Link href="./product"> <button className="text-sm text-white rounded-md bg-red-600 w-30">Add to cart</button></Link>
                    </div>
                </div>

                <div className="rounded-md shadow-md shadow-indigo-500 w-65 h-70 mb-20 hover:translate-y-6">
                    <Image
                    src="/dell1.jpg"
                    alt="phto"
                    width={400}
                    height={100}
                    className="w-65 h-70"
                    />
                     <div className="text-red-500"><p>Best Iphone</p>
                    <p>$300</p></div>
                    <div>
                        <button className="text-sm text-white rounded-md bg-red-600 w-30">Add to cart</button>
                    </div>
                </div>

                <div className="rounded-md shadow-md shadow-indigo-500 w-65 h-70 mb-20 hover:scale-105">
                 <Image
                    src="/flash3.jpg"
                    alt="phto"
                    width={400}
                    height={100}
                    className="w-65 h-70"
                    />
                     <div className="text-red-500"><p>Best Iphone</p>
                    <p>$300</p></div>
                    <div>
                        <button className="text-sm text-white rounded-md bg-red-600 w-30">Add to cart</button>
                    </div>
                </div>

                <div className="rounded-md shadow-md shadow-indigo-500 w-65 h-70 mb-20 hover:translate-y-6">
                    <Image
                    src="/headset1.jpg"
                    alt="phto"
                    width={400}
                    height={100}
                    className="w-65 h-70"
                    />
                     <div className="text-red-500"><p>Best mobile</p>
                    <p>$300</p></div>
                    <div>
                        <button className="text-sm text-white rounded-md bg-red-600 w-30">Add to cart</button>
                    </div>
                </div>

                <div className="rounded-md shadow-md shadow-indigo-500 w-65 h-70 mb-20 hover:scale-105">
                    <Image
                    src="/ipcross.jpg"
                    alt="phto"
                    width={400}
                    height={100}
                    className="w-65 h-70"
                    />
                     <div className="text-red-500"><p>Best Ipod</p>
                    <p>$300</p></div>
                    <div>
                        <button className="text-sm text-white rounded-md bg-red-600 w-30">Add to cart</button>
                    </div>
                </div>

                <div className="rounded-md shadow-md shadow-indigo-500 w-65 h-70 hover:translate-6">
                    <Image
                    src="/ipod1.jpg"
                    alt="phto"
                    width={400}
                    height={100}
                    className="w-65 h-70"
                    />
                     <div className="text-red-500"><p>Best Iphone</p>
                    <p>$300</p></div>

                    <div>
                        <button className="text-sm text-white rounded-md bg-red-600 w-30">Add to cart</button>
                    </div>
                </div>

                <div className="rounded-md shadow-md shadow-indigo-500 w-65 h-70 hover:scale-105">
                    <Image
                    src="/jbl2.jpg"
                    alt="phto"
                    width={400}
                    height={100}
                    className="w-65 h-70"
                    />
                     <div className="text-red-500"><p>Best Iphone</p>
                    <p>$300</p></div>

                    <div>
                        <button className="text-sm text-white rounded-md bg-red-600 w-30">Add to cart</button>
                    </div>
                </div>

                <div className="rounded-md shadow-md shadow-indigo-500 w-65 h-70 hover:translate-6">
                    <Image
                    src="/lapihp.jpg"
                    alt="phto"
                    width={400}
                    height={100}
                    className="w-65 h-70"

                    />
                     <div className="text-red-500"><p>Best Iphone</p>
                     <p>$300</p></div>

                     <div>
                        <button className="text-sm text-white rounded-md bg-red-600 w-30">Add to cart</button>
                    </div>
                </div>

                </div>

                </div>

        </main>
    )
}