import {logo} from "../assets";
import styles from "../style";
import {footerLinks, socialMedia} from '../constants';

const Footer = () =>(
  <section id="footer" className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      
      <div className="flex-1 flex flex-col mr-10 items-center justify-center">

        <img src={logo} alt="Hoobank" className="w-[266px] h-[72px] object-contain"/>
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className={`flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-10 mt-0`}>
        {footerLinks.map((footerLink)=>(
          <div key={footerLink.key} className='flex fle-col ss:my-0 my-4 min-w-[150px] relative'>
            <h4 className="text-white font-poppins font-medium text-[18px] leading-[24px] absolute -top-5">
              {footerLink.title}
            </h4>
            <ul className="list-none mt-4 ">
              {footerLink.links.map((link, index)=>(

                <li key={link.name} className='font-poppins font-normal text-[16px] text-dimWhite hover:text-secondary cursor-pointer mb-4'>
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
      <p className="text-white font-poppins font-normal text-[18px] text-center">
        2021 HooBank. All Rights Reserved
      </p>
      <div className="flex flex-row md:mt-0 mt-6">

        {socialMedia.map((icon, index)=>(
          <img key={socialMedia.id} src={icon.icon} alt="icon" className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== icon.length-1 ? 'mr-6' : 'mr-0'}`}/>
        ))}

      </div>
    </div>
  </section>
  )


export default Footer