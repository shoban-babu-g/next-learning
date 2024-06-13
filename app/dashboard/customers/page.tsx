"use client"
import Image from "next/image";
import styles from '../../ui/home.module.css';
import { useEffect, useState } from "react";

const Page = () => {
  const [data, setData] = useState([
    {
        name:"image",
        image:"amy-burns.png"
    }
  ]);
  const [listData, setListData] = useState([]);

  useEffect(()=>{
    let arr:any = [];
    for(let i=2001;i<=2040;i++){
      arr = [...arr,i]
    }
   setListData(arr);
  },[]);
  return (
    <div>
      {
        data?.map((data,i)=>(
          <div key={i}>
            <p>{data?.name} - {data?.image}</p>
            <Image src={"/customers/"+data?.image} alt="" width={100} height={50}/>
          </div>
        ))
      }
        {/* <Image src={CareerGrowth} alt=""/> */}
        <button className={styles.btn_img}>Previous</button>
        <button className={styles.btn_img}>Next</button>

        <div className={styles.year_banner}>
          {listData?.map((data,i)=>(
            <div className={styles.year_block} key={i}>{data}</div>
          ))}
        </div>
    </div>
  )
};

export default Page;