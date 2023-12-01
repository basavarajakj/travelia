'use client';

import Image from "next/image";
import { useEffect, useState } from "react";


const Preloader = () => {
  const [preloader, setPreloader] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setPreloader(true)
    },2000)

    return () => {
      clearInterval(delay)
    }
  }, [])

  return ( 
    <div className={`preloader ${preloader ? 'remove' : '' }`}>
      <div className="preloader-inner">
        <Image
          src="/images/preloader.svg"
          alt="preloader"
          width={50}
          height={50}
          className="img"
        />
      </div>
    </div>
   );
}
 
export default Preloader;
