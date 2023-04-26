import React from 'react';
import { arrowUp } from '../assets';
import styles from '../style';

const GetStarted = () =>(
  <div className={`${styles.flexCenter} w-[140px] h-[140px] bg-blue-gradient rounded-full p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
          <span className='text-gradient'>Get</span>
        </p>
        <img src={arrowUp} alt="arrow" className='w-[23px] h-[23px]'/>
      </div>
      <p className='font-poppins font-medium text-[18px] leading-[23px]'>
        <span className='text-gradient'>Started</span>
      </p>
    </div>
  </div>
)


export default GetStarted