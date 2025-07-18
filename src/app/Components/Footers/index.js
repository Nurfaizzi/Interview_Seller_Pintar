import React from 'react'
import Image from "next/image";
const Footers = () => {
  return (
   <div className=" bg-cover">
         <div className="mx-auto max-w-9xl px-2 sm:px-6 lg:px-8 bg-blue-800 lg:h-10 xl:h-10 md:h-10 sm:h-20 ">
           <div className="relative flex items-center justify-center mx-auto sm:flex-col sm:flex ">
             <div className="flex flex-1 justify-center mt-2 sm:items-stretch ">
               <div className="lg flex shrink-0 items-center gap-2 justify-center">
                 <Image
                                className=" "
                                src="/vectortwo.png"
                                width={20}
                                height={20}
                                alt="Pictures of the author"
                              />
                 <h1 className="text-white text-center items-center flex">Logoipsum</h1>
                 <p className='text-white'>@2025 Blog Genzet. All Right reserved</p>
               </div>
             </div>
           </div>
         </div>
       </div>
  )
}

export default Footers