import {useState} from 'react'
import Navbar from '../Navbar'
import {AiOutlineSearch} from 'react-icons/ai'
import './home.css'
import Banner  from '../banner'
import {useDispatch,useSelector} from 'react-redux'
import movieActions from '../admin/redux/actions'

import Movie from '../movie'
import { useEffect } from 'react'
import userActions from '../login/redux/actions'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
const Home = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state?.auth?.currentUser?.user?.user_id);
   const [show,setShow ] = useState(false)
  const [filteredData,setFilteredData] = useState()

   const movieList = useSelector((state) => state.moviedetails.Details)
   const GenreList = useSelector((state) => state.moviedetails.Genre)
   const LanguageList = useSelector((state) => state.moviedetails.Language)
    const [name,setName] = useState('')
  const moviename = (e) => {
         

         const text =  e.target.value
         setName(text)
         console.log(text)
        const data =    movieList.filter(data => (data.name).toLowerCase().includes(text) )
      
                setFilteredData( data)
  }

    useEffect(() => {
        const currentuserid = {
            userid:currentUser
        }
        console.log(currentuserid)
        dispatch(movieActions.getdetails())
        dispatch(userActions.getCurrentUser())
        dispatch(movieActions.getGenreDetails())
        dispatch(movieActions.getLanguageDetails())
        dispatch(movieActions.getRecommendDetails(currentuserid))
      }, [])

      const showSearchBar = () => {
          setShow(!show)

      }

     
     
     console.log(filteredData)
     
     
    return (
        <>
         <Navbar />
        <div className="home_container">
            <div className="sidebar">
                <div className="search_icon">
                    <span>
                   <AiOutlineSearch onClick={showSearchBar} size="1.5em"  color="#fff"/>
                   </span>
                </div>
            </div>
            <div className="movie_container">

                   <Banner />
                   
                   {show ?
                   <div className="search_bar">
                   <input onChange={moviename} placeholder="search movies here" type="text"    />
                   </div>
                   :
                   null
}


<div className="movie_container_box">
<div className="movie_search_box">

{
    
name?.length > 0 ?
filteredData?.length > 0 ?

filteredData?.map((data,i) => (
    
         
    
           
          
             
         <Link className="link" to={`/movie-details/${data.name}/${data.movie_id}`}>
            <div key={i}  className="movie_box">
                <div className="movie_image">
                    <img src={data.image} alt="movie_image" />
                </div>
                <div className="movie_des">
                    <div className="movie_details">
                    <div className="movie_name">
                        <span>{data.name}</span>
                    </div>
                    {GenreList.filter((genre) => genre.genre_id == data.genre).map((data) => (

                    <div className="movie_genre">
                        <span>{data.genre}</span>
                    </div>
                    ))}

                    </div>
                </div>
            </div>
            </Link>
           
         
           
           
        
            
        
          
       
          ))
            
          :
          <Typography sx={{m:2}}>no search found</Typography> 
:
null
}
                    </div> 
          </div>
                    
               <Movie />
              
                 
                 

            </div>
        </div>
    </>
    )
}

export default Home;