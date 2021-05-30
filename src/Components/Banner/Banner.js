import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_KEY,imageUrl} from  '../../Constants/constants'
 

function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data.results.sort(function (a, b) { return 0.5 - Math.random() })[0])       
            setMovie(response.data.results.sort(function (a, b) { return 0.5 - Math.random() })[0])
            
        })
        
       
    }, [])
    return (
       
        
        <div 
        style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
        className='banner'>
            <div className='content'>
                <h1 className='title'>{movie ? movie.title : ""}</h1>
                <div className='banner-buttons'>
                    <button className='buttons'>play</button>
                    <button className='buttons'>My list</button>

                </div>
                <h1 className='description'>{movie ? movie.overview : ""}</h1>

                <div className="fade-bottom">
                    
                </div>

            </div>
            
        </div>
    )
}

export default Banner
