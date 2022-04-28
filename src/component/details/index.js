import * as React from 'react';
import Navbar from "../Navbar";
import './details.css'
import { TextField, Typography } from "@mui/material";
import {AiFillStar} from 'react-icons/ai'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import "video-react/dist/video-react.css";
import { Player } from 'video-react';
import ReactPlayer from 'react-player'
import BeautyStars from 'beauty-stars';
import { Link, useParams } from 'react-router-dom';
import movieActions from '../admin/redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import userActions from '../register/redux/actions'
import actions from '../admin/redux/actions';
import loginactions from '../login/redux/actions'
const Details = () => {
    const [value, setValue] = React.useState('1');
    const dispatch = useDispatch()


  const [rating,setRating] = React.useState();
  const [comment,setComment] = React.useState();
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const {id,name} = useParams()
 
    const currentUser = useSelector((state) => state?.auth?.currentUser?.user?.user_id);

 
    const movie = {
        moviename:name
    }
    
    React.useEffect(() => {
        dispatch(movieActions.getdetails())
        dispatch(movieActions.getGenreDetails())
        dispatch(userActions.getdetails())
        dispatch(movieActions.getRatingDetails())
        dispatch(loginactions.getCurrentUser())
        dispatch(movieActions.getUserRecommendDetails(movie))
     
     
     
         },[name])
    const movieList = useSelector((state) => state.moviedetails.Details)
    const GenreList = useSelector((state) => state.moviedetails.Genre)
    const LanguageList = useSelector((state) => state.moviedetails.Language)
    const RatingList = useSelector((state) => state.moviedetails.Rating)
    const MovieRecommendedList = useSelector((state) => state.moviedetails.UserRecommend)
  
    const userList = useSelector((state) => state.register.user)
    

const handleSubmit = () => {
    const data = {
        rating:rating,
        comment,
        movie:id,
        user:currentUser,
    }
    
    dispatch(actions.sendRatingDetails(data))
}

    return (
        <>
        
        <div className="details_page">
        <Navbar />
        {movieList.filter((data) => data.movie_id == id ) .map((data) => (

        
        <div className="details_container">
            <div className="image_container">
                <img src={data.image} alt="movie-image" />
            </div>
            <div className="movie_details_container">
                <div className="movie_details_title">
                    <Typography sx={{color:'#fff',fontSize:'20px',fontWeight:500}}>{data.name}</Typography>
                 
                      
                    <Typography sx={{color:'#fff',display:'flex',alignItems:'center', fontSize:'20px',fontWeight:500}}>{data.rating}<AiFillStar className="star-emoji" color="orange" /></Typography>
                    

                </div>
                <div className="movie_min_details">
                    <Typography sx={{color:'#626262',mt:1,fontSize:'15px',fontFamily:'lato'}}>{data.releasedAt} | {data.movieDuration} | {data.ratedfor}+</Typography>
                </div>
                <Box sx={{ width: '100%', typography: 'body1',mt:2 }}>
                 <TabContext value={value}>
                 <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                 <TabList onChange={handleChange} aria-label="lab API tabs example">
                   <Tab sx={{color: "#626262"}} label="OVERVIEW" value="1" />
                  <Tab   sx={{color: "#626262"}} label="TRAILER" value="2" />
                 <Tab   sx={{color: "#626262"}} label="REVIEW AND MORE" value="3" />
                     </TabList>
                     </Box>
                     <TabPanel value="1">
                <div className="description">
                    <Typography sx={{color:'#fff',fontFamily:'lato',fontWeight:400,}}>{data.description}</Typography>
                </div>
                <div className="extra_details">
                    <div className="additional_detaills">
                     <Typography sx={{flex:0.3,fontFamily:'lato',fontSize:'18px',color:'#626262'}}>Starring</Typography>
                     <Typography sx={{flex:0.55, color:'#fff',fontFamily:'lato',fontSize:'18px'}}>{data.actors}</Typography>
                    </div>
                    <div className="additional_detaills">
                     <Typography sx={{flex:0.3,fontFamily:'lato',fontSize:'18px',color:'#626262'}}>Directed By</Typography>
                     <Typography sx={{flex:0.55, color:'#fff',fontFamily:'lato',fontSize:'18px'}}>{data.director}</Typography>
                    </div>
                    <div className="additional_detaills">
                     <Typography sx={{flex:0.3,fontFamily:'lato',fontSize:'18px',color:'#626262'}}>Genre</Typography>
                     {GenreList.filter((genre) => genre.genre_id == data.genre).map((genre) => (
                         
                     <Typography sx={{flex:0.55, color:'#fff',fontFamily:'lato',fontSize:'18px'}}>{genre.genre}</Typography>

                     ))}
                    </div>
                </div>
                     </TabPanel>
             <TabPanel value="2">
                 <div className="trailer_section">
                     <ReactPlayer width="100%" height="400px    " url={data.video} />
                           

                                
                
                 </div>
             </TabPanel>
                 <TabPanel value="3">
                     <div className="review_container">
                         {RatingList.filter((rating) => rating.movie == data.movie_id).map((data) => (
                             
                         <div className="review">
                             <div className="reviewr">
                                 {userList.filter((user) => user.user_id == data.user).map((data) => (

                                  <Typography sx={{color:'#fff',fontFamily:'lato',fontSize:'18px'}}>{data.username}</Typography>
                                 ))}

                                 
                            <div className="Reviewr_rating">
                            {[...Array(data.rating)].map((elementInArray, index) => ( 
                            <Typography><AiFillStar color="orange" /></Typography>
                            ))}
                             
                            </div>
                            </div>
                            <div className="reviewr_comment">
                           <Typography sx={{color:'#fff',fontFamily:'lato',fontWeight:900,fontSize:'15px',mt:1}}>{data.comment} </Typography>
                            </div>
                        </div>

))}
                        </div>
                     <div className="review_input">
                        <Typography sx={{fontFamily:'lato',color:'#fff',fontWeight:600,fontSize:'16px'}}> your review here  </Typography>
                     <TextField 
                     fullWidth
                                id="outlined-multiline-flexible"

                  label="Type message here"
                  multiline
                  sx={{mt:2}}
                  minRows={4}
                  onChange={(e) => setComment(e.target.value)}
                  
                />
 <Box sx={{mt:2,mb:2}}>
        <BeautyStars
        value={rating}
        onChange={(value)=>setRating(value)}
      />
    </Box>
                <div className="submit_review">
                <button onClick={(e) =>handleSubmit(e)}>Submit</button>
                </div>
                     </div>
                 </TabPanel>
                </TabContext>
           </Box>

            </div>
        </div>

        ))}
        <div className="user_recomended">

        <div className="more_movies">
         <Box mt={5} className="movie_container_box">
        <Typography sx={{mb:2,mt:2,color:"#fff",fontWeight:600,fontSize:'32px'}}> More Like This </Typography>
          <div className="movie_list">
    
           
          {movieList.filter((data)=> MovieRecommendedList.includes(data.name)).map((data,i) => (
           
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
           
           
        
            
        
            </div> 
        </Box>
        </div>
        <div className="space"></div>
        </div>
        </div>
    </>
    )
}

export default Details;