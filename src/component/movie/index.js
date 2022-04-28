import './movie.css'
import {useEffect, useState} from 'react'
import Carousel from 'react-elastic-carousel';
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css"
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import movieActions from '../admin/redux/actions'
const Movie = () => {
   

    const movieList = useSelector((state) => state.moviedetails.Details)
    const GenreList = useSelector((state) => state.moviedetails.Genre)
    const LanguageList = useSelector((state) => state.moviedetails.Language)
    const RecommendList = useSelector((state) => state.moviedetails.Recommend)


   
   
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
      ];
      
    return (
    <>
        <div className="movie_container_box">
           <span>All Movie</span>
          <div className="movie_list">
    
          <Carousel breakPoints={breakPoints}> 
            {movieList?.map((data,i) => (
          
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
            
            ))}
           
           </Carousel>
           
        
            
        
            </div> 
        </div>


        <div className="movie_container_box">
        {movieList?.filter((data)  => data.language == 1) &&
           <span>English</span>
           

        }
          <div className="movie_list">
          <Carousel breakPoints={breakPoints}> 
    
           
            {movieList?.filter((data)  => data.language == 1).map((data,i) => (
            
            data.language == 1 ?
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
            :
            <h1>movie comming soon</h1>
           
           
             ))}
           
           </Carousel>
        
            
        
            </div> 
        </div>
     

        <div className="movie_container_box">
             <span>Hindi</span>
          <div className="movie_list">
          <Carousel breakPoints={breakPoints}> 
    
           
            {movieList?.filter((data)  => data.language == 3).map((data,i) => (
            
            data.language == 3 ?
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
           
           :
           null
           
          
             ))}
            </Carousel>
           
        
            
        
            </div> 
        </div>

                    
        <div className="movie_container_box">
           <span>Nepali</span>
          <div className="movie_list">
          <Carousel breakPoints={breakPoints}> 
    
           
            {movieList?.filter((data)  => data.language == 2).map((data,i) => (
            
            data.language == 2 &&
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
      
           
           
             ))}
           </Carousel>
           
        
            
        
            </div> 
        </div>
     

        <div className="movie_container_box">
           <span>Recommend For you</span>
          <div className="movie_list">
          <Carousel breakPoints={breakPoints}> 
    
           
            {movieList?.filter((data)=> RecommendList.includes(data.movie_id)).map((data,i) => (
            
           
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
            
           
             ))}
           
           
        </Carousel>
            
        
            </div> 
        </div>

        

      </> 
        
    )
}

export default Movie;