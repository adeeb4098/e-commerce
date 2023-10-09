import React from 'react'
import MainCarosel from '../../HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../../HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../../../data/Men/men_kurta'

const HomePage = () => {
  return (
    <div>
        <MainCarosel />
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
           <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"}/>
           <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shoes"}/>
           <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shirt"}/>
           <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Dress"}/>
           <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Saree"}/>
           <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Sandals"}/>
        </div>
    </div>
  )
}

export default HomePage