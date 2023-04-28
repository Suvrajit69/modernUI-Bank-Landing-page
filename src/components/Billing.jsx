// import React from 'react';
import {apple, bill, google} from '../assets'
import styles, {layout} from '../style'

const Billing = () => {
  return (
    <section id='product' className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse} relative`}>
        <img src={bill} alt="billing" className='w-full h-full  z-[5]' />

        <div className='absolute z-[3] left-1/4 top-0 w-1/2 h-2/4 rounded-full white__gradient'/>

        <div className='absolute z-[0] left-1/4 bottom-0 w-1/2 h-2/4 rounded-full pink__gradient'/>
      </div>

      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>Easily controll your billing & <br className='sm:block hidden'/>
          invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas vel modi accusamus velit totam. Cumque praesentium recusandae ad, tempora corporis cum sint natus porro odio, ab deleniti, quas animi vero!</p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt="apple_store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
          <img src={google} alt="google_pay" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
        </div>
      </div>
    </section>
  )
}

export default Billing