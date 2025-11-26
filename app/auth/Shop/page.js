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


      const  productData = [
            {
              id:1,
              price:500,
              description:"Best Playstation",
            
            },  
             
        ]


        export default function Shop (){
            const[product,setProduct]=useState(productData);
            const[cart,setCart]= useState([]);
            const[quantity,setQuantity]= useState(0);
            const[total,setTotal]= useState(0);

                    useEffect(()=>{
                        //first calculate total price in cart
                        const totalPrice = cart.reduce((accumilator,currentItem)=>{
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

                    const removeFromCart = ()=>{
                        const newCart = cart.filter((item)=>{
                            return item.id !==id;
                        })
                        setCart(newCart);
                        alert("product removed successfully")
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
               <Link href="./Opay"> <div className="">
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
                    <IoSearchOutline className="w-5 h-5 text-gray-800 pt-3" />
                      <p className="text-xl text-red-500">{quantity}</p>
                    <MdOutlineShoppingCart className="w-10 h-10 " />
                </div>
             </div>

             <div className="bg-[url(/ipcross.jpg)] h-screen  bg-right bg-no-repeat hover:scale-105">
             <p className="text-purple-500 text-6xl semifont-bold py-3 px-40 hover:scale-105"><span className="text-xl">Beats</span>
                           <br/>Solo Branded<br/>
               <span className="text-purple-300 text-5xl">GADGETS</span></p>
               
                   <div className=" w-[250px] h-[200px] ml-100">
                    <Image className="hover:scale-105"
                    src="/iphonewatch.jpg"
                    alt="phone"
                    width={300}
                    height={300}
                    /></div>
                   <Link href="./category"><div className="ml-40 mt-40">
                   <p className="text-2xl text-white bg-purple-500 rounded-full shadow-md py-1 pl-4 semifont-bold
                                 w-[230px] h-[50px] hover:bg-purple-300 hover:text-white">Shop by Category</p>
                   </div></Link> 
   
             </div>

             <div className="w-full bg-purple-50 py-5 mt-5">
                <p className="text-3xl semifont-bold text-purple-500 text-center  py-1">Gadgets Brands</p>
                <div className="grid grid-cols-4 px-2 py-10 gap-5">
                <div className="rounded-md shadow-lg w-[330px] h-[350px] hover:shadow-indigo-500 hover:bg-amber-50">
                    <Image className="rounded-md shadow-lg h-[300px] hover:scale-105"
                    src="/dell1.jpg"
                    alt="laptop"
                    width={500}
                    height={500}
                    />
                    <div className="text-red-500"><p>Best laptop</p>
                    <p>$300</p></div>
                </div>

                <div className="rounded-md shadow-lg w-[330px] h-[350px]shadow-indigo-500 hover:scale-105">
                    <Image className="rounded-md shadow-lg h-[300px]"
                    src="/iphon2.jpg"
                    alt="iphone"
                    width={500}
                    height={500}
                    />
                    <div className="text-red-500"><p>Best Iphone</p>
                    <p>$300</p></div>
                </div>

                <div className="rounded-md shadow-lg w-[330px] h-[350px] shadow-indigo-500 hover:translate-y-6">
                    <Image className="rounded-md shadow-lg h-[300px]"
                    src="/ipod1.jpg"
                    alt="headset"
                    width={500}
                    height={500}
                    />
                    <div className="text-red-500"><p>Best Ipod</p>
                    <p>$300</p></div>
                </div>

                <div className="rounded-md shadow-lg w-[330px] h-[350px] hover:shadow-indigo-500 hover:scale-105">
                    <Image className="rounded-md shadow-lg h-[300px]"
                    src="/flash5.jpg"
                    alt="flash"
                    width={500}
                    height={500}
                    />
                    <div className="text-red-500"><p>Best Flash</p>
                    <p>$300</p></div>
                </div>

                <div className="rounded-md shadow-lg w-[330px] h-[350px] hover:shadow-indigo-500 hover:scale-105">
                    <Image className="rounded-md shadow-lg h-[300px]"
                    src="/ps2.jpg"
                    alt="ps5"
                    width={500}
                    height={500}
                    />
                    <div className="text-red-500"><p>Best Playstation 5</p>
                    <p>$300</p></div>
                </div>

                <div className="rounded-md shadow-lg w-[330px] h-[350px] hover:shadow-indigo-500 hover:translate-y-6">
                    <Image className="rounded-md shadow-lg h-[300px]"
                    src="/jbl2.jpg"
                    alt="speaker"
                    width={500}
                    height={500}
                    />
                    <div className="text-red-500"><p>Best Speaker</p>
                    <p>$300</p></div>
                </div>

                <div className="rounded-md shadow-lg w-[330px] h-[350px] hover:shadow-indigo-500 hover:scale-105">
                    <Image className="rounded-md shadow-lg h-[300px]"
                    src="/headset1.jpg"
                    alt="headset"
                    width={500}
                    height={500}
                    />
                    <div className="text-red-500"><p>Best HeadPhone</p>
                    <p>$300</p></div>
                </div>

                <div className="rounded-md shadow-lg w-[330px] h-[350px] hover:shadow-indigo-500 hover:scale-105">
                    <Image className="rounded-md shadow-lg h-[300px]"
                    src="/imagesbaby.jpg"
                    alt="speaker"
                    width={500}
                    height={500}
                    />
                    <div className="text-red-500"><p>Best EyeConsole</p>
                    <p>$300</p></div>
                </div>
                </div>
             </div>

             <div className="grid grid-cols-4 px-10 py-10">

               <div className="flex h-10"> 
                <FaCarSide  className="text-purple-500 text-3xl"/>
                <p className="pl-3">Free Shipping on Order</p>
               </div>

               <div className="flex">
                 <TiTick  className="text-purple-500 text-3xl" />
                   <p className="pl-3">Free Shipping on Order</p>
                 </div>
                <div className="flex">
                    <MdHeadset  className="text-purple-500 text-3xl" />
                      <p className="pl-3">Free Shipping on Order</p>
                </div>
               <div className="flex">
                <MdPayment  className="text-purple-500 text-3xl" /> 
                  <p className="pl-3">Free Shipping on Order</p>
                </div>
             </div>

             <div className="w-full bg-purple-500 py-10 mb-2">
              <div className="bg-white text-2xl w-[1200px] h-[300px] hover:scale-105 rounded-md
                                 shadow-md mb-2 mx-10 grid grid-cols-1 md:grid-cols-4 py-5 text-center gap-10 ">
                <div className="">
                    <p className="text-5xl text-purple-500 hover:scale-105"><span className="text-xl">
                        30% OFF</span> <br/> FINE SMILE <br/><span className="text-xl"> 10 oct to 20 oct</span></p>
                </div>

                <div>
                    <Image
                    src="/headset2.jpg"
                    alt=""
                    width={300}
                    height={250}
                    className="w-[300px] h-[250px] hover:shadow-indigo-500 hover:scale-105"
                    
                    />
                </div>
                <div className="">
                    <p className="text-4xl text-purple-500 hover:scale-105 py-5">Air Solo bass <br/>winter sales</p>

                 </div>
                 
               </div>
                                                    
             </div>

             <div className="bg-purple-50 py-5 mt-5 mb-5 h-auto">
                
                <p className="text-3xl semifont-bold text-purple-500 text-center  py-1">Best Selling Products</p>
                 {productData.map((item)=>(
                <div key={item.id} className="grid grid-cols-3 py-5 gap-5 px-25">     
                <div className="rounded-md shadow-lg w-[330px] h-[300px] hover:bg-amber-50 mb-8">
                    <Image className="rounded-md shadow-lg h-[300px] shadow-indigo-500 hover:scale-105"
                    src="/dell1.jpg"
                    alt="laptop"
                    width={500}
                    height={500}
                    />
                    <div className="text-red-500"><p>Best laptop</p>
                    <p>${item.price}</p></div>
                    <button className="pl-10 pt-2 rounded-md shadow-md w-45 h-10
                     bg-purple-500 text-white hover:scale-105">Add to Cart</button>
      
                </div>

                <div className="rounded-md shadow-lg w-[330px] h-[300px] hover:shadow-indigo-500 hover:scale-105 mb-8">
                    <Image className="rounded-md shadow-lg h-[300px]"
                    src="/iphon2.jpg"
                    alt="iphone"
                    width={500}
                    height={500}
                    />
                     <div className="text-red-500"><p>Best Phone</p>
                    <p>${item.price}</p></div>
                    <button className="pl-10 pt-2 rounded-md shadow-md w-45 h-10
                     bg-purple-500 text-white hover:scale-105">Add to Cart</button>
      
                </div>


                <div className="rounded-md shadow-lg w-[330px] h-[300px] hover:shadow-indigo-500 hover:scale-105 mb-8">
                    <Image className="rounded-md shadow-lg h-[300px]"
                    src="/ps2.jpg"
                    alt="ps5"
                    width={500}
                    height={500}
                    />
                     <div className="text-red-500"><p>Best Playstation</p>
                    <p>${item.price}</p></div>
                   <Link href="./product"> <button className="pl-10 pt-2 rounded-md shadow-md w-45 h-10 
                    bg-purple-500 text-white hover:scale-105">Add to Cart</button></Link>
                </div>
                </div>
                 ))}
             </div>

             
             <div className=" bg-purple-100 mb-1 ">
               <div className="text-center pt-20">
                 <h1 className="text-3xl font-bold text-purple-500 mb-3">Sustaianability</h1>
                <p className="text-xl text-purple-300">Makes a difference Beyound Purchasing</p>
              </div>
             <div className="grid grid-cols-3 gap-8 pt-10 px-2">
 
                <div className="hover:scale-105 rounded-md shadow-lg shadow-indigo-500">
                    <Image
                    src="/allpod.jpg"
                    alt="photo"
                    width={500}
                    height={10}
                    className="w-110 h-80"
                    />
                    <div className="text-center text-purple-500">
                    <h1 className="text-2xl">Up to 40% OFF All Phone<br/> Accessories!</h1>
                    <p className="text=xl">Level up your phone game with premium <br/> cases, chargers, 
                     earbuds & more. Limited time <br/> offer shop now before it’s gone!
                     </p>
                     </div>
                </div>

                 <div className="bg-purple-500 text-white text-center justify-center items-center
                  w-110 h-80 hover:-translate-y-3 rounded-md shadow-lg shadow-indigo-500">
                    <div>
                  <p className="text-3xl font-bold pt-10 mb-3">Thriving in An Economic <br/> Slowdown: Putting Your<br/> Business First</p>
                  <p className="text-xl ">
                    With about 17.4 million enterprises, it is no<br/> denial that SMEs
                    account forms <br/>approximately 50% and 90% of both<br/> industrial 
                    jobs and the manufacturing<br/> sector respectively.
                    </p>
                    </div>

                    <div className="text-center text-purple-500">
                    <h1 className="text-2xl pt-5">Up to 40% OFF All Phone<br/> Accessories!</h1>
                    <p className="text=xl">Level up your phone game with premium <br/> cases, chargers, 
                     earbuds & more. Limited time <br/> offer shop now before it’s gone!
                     </p>
                     </div>

                </div>

                <div className="hover:scale-105 rounded-md shadow-lg shadow-indigo-500">
                 <Image
                    src="/bg4.jpg"
                    alt="photo"
                    width={500}
                    height={10}
                    className="w-110 h-80"
                    />
                    <div className="text-center text-purple-500">
                    <h1 className="text-2xl">Up to 40% OFF All Phone<br/> Accessories!</h1>
                    <p className="text=xl">Level up your phone game with premium <br/> cases, chargers, 
                        earbuds & more. Limited time <br/> offer shop now before it’s gone!
                    </p>
                    </div>
                </div>
                
                 </div>
             </div>

             <div className="bg-purple-50 py-5 mt-5 mb-5 h-auto">
                
                <p className="text-3xl semifont-bold text-purple-500 text-center  py-1">Best Selling Products</p>
                <div className="grid grid-cols-3 gap-2">
                    {productData.map(item =>(
                        
                        <div key={item.id}
                        className="h-50"><p>${item.price} money</p>
                     </div>
                   ))}
                    
                    
                </div>

                </div>


        </main>
    )
}