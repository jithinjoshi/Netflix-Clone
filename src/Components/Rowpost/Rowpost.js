import React,{useEffect,useState} from 'react'
import './Rowpost.css'
import axios  from '../../axios'
import {imageUrl} from '../../Constants/constants'



function Rowpost(props) {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        axios.get(props.urls).then((response)=>{
            console.log(response.data);
            setMovie(response.data.results)
        })

       
    }, [])
    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
              {
                  movie.map((obj)=>{
                      return(
                        <img className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
                      )
                  })
              }
                
            </div>

            
        </div>
    )
}

export default Rowpost
