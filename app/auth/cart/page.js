    "use client"
import { TextField } from "@mui/material";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md"
import { FaCarSide } from "react-icons/fa";
import { TiTick } from "react-icons/ti"
import { MdHeadset } from "react-icons/md";
import { MdPayment } from "react-icons/md"
import { MdDelete } from "react-icons/md"
import Image from "next/image";  
import React, { useContext, useEffect, useReducer, useState } from 'react';
import Link from "next/link";



 const  productData = [
            {
              id:1,
              price:500,
              description:"Best Playstation",
              
            
            },  
             
        ]




    export default function Cart(){
                    const[product,setProduct]=useState(productData);
                    const[cart,setCart]= useState([]);
                    const[quantity,setQuantity]= useState(0);
                    const[total,setTotal]= useState(0);
                    const[price,setPrice]= useState(500);
                    const[show,setShow]=useState(false)
                    
                    


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
                            const clearEverything = ()=>{
                                setClear(true)
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
        <Link href ="./Opay"><div className="">
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
            <p className="text-xl text-red-500">{quantity}</p>
            <MdOutlineShoppingCart id="cart" className="w-10 h-10" />
        </div>
        </div>

            <div className="grid grid-cols-2 px-30 py-10">
            <div className="">
               <div className="flex gap-10 pl-10"> 
                <p className="text-2xl font-bold mb-5">Shopping Cart</p>
                <p className="text-2xl font-bold mb-5">Items:</p> 
                 <MdDelete onClick={()=> setShow(!show)} className="text-3xl font-bold mb-5" />
                  {show? "":""}
                </div>
                
                <div className="grid grid-cols-4 text-sm">
                    <p className="mb-5">description</p>
                    <p className="mb-5">quantity</p>
                    <p className="mb-5">price</p>
                    <p className="mb-5">totalPrice</p>
                </div>
                   {show && ( 
                <ul className="flex text-sm rounded-md shadow-md mb-5 py-5 w-[650px]">
                  <li><Image
                    src="/dell1.jpg"
                    alt="photo"
                    width={60}
                    height={20}
                    />
                    <p>Dell Latitude</p>
                  </li>
                  
                    <li className="flex gap-5 ml-20 text-sm">
                    <p >{quantity}</p>
                    <p className="pl-25">{price}</p>
                    <p className="pl-25"> {price * quantity} </p>
                    <MdDelete onClick={()=> removeFromCart(product.id)} className="text-xl font-bold ml-4" />
                    <div className="ml-5 text-xl">
                   <button className="w-5 text-lg" onClick={()=>increaseQuantity(product.id)}>+</button>
                    <button className="w-5 text-lg" onClick={()=>decreasingQuantity(product.id)}>-</button>

                    </div>
                     </li>
                      
                </ul>
                )}
            </div>
               

            <div className="pl-16 ml-10">
                <p className="text-2xl font-bold mb-5">Cart Summary</p>
                <p className="mb-5">Items</p>
                <p className="mb-5">Subtotal</p>
                <p className="mb-5">Shipping</p>
               <div className="flex gap-5">
                 <p className="mb-5">Promo Code</p>
                <TextField
                type="text"
                placeholder="Enter code"
                id="code"
                size="small"
                className="w-50 h-10"
                />
                </div>
                <p className="mb-5">Total Cost: ${isNaN (total) ? 0 : total} </p>
                  <button className="bg-red-600 text-white text-lg rounded-md w-70 h-10" >CHECKOUT</button>
            </div>
          
            </div>
            
        </main>
    )
}