import React,{useEffect,useState} from 'react'
import './Rowpost.css'
import axios  from '../../axios'
import {imageUrl,API_KEY} from '../../Constants/constants'
import YouTube from 'react-youtube'




function Rowpost(props) {
    const [movie, setMovie] = useState([])
    const [urls,setUrls]=useState()
    useEffect(() => {
        axios.get(props.urls).then((response)=>{
            console.log(response.data);
            setMovie(response.data.results)
        })

       
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          
          autoplay: 1,
        },
      };
      const handleMovie=(id)=>{
          console.log(id)
          axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
              if(response.data.results.length!==0){
                setUrls(response.data.results[0])
              }
              else{
                  console.log("Array Empty")
              }
          })
      }
    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
              {
                  movie.map((obj)=>{
                      return(
                        <img onClick={()=>handleMovie(obj.id)}  className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
                      )
                  })
              }
                
            </div>
            
   {   urls  &&  <YouTube videoId={urls.key} opts={opts} />}

            
        </div>
    )
}

export default Rowpost
