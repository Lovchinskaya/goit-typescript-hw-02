import { useEffect, useState } from 'react'
// import axios from 'axios';
// import './App.css'
import SearchBar from '../SearchBar/SearchBar'
import { fetchImages } from '../ImageService/ImageService';



export default function App() {
const [image, setImage] = useState ();
   
  // useEffect(() => {
  //   console.log(image)
  //   async function getImages() {
  //     try {
  //        const data = await fetchImages()
  //        console.log(data)
  //     }
  //     catch (error){

  //     }
  //   }
  //    getImages();
  // }, [image]);

const handleSearch = async (topic) => {
  try {
           const data = await fetchImages(topic)
           console.log(data)
        }
        catch (error){
  
        }
}


  return (
 <>
 <SearchBar onSearch={handleSearch}/>
 </>
    
  )
}


