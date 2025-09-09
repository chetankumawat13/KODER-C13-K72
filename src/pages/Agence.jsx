import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Agence = () => {

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  const imageArray = [
    '/img/Carl.jpg',
    '/img/CAMILLE.jpg',
    '/img/ChantalG.jpg',
    '/img/Claire.jpg',
    '/img/HugoJoseph.jpg',
    '/img/joel.jpg',
    '/img/Lawrence.jpg',
    '/img/MAXIME.jpg',
    '/img/MEGGIE.jpg',
    '/img/MEL.jpg',
    '/img/Michele.jpg',
    '/img/MyleneS.jpg',
    '/img/MyleneS.jpg',
    '/img/Olivier.jpg',
    '/img/SophieA.jpg',
  ]

  useGSAP(function(){
    gsap.to(imageDivRef.current,{
      scrollTrigger:{
        trigger:imageDivRef.current,
        start:'top top',
        end:'top -120%',
        pin:true,
        pinSpacing:true,
        pinReparent:true,
        pinType:'transform',
        scrub:true,
        anticipatePin:1,
        invalidateOnRefresh:true,
        onUpdate:(elem) =>{
          let imageIndex  = Math.floor(elem.progress  * imageArray.length);
          if(elem.progress < 1){
            imageIndex = Math.floor(elem.progress  * imageArray.length);
          }else{
            imageIndex = imageArray.length -1
          }
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })

  return (
    <div className='parent'>
      <div id='page1' className='relative py-1'>
          <div ref={imageDivRef} className='h-80 w-60 overflow-hidden rounded-4xl top-60 absolute left-96 '>
              <img ref={imageRef} className='h-full w-full object-cover ' src="/img/Carl.jpg" alt="" />
          </div>
      <div className=' relative font-[f2] text-black'>
        <div  className='mt-[57vh]'>
         <h1 className='text-black text-[20vw] text-center uppercase font-[f2] leading-[17vw] ' >Soixan7e <br />
        Douze</h1>
      </div>
      <div className='pl-[40%] mt-20'>
        <p className='text-5xl '> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
      </div>
      </div>
     </div>
        <div className="section2 h-screen">

        </div>
    </div>
  )
}

export default Agence
