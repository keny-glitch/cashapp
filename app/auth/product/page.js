      "use client"
import { TextField } from "@mui/material";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md"
import { FaCarSide } from "react-icons/fa";
import { TiTick } from "react-icons/ti"
import { MdHeadset } from "react-icons/md";
import { MdPayment } from "react-icons/md"
import Image from "next/image";
import Link from "next/link";
import { createContext, useEffect, useReducer, useState } from "react";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import { addDoc, collection } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Router } from "next/router";




      const  productData = [
            {
              id:1,
              price:500,
              description:"Best Playstation",
              
            
            },  
             
        ]


export default function Product(){
            const[product,setProduct]=useState(productData);
            const[cart,setCart]= useState([]);
            const[quantity,setQuantity]= useState(0);
            const[total,setTotal]= useState(0);
            const[price,setPrice]= useState(500);
            const router = useRouter();
            
            
        
        
            useEffect(()=>{
                //first calculate total price in cart
                const total = cart.reduce((accumilator,currentItem)=>{
                    //create a variable and covert the price to number
                    const priceAsNumber = parseFloat(currentItem.price);
                    //check if the price is invalid or if its strnigs the ruturn accumilator
                    if(isNaN(priceAsNumber)){
                        return accumilator
                    }
                    //if price is valid then add
                    return accumilator + priceAsNumber * currentItem.amount 
                },0)//initialize accumilator 0;
                setTotal(total);
            },[cart]);
        
            //calculate the quantity of item in cart
        
            useEffect(()=>{
                //check if cart is not empty then use reduce method to sum up items
                if (cart){
                    const amount = cart.reduce((accumilator,currentItem)=>{
                        return accumilator + currentItem.amount
                    },0);
                    setQuantity(amount)
                }
                
            },[cart]);
        
            //to add to cart first create new item with initial quantity of 1
            const addToCart = (product,id)=>{
                const newItem = {...product,amount:1}
                //check if the item is in the cart or exist in cart
                const cartItem = cart.find((item) => {
                    return item.id===id
                  })
                  //if item exist map throguh
                  if(cartItem){
                    const newCart = [...cart].map((item)=>{
                         if(item.id===id){
                            return {...item,amount:cartItem.amount + 1}
                        } else item
                    })
                    setCart(newCart);
                    
                  } else{
                    setCart([...cart, newItem])
                    alert("product added to cart");
                  }
                  
            }
            //clear cart 
            const clearCart = ()=>{
                setCart([]);
                alert("cart empty")
            }
            
        
            const removeFromCart = (id)=>{
                const newCart = cart.filter((item)=>{
                    return item.id !==id;
                })
                if (newCart){
                setCart(newCart);
                alert("product removed successfully")
              }else{
                alert("cart empty")
              }
            }
        
        
            //increase specific product
            const increaseQuantity =(id)=>{
            const cartItem = cart.find((item)=> item.id===id)
            addToCart(cartItem,id)
        }
        
        const decreasingQuantity = (id)=>{
            const cartItem = cart.find((item)=>{
                return item.id===id;
            })
        
            if(cartItem){
                const newCart = cart.map((item)=>{
                    if(item.id===id){
                        return {...item, amount:cartItem.amount - 1}
                    } else{
                         return item
                    }
                })
                setCart(newCart)
            }
            else{
                if(cartItem.amount < 2){
                    removeFromCart(id)
                }
            }
        }
        
    
   
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
                           <Link href ="./Shop"> <div className="">
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
                    <p className="text-2xl text-red-500 mt-4">{quantity}</p>
                   <Link href="./cart"> <MdOutlineShoppingCart className="w-7 h-10 mt-4"/></Link>
                </div>
            </div>

            <div className="grid grid-cols-2">
            <div className="">
              <Image
                src="/ps2.jpg"
                alt="ps"
                width={500}
                height={100}
                className="w-260 h-150"
                />
            </div>
            <div className="pt-15 px-10 ">
                
                <h1 className="text-4xl font-bold  pt-10 mb-8">Microsoft Xbox X/S Wireless<br/>Control Robot White</h1>
                <p className="mb-8">Microsoft Gamming/Xbox X/S</p>
               
            
                
               <div className="flex "> 
               <p className="mb-3 pt-2 text-lg">Price of Item:{price}</p> 
               
                   <button className="text-white bg-red-500 rounded-md w-30 h-10  mx-2">
                    4% duscount
                    </button>
               </div>
            
                
                <p className="mb-8">At Zaptroshop, we're passionate about bringing the future of technology to your fingertips. Whether you’re upgrading
                     your workspace, enhancing your home, or searching for the perfect gift, Zaptroshop offers a 
                     curated selection of high-quality electronics, smart gadgets, and tech accessories  all at competitive prices.

                 </p>
                 <p className="text-lg mb-3">Current Price:{price *quantity}</p>
                <div className="flex gap-5 mb-8"><p>Quantity</p>
                <button className="w-5" onClick={()=>increaseQuantity(product.id)}>+</button>
                <p>{quantity}</p>
                 <button className="w-5" onClick={()=>decreasingQuantity(product.id)}>-</button>
                </div>
                <button onClick={() => addToCart(product,product.id)} className="bg-red-500 text-white
                rounded-md w-30 h-10">Add to Cart</button>

            </div>
                 
            </div>
                

        </main>
    )}