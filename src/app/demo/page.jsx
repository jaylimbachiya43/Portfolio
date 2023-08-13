import Carousel from '@/screens/carosul';
import React from 'react'
import Img1 from '../../../public/MERN.jpg';
import Img2 from '../../../public/Rahis.jpg';
import Img3 from '../../../public/sahil.jpg';
import Img4 from '../../../public/MERN.jpg';
import Img5 from '../../../public/Rahis.jpg';
import Img6 from '../../../public/sahil.jpg';
import Img7 from '../../../public/MERN.jpg';
import Img8 from '../../../public/Rahis.jpg';
import Img9 from '../../../public/sahil.jpg';
import Img10 from '../../../public/MERN.jpg';
import Img11 from '../../../public/Rahis.jpg';
import Img12 from '../../../public/sahil.jpg';


const images = [
  `${Img1}` ,
  `${Img2}`,
  `${Img3}`,
  `${Img4}` ,
  `${Img5}`,
  `${Img6}`,
  `${Img7}` ,
  `${Img8}`,
  `${Img9}`,
  `${Img10}` ,
  `${Img11}`,
  `${Img12}`,
  // Add more image paths here
];
const Demo = () => {
  return (
    <div className="min-h-screen p-8 bg-white">
    <h1 className="text-4xl font-bold mb-4">Welcome to My Carousel</h1>
    <Carousel images={images} />
  </div>
  )
}

export default Demo