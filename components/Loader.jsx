 import React from 'react'
 import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


 function Loader() {
   return (
    <Skeleton count={10}></Skeleton>
   )
 }
 
 export default Loader
 