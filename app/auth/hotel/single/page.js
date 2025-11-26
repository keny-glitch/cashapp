  "use client"
import { db } from "@/config/firebase.config";
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle,FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { LiaWhatsapp } from "react-icons/lia";
import * as yup from "yup";
import { redirect } from "next/navigation";




const schema = yup.object().shape({
     checkin:yup.date().required("check in required"),
     checkout:yup.date().required("check out required"),
     roomtype:yup.string().oneOf(["family","double",]).required("Roomtype is required"),
     guess:yup.number().required("check out required").min(2)
})




export default function Family (){
const year = new Date().getFullYear();
const{data:session}= useSession();
const [opsProgress,setOpsProgress]= useState(false);
const [open, setOpen]=useState(false)
const[price,setPrice]=useState(5000);

const handleClose = ()=>{
    setOpen(false)
}


const{handleSubmit,handleChange,touched,values,errors}=useFormik({
initialValues:{
      checkin:"",
      checkout:"",
      roomtype:"",
      guess:"",
      price:"",
},
onSubmit: async(values,{resetForm})=>{
    setOpsProgress(true)
    try{
        await addDoc(collection(db,"profileDetails")),{
            user:session?.user?.id,
            checkin: values.checkin,
            checkout:values.checkin,
            roomtype:values.roomtype,
            guess:values.guess,
            price:values,price,
            timeCreated:new Date(), 
        }
        setOpsProgress(false)
        setOpen(true)
        resetForm()

    }
    catch(errors){
        setOpsProgress(false)
        setOpen(false)
         resetForm()
        console.error("Error updating profile", errors);
    }

},
validationSchema: schema,

})




    return(
        <main className="min-h-screen">
        <div className="bg-[url(/room2.jpg)] py-30 px-90">
             <div className="bg-black/50 rounded-md shadow-md w-150 h-50 text-center">
                 <p className="text-5xl font-bold text-white mb-5">Single Room</p>
                <div className="border-b border-orange-300/50 mb-3 mx-60"></div>
                 <p className="text-xl text-white mb-5">Deluxe Rooms Starting At $299</p>
             <Link href="./booking"><p className="mx-60 bg-orange-300/50 rounded-md shadow-md
              w-35 h-8 px-2 py-1 mb-5">Back To Home</p></Link>
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
                     <p className="text-lg text-center hover:animate-bounce">Single Deluxe</p>
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
                   <div><p className="absolute top-1 rounded-md w-20 h-12 bg-black text-white
                     pl-2 text-sm hover:animate-spin">$300<br/>Pernight</p>
                     <p className="text-lg text-center hover:animate-bounce">Single Deluxe</p>
                  </div>
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

                <div className="bg-orange-50 h-40 mb-5 pt-10 px-20">
                    <form onSubmit={handleSubmit}
                    className="flex gap-10">
                    <div className="">
                        <p>Checking-In-Date</p>
                        <TextField
                        fullWidth
                        InputLabelProps={{shrink:true}}
                        type="date"
                        label="ChECKIN"
                        id="checkin"
                        placeholder="Date of checking IN"
                        value={values.checkin}
                        onChange={handleChange}
                        size="small"
                        />  
                         {touched.checkin&&errors.checkin ?<span className="text-xs text-red-500">{errors.checkin}</span> : null}                      
                    </div>
                    <div>
                        <p>Checking-Out-Date</p>
                        <TextField
                        fullWidth
                        InputLabelProps={{shrink:true}}
                        type="date"
                        label="ChECKOUT"
                        id="checkout"
                        placeholder="Date of checking IN"
                        value={values.checkout}
                        onChange={handleChange}
                        size="small"
                        />
                        {touched.checkout&&errors.checkout ?<span className="text-xs text-red-500">{errors.checkout}</span> : null}
                    </div>
                    <div className="">
                        <p>Room Type</p>
                        <FormControl>
                        <InputLabel id="guest-label">Guest</InputLabel>
                        <Select 
                        labelId="roomtype-label"
                        id="roomtype"
                        name="roomtype"
                        label="Room"
                        size="small"
                        value={values.roomtype}
                        onChange={handleChange}
                        >
                            <MenuItem value="family">Family</MenuItem>
                            <MenuItem value="double">Double</MenuItem>
                            <MenuItem value="single">Single</MenuItem>
                            
                        </Select>
                            {touched.roomtype&&errors.roomtype ?<span className="text-xs text-red-500">{errors.roomtype}</span> : null}
                        </FormControl>
                    </div>

                    <div className="">
                        <p>Guess</p>
                     <FormControl>
                        <InputLabel id="guest-label">Guest</InputLabel>
                        <Select 
                        labelId="guest-label"
                        id="guess"
                        name="guess"
                        label="Guest"
                        size="small"
                        value={values.guess}
                        onChange={handleChange}
                        >
                            <MenuItem value="1">1</MenuItem>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="3">3</MenuItem>
                            <MenuItem value="4">4</MenuItem>
                        </Select>
                        {touched.guess&&errors.guess ?<span className="text-xs text-red-500">{errors.guss}</span> : null}
                    </FormControl>
                                         
                    </div>

                     <div>
                        <p id="price" className="pt-5">Room Price: $500,000</p>
                    </div>

                    <div>
                        <button type="submit" className="pt-1 bg-amber-950 w-50 h-10 mt-4
                         text-white rounded-md text-xl hover:scale-105">Book
                          {opsProgress ? <CircularProgress color="inherit" size="30px"/> : null}
                         </button>
                    </div>
                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>Success</DialogTitle>
                            <DialogContent>
                                <Typography>Updated Successfully</Typography>
                            </DialogContent>
                            <DialogActions>
                            <Button  onClick={handleClose}  sx={{backgroundColor:"indigo"}} variant="contained">Close</Button>
                            </DialogActions>
                        </Dialog>
                    </form>
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