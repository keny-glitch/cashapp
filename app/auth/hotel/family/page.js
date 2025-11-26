import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { LiaWhatsapp } from "react-icons/lia";




export default function Family (){
    const year= new Date().getFullYear()
    return(
        <main className="min-h-screen">
        <div className="bg-[url(/room2.jpg)] py-30 px-90">
             <div className="bg-black/50 rounded-md shadow-md w-150 h-50 text-center">
                 <p className="text-5xl font-bold text-white mb-5">Family Room</p>
                <div className="border-b border-orange-300/50 mb-3 mx-60"></div>
                 <p className="text-xl text-white mb-5">Deluxe Rooms Starting At $299</p>
               <Link href="./booking"> <p className="mx-60 bg-orange-300/50 rounded-md 
               shadow-md w-35 h-8 px-2 py-1 mb-5">Back To Home</p> </Link>
             </div>
        </div>

        <div className="mb-5">
                  <p className="text-2xl text-center font-bold mb-5">Featured Rooms</p>
                  <div className="border-b border-orange-300/50 mx-150 mb-5"></div>
        
                  <div className="grid grid-cols-3 px-30 mb-15">
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
                     <p className="text-lg text-center hover:animate-bounce">Family Deluxe</p>
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
                     <p className="text-lg text-center hover:animate-bounce">Double Deluxe</p>
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
                     <p className="text-lg text-center hover:animate-bounce">Single Deluxe</p>
                  </div>
                  </div>

                  <div className="grid grid-cols-2 px-30 gap-20">
                    <div className="">
                        <p className="text-xl mb-5">Details</p>
                        <p className="text-sm">LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem<br/>
                           LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem<br/>
                           LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem<br/>
                           LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem<br/>
                           LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem<br/>
                           LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem<br/>
                           LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem<br/>
                           LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem<br/>
                           LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem<br/>
                           </p>
                    </div>

                    <div className="px-30">
                        <p className="text-xl mb-5">Info</p>
                        <div className="text-sm">
                        <p className="mb-5">Price:$300</p>
                        <p className="mb-5">Size:$300 SQFT</p>
                        <p className="mb-5">Max Capacity:1 person</p>
                        <p className="mb-5">Pets:Allowed</p>
                        <p className="mb-5">Free Breakfast included</p>
                        </div>
                    </div>

                  </div>
                </div>

                <div className="bg-orange-50 h-40 mb-5 flex gap-10 pt-10 px-20">
                    <div className="">
                        <p>Checking-In-Date</p>
                        <TextField
                        type="date"
                         />
                    </div>
                    <div>
                        <p>Checking-Out-Date</p>
                        <TextField
                        type="date"
                         />
                    </div>
                    <div className="">
                        <p>Room Type</p>
                        <FormControl>
                    
                            <InputLabel id="room-label" className="w-50">Room Type</InputLabel>
                            <Select 
                            labelId="room-label"
                            id="room"
                            label="Room"
                            size="small"
                            >
                            <MenuItem value="Family">Family</MenuItem>
                            <MenuItem value="Double">Double</MenuItem>
                            <MenuItem value="Single">Single</MenuItem>

                            </Select>
                        </FormControl>
                    </div>

                    <div className="">
                        <p>Guess</p>
                        <FormControl>
                    
                            <InputLabel id="guess-label">Guess</InputLabel>
                            <Select 
                            labelId="guess-label"
                            id="guess"
                            label="Guess"
                            size="small"
                            >
                            <MenuItem value="number">1</MenuItem>
                            <MenuItem value="number">2</MenuItem>
                            <MenuItem value="number">3</MenuItem>

                            </Select>
                        </FormControl>
                    </div>

                     <div>
                        <p className="pt-5">Room Price: $500,000</p>
                    </div>

                    <div>
                        <button className="pt-1 bg-amber-950 w-50 h-10 mt-4
                         text-white rounded-md text-xl">Book</button>
                    </div>
                </div>


                <div className=" grid grid-cols-1 pl-25 md:grid-cols-2 lg:grid-cols-4 md:pl-30 lg:pl-30">
                            <div>
                                <p className="text-white font-bold text-2xl mb-2 mt-5">FastCash</p>
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