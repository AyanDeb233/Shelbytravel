import React, {useEffect} from 'react'
import "./main.css"
import {HiOutlineLocationMarker, HiOutlineClipboardCheck} from 'react-icons/hi'
import img from '../../Assets/img (1).jpg'
import img2 from '../../Assets/img (2).jpg'
import img3 from '../../Assets/img (3).jpg'
import img4 from '../../Assets/img (4).jpg'
import img5 from '../../Assets/img (5).jpg'
import img6 from '../../Assets/img (6).jpg'
import img7 from '../../Assets/img (7).jpg'
import img8 from '../../Assets/img (8).jpg'
import img9 from '../../Assets/img (9).jpg'

import Aos from "aos"
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Sundarbans',
    location: 'Bangladesh',
    grade: 'CULTURAL NATURAL',
    fees: '4000 TK',
    description: 'The Sundarbans is the largest mangrove forest in the world, home to the Royal Bengal Tiger and rich biodiversity.'
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Coxs Bazar',
    location: 'Bangladesh',
    grade: 'BEACH RELAX',
    fees: '4500 Tk',
    description: "Famous for having the longest unbroken sea beach in the world, Cox's Bazar offers mesmerizing sunsets, beach sports."
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Kuakata',
    location: 'Bangladesh',
    grade: 'BEACH RELAX',
    fees: '3000 TK',
    description: "Known as the 'Daughter of the Sea,' Kuakata offers panoramic views of both sunrise and sunset over the ocean. Perfect for a peaceful getaway.  "
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Paharpur',
    location: 'Bangladesh',
    grade: 'CULTURAL HISTORY',
    fees: '3500 TK',
    description: 'Paharpur houses the ruins of an ancient Buddhist monastery, a UNESCO World Heritage Site.A must-visit for history .'
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Saint Martin Island',
    location: 'Bangladesh',
    grade: 'BEACH RELAX',
    fees: '5000 TK',
    description: 'The only coral island in Bangladesh, Saint Martin offers crystal-clear waters, vibrant marine life, and the perfect tropical escape.' 
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Bandarban',
    location: 'Bangladesh',
    grade: 'ADVENTURE NATURE',
    fees: '2500 TK',
    description: 'Explore the breathtaking hills, waterfalls, and tribal villages of Bandarban. A perfect destination for hiking and nature exploration.'
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Rangamati',
    location: 'Bangladesh',
    grade: 'CULTURAL ADVENTURE',
    fees: '2000 TK',
    description: 'Nestled among the hills, Rangamati offers stunning views of Kaptai Lake, tribal culture, and adventurous boat rides.'
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Sajek Valley',
    location: 'Bangladesh',
    grade: 'NATURE RELAX',
    fees: '4000 Tk',
    description: 'Sajek Valley, known as the "Queen of Hills," is a stunning spot in the Chittagong Hill Tracts. With green hills, peaceful views.'
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Srimangal',
    location: 'Bangladesh',
    grade: 'CULTURAL RELAX',
    fees: '4000 Tk',
    description: 'Known as the Tea Capital of Bangladesh, Srimangal boasts lush  and exotic wildlife. A perfect retreat for nature lovers.'
  },
]

export const Main = () => {

    // use react hooks to add a scroll animation
    useEffect(()=>{
      Aos.init({duration: 2000})
    }, [])
  

  return (
    <section className='main container section'>

      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">Most visited destinations</h3>
      </div>

      <div className="secContent grid">

        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description })=>{
            return ( 
              <div key={id} data-aos="fade-up" className="singleDestination">

                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon' />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>


                </div>

              </div>
            )
          })
        }
        
      </div>


    </section>
  )
}

export default Main;