import {feedback} from '../constants'
import styles  from '../style'
import FeedBackCard from './FeedbackCard'

const Testimonials = () => (
  <section id='testimonials' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>

    <div className='absolute z-0 w-[60%] h-1/2 -right-1/2 blue__gradient'/>
    <div className='absolute z-0 w-[60%] h-2/4 -left-1/2 pink__gradient'/>

    <div className='w-full flex items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
      <h1 className={`${styles.heading2}`}>What people are <br className='sm:block hidden' /> saying about us</h1>

      <div className='w-full md:mt-0 mt-6'>
       <p className={`${styles.paragraph} max-w-[450px]`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ipsa voluptate ratione perspiciatis eos, ad, similllitia dicta quod quos! Incidunt corrupti soluta in similique labore.</p>
      </div>
    </div>

    <div className='flex flex-wrap sm:justify-center justify-start w-full feedback-container relative z-[1]'>
      {feedback.map((card)=>(
        <FeedBackCard key={card.id} {...card}/>
      ))}
    </div>
  </section>
)


export default Testimonials