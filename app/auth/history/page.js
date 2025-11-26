  "use client"
import { db } from "@/config/firebase.config";
import { collection,  getDocs, query, where } from "firebase/firestore";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function BookHistory () {
      const {data: session} = useSession();
      const [profileData,setProfileData] = useState(null);

       useEffect(()=>{
          const fetchProfile =async ()=>{
             try {
               const q = query(collection(db, "profileDetails"),
                       where("user", "==", session?.user?.id)
                      );
                      const onSnap = await getDocs(q);
                      if (!onSnap.empty) {
                        const docData = onSnap.docs[0];
                        setProfileData({id: docData.id,...docData.data()});
                      }else {
                        console.log("profile not found");
                      }
             }
             catch (errors) {
                 console.error("Error fetching profile data", errors);
             }
          }
          fetchProfile();
       },[session])
       
      
    return (
        <main className="min-h-screen flex justify-center py-5 md:py-6 md:px-12 lg:py-8 lg:px-16">
            <div className="w-full md:w-[350px] flex flex-col rounded-md shadow-md px-4 md:shadow-indigo-200 ">
                <div>
                    <h1 className="text-center text-xl font-semibold text-gray-800 mb-8">Customer Profile</h1>
                    <div className="mt-2 flex justify-center gap-6 border-b border-gray-300 mb-2 ">
                        <Image
                         width={80}
                         height={80}
                         alt="profile-image"
                         src="/man.jpg"
                         className="w-20 h-20 rounded-full "
                        />
                        <div>
                           <p className="text-sm text-gray-800  "> {session?.user?.name.toUpperCase()} </p> 
                           <p className="text-xs text-gray-600">{session?.user?.email} </p>
                           <p className="text-center text-xs text-indigo-400">Tier 1</p>
                        </div>
                    </div>
                    <div>
                       <p className="text-center text-lg ">Other Informations</p> 
                       <div className="flex justify-between mb-3">
                           <p className="text-gray-800">FullName</p>
                           <p className="text-gray-400">{profileData?.fullname} </p>
                       </div> 
                       <div className="flex justify-between mb-3">
                           <p className="text-gray-800">BVN</p>
                           <p className="text-gray-400">{profileData?.bvn}</p>
                       </div>
                       <div className="flex justify-between mb-3">
                           <p className="text-gray-800">NIN</p>
                           <p className="text-gray-400">{profileData?.nin}</p>
                       </div>
                       <div className="flex justify-between mb-3">
                           <p className="text-gray-800">Gender</p>
                           <p className="text-gray-400">{profileData?.gender}</p>
                       </div>
                       <div className="flex justify-between mb-3">
                           <p className="text-gray-800">Date of birth</p>
                           <p className="text-gray-400">{profileData?.dob}</p>
                       </div>
                       <div className="flex justify-between mb-3">
                           <p className="text-gray-800">Phone Number</p>
                           <p className="text-gray-400">{profileData?.phone}</p>
                       </div>
                       <div className="flex justify-between mb-3">
                           <p className="text-gray-800">Address</p>
                           <p className="text-gray-400">{profileData?.address} </p>
                       </div>
                       <div className="flex justify-between mb-3">
                           <p className="text-gray-800">ChECKIN</p>
                           <p className="text-gray-400">{profileData?.checkin} </p>
                       </div>
                        <div className="flex justify-between mb-3">
                           <p className="text-gray-800">ChECKOUT</p>
                           <p className="text-gray-400">{profileData?.checkout} </p>
                       </div>
                    </div>
                     <form >
                        <button onClick={()=>{ signOut()}} type="submit" className="w-[100px] h-10 bg-red-600 text-white rounded-md shadow-md cursor-pointer ">Logout</button>
                    </form>
                </div>
               

            </div>

        </main>
    )
}