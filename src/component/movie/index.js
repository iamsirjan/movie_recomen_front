import './movie.css'
import {useEffect, useState} from 'react'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import movieActions from '../admin/redux/actions'
const Movie = () => {
   

    const movieList = useSelector((state) => state.moviedetails.Details)
    const GenreList = useSelector((state) => state.moviedetails.Genre)
    const LanguageList = useSelector((state) => state.moviedetails.Language)
    const RecommendList = useSelector((state) => state.moviedetails.Recommend)


   
   
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 4, // optional, default to 1.
         
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

      
    return (
    <>
        <div className="movie_container_box">
           <span>All Movie</span>
          <div className="movie_list">
    
           
            {movieList.map((data,i) => (
             
         <Link className="link" to={`/movie-details/${data.movie_id}`}>
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
           
            ))}
           
           
        
            
        
            </div> 
        </div>


        <div className="movie_container_box">
           <span>English</span>
          <div className="movie_list">
    
           
            {movieList.filter((data)  => data.language == 1).map((data,i) => (
            
            data.language == 1 ?
            <Link className="link" to={`/movie-details/${data.movie_id}`}>
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
            :
            <h1>movie comming soon</h1>
           
           
             ))}
           
           
        
            
        
            </div> 
        </div>
        <div className="movie_container_box">
           <span>Hindi</span>
          <div className="movie_list">
    
           
            {movieList.filter((data)  => data.language == 4).map((data,i) => (
            
            data.language == 4 ?
            <Link className="link" to={`/movie-details/${data.movie_id}`}>
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
            :
            <h1>movie comming soon</h1>
           
           
             ))}
           
           
        
            
        
            </div> 
        </div>

        <div className="movie_container_box">
           <span>Nepali</span>
          <div className="movie_list">
    
           
            {movieList.filter((data)  => data.language == 5).map((data,i) => (
            
            data.language == 5 ?
            <Link className="link" to={`/movie-details/${data.movie_id}`}>
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
            :
            <h1>movie comming soon</h1>
           
           
             ))}
           
           
        
            
        
            </div> 
        </div>

        <div className="movie_container_box">
           <span>Recommend For you</span>
          <div className="movie_list">
    
           
            {movieList.filter((data)=> RecommendList.includes(data.movie_id)).map((data,i) => (
            
           
            <Link className="link" to={`/movie-details/${data.movie_id}`}>
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
            
           
             ))}
           
           
        
            
        
            </div> 
        </div>

        

      </> 
        
    )
}

export default Movie;