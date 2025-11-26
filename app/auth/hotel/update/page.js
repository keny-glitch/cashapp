     "use client"
import { db } from "@/config/firebase.config";
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import { useState } from "react";
import * as yup from "yup";
import { FaAnglesRight } from "react-icons/fa6";
import Link from "next/link";

 const schema = yup.object().shape({
    fullname: yup.string().required("fullName is required").min(5),
    bvn: yup.number().required("Bvn is rquired").min(12),
    nin: yup.number().required('Nin is required').min(11),
    dob: yup.date().required("Date of birth is required"),
    phone: yup.number().required("Phone number is required").min(11),
    gender: yup.string().oneOf(["male","female"]).required("Gender is required"),
    address: yup.string().required("Address is required").min(10),
    checkin:yup.date().required("Check In Date"),
    checkout:yup.date().required("Check Out Date"),

 })

export default function UpdateProfile () {
    const {data: session} = useSession();
    const [opsProgress, setOpsProgress] = useState(false);
    const [open, setOpen] = useState(false);
  const handleClose = ()=>{
    setOpen(false);
 }

const {handleSubmit,handleChange,touched,errors,values} = useFormik({
    initialValues: {
        fullname: "",
        bvn: "",
        nin: "",
        dob: "",
        phone: "",
        gender: "",
        address: "",
        checkin:"",
        checkout:"",
    },
    onSubmit: async(values,{resetForm})=>{
        setOpsProgress(true)
        try {
             await addDoc(collection(db,"profileDetails"),{
                user: session?.user?.id,
                fullname: values.fullname,
                bvn: values.bvn,
                nin: values.nin,
                dob: values.dob,
                phone: values.phone,
                gender: values.gender,
                address: values.address,
                checkin:values.checkin,
                checkout:values.checkout,
                timeCreated: new Date(),
             })
             setOpsProgress(false)
             setOpen(true)
             resetForm()
        }
        catch(errors) {
             setOpsProgress(false)
             setOpen(false);
            console.error("Error updating profile", errors);
        }
    },
    validationSchema: schema,
})

    return (
        <main className="min-h-screen lg:flex lg:justify-center lg:gap-10 py-4 md:py-6 md:px-12 lg:py-8 lg:px-16">
           <div className="bg-[url(/room2.jpg)] h-screen rounded-md shadow-md shadow-indigo-600">
            <div className="w-full md:w-[500px] h-auto rounded-md  shadow-md px-4 py-6">
                <h1 className="text-2xl font-bold text-gray-300 text-center mb-4">Input Your Details</h1>
                <form onSubmit={handleSubmit}
                 className="flex flex-col gap-3">
                    <div>
                        <TextField
                        fullWidth
                        type="text"
                        label="FullName"
                        id="fullname"
                        placeholder="Enter Your fullName"
                        value={values.fullname}
                        onChange={handleChange}
                        size="small"
                        />
                        {touched.fullname&&errors.fullname ?<span className="text-xs text-red-500">{errors.fullname}</span> : null}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-">
                      <div>
                        <TextField
                        fullWidth
                        type="number"
                        label="BVN"
                        id="bvn"
                        placeholder="Enter BVN"
                        value={values.bvn}
                        onChange={handleChange}
                        size="small"
                        />
                        {touched.bvn&&errors.bvn ?<span className="text-xs text-red-500">{errors.bvn}</span> : null}
                       </div> 
                       <div>
                        <TextField
                          fullWidth
                          type="number"
                          label="NIN"
                          id="nin"
                          placeholder="Enter nin"
                          value={values.nin}
                          onChange={handleChange}
                          size="small"
                        />
                        {touched.nin&&errors.nin ?<span className="text-xs text-red-500">{errors.nin}</span> : null}
                       </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                       <div> 
                        <TextField
                        fullWidth
                        InputLabelProps={{shrink:true}}
                        type="date"
                        label="DOB"
                        id="dob"
                        placeholder="Enter date of birth"
                        value={values.dob}
                        onChange={handleChange}
                        size="small"
                        />
                        {touched.dob&&errors.dob ?<span className="text-xs text-red-500">{errors.dob}</span> : null}
                       </div>
                       <div>
                        <TextField
                         fullWidth
                         type="tel"
                         label="Phone Number"
                         id="phone"
                         placeholder="Enter your phone number"
                         value={values.phone}
                         onChange={handleChange}
                         size="small"
                        />
                        {touched.phone&&errors.phone ?<span className="text-xs text-red-500">{errors.phone}</span> : null}
                       </div>
                    </div>
                    <FormControl>
                        <InputLabel id="gender-label">Gender</InputLabel>
                        <Select 
                          labelId="gender-label"
                          id="gender"
                          name="gender"
                          label="Gender"
                          size="small"
                          value={values.gender}
                          onChange={handleChange}
                         >
                             <MenuItem value="male">Male</MenuItem>
                             <MenuItem value="female">Female</MenuItem>
                        </Select>
                        {touched.gender&&errors.gender ?<span className="text-xs text-red-500">{errors.gender}</span> : null}
                    </FormControl>
                    <div> 
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
                        <TextField
                        fullWidth
                        InputLabelProps={{shrink:true}}
                        type="date"
                        label="ChECKOUT"
                        id="checkout"
                        placeholder="Date of checking OUT"
                        value={values.checkout}
                        onChange={handleChange}
                        size="small"
                        />
                        {touched.checkout&&errors.checkout ?<span className="text-xs text-red-500">{errors.checkout}</span> : null}
                       </div>
                       


                    <div>
                        <TextField
                         fullWidth
                         multiline
                         rows={3}
                         type="text"
                         label="Address"
                         id="address"
                         placeholder="Enter Address"
                         value={values.address}
                         onChange={handleChange}
                         size="small"
                        />
                        {touched.address&&errors.address ?<span className="text-xs text-red-500">{errors.address}</span> : null}
                    </div>
                    <button type="submit" className=" flex justify-center items-center gap-3 w-full h-10 rounded-md bg-indigo-500 text-white cursor-pointer">Update
                       {opsProgress ? <CircularProgress color="inherit" size="30px"/> : null}
                    </button>
                
                </form>

            </div>
            <Link href="./single">
             <div className="flex justify-center gap-3 hover:border-b hover:border-indigo-400">
                <p className="text-sm text-indigo-400">Proceed To Room</p>
                <FaAnglesRight className="text-sm text-indigo-400 mt-1" />
             </div>
             </Link>
            {/* successDialog */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Success</DialogTitle>
                <DialogContent>
                    <Typography>Profile Updated Successfully</Typography>
                </DialogContent>
                <DialogActions>
                     <Button  onClick={handleClose}  sx={{backgroundColor:"indigo"}} variant="contained">Close</Button>
                </DialogActions>
            </Dialog>
          </div>
        </main>
    )
}