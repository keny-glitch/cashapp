     "use client"
import { TextField } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { useFormik,} from "formik";
import { useEffect, useState } from "react";
import * as yup from "yup";
import {useSession} from "next-auth/react";
import { db } from "@/config/firebase.config";
import Link from "next/link";




const schema = yup.object().shape({
    amount:yup.number().required("Amount is required").min(5000),
})




const duration =[
    {id:"30",days:30},
    {id:"60",days:60},
    {id:"90",days:90}
]

export default function GetLoan (){
    const{data:session}=useSession();
    console.log(session)
    const[loanDuration, setLoanDuration] = useState(0);
    const[rate,setRate]= useState(0);
    const[repayment,setRepayment] = useState(0);


    const {handleSubmit,handleChange,values,touched,errors}=useFormik({
        initialValues:{
             amount: 0,
        },

        onSubmit:async()=>{
            try{
                await addDoc(collection(db,"loans"),{
                    user:session?.user?.id,
                    amount:values.amount,
                    rate:rate,
                    loanDuration:loanDuration,
                    repayment:repayment,
                    timeOfRequest:new Date(),

                })
                alert("Loan request successful");
            }

       catch(errors){
            console.error("please errors",errors)
        }
    },
         validationSchema:schema,

    })

    useEffect(()=>{
        if(values.amount > 1){
        const Interest = (rate * values.amount) / 100;
        setRepayment(values.amount + Interest)
        }
    },[values.amount,rate])




    return(
        <main className="min-h-screen justify-items-center">
            <div className="rounded-md shadow-md w-100 h-130 px-3">
             <Link href="../Opay"><h1 className="text-purple-500 font-bold mb-3 text-center">Quick Cash Loan App</h1></Link>
                <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <TextField
                fullWidth
                type="text" 
                placeholder="Enter Amount"
                id="amount"
                size="small"
                values ={values.amount}
                onChange={handleChange}
                className="rounded-md shadow-md"
                />
            </div>

            <div className="border border-dashed border-black h-30 px-5 mb-3">
                <p className="">Choose your loan Duration</p>
                <ul className="grid grid-cols-3">
                    {duration.map(item=><li key={item.id} onClick={()=>{
                        if(item.days === 30){
                            setRate(10)
                        }
                        else if(item.days === 60){
                            setRate(20)
                        }
                        else if(item.days === 90){
                            setRate(30)
                        }
                        if(item.days === 30){
                            setLoanDuration(30)
                        }
                        else if(item.days === 60){
                            setLoanDuration(60)
                        }
                         else if(item.days === 90){
                            setLoanDuration(90)
                        }

                    }}
                    className="bg-purple-600 text-white text-2xl py-5 px-4 rounded-md 
                    shadow-mg w-25 h-20 hover:animate-spin">{item.days}Days

                </li>
                )}
                </ul>
            </div>

            <div className="border border-dashed border-black h-25 px-5 mb-3">
                <p>Intrest rate for {loanDuration}</p>
                <p className="text-4xl hover:animate-bounce">{rate}%</p>
            </div>

            <div className="bg-purple-600 rounded-md shadow-md h-30 hover:scale-105 text-white px-5 py-5 mb-3">
                <p>Repayment Amount</p>
                <p className="text-3xl">$ {repayment.toLocaleString()}</p>
            </div>
 
            <button className="bg-purple-600 w-20 h-10 rounded-md shadow-md text-white hover:translate-x-10">GET LOAN</button>
             </form>
            </div>

        </main>
    )
}