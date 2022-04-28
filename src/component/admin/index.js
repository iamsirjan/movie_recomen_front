
import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { useDispatch,useSelector } from "react-redux";
import actions from "./redux/actions";
import './admin.css'
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import userActions from '../register/redux/actions'
const AdminPage = () => {



    const dispatch = useDispatch()
 
    useEffect(() => {
     dispatch(actions.getLanguageDetails())
     dispatch(actions.getGenreDetails())
    dispatch(actions.getdetails())
    dispatch(userActions.getdetails())

    },[])
    const GenreList = useSelector((state) => state.moviedetails.Genre)
    const LanguageList = useSelector((state) => state.moviedetails.Language)

const movieList = useSelector((state) => state.moviedetails.Details)
const userList = useSelector((state) => state.register.user)

    

    return (
        <div className="dashboard_admin">
        <Navbar />
        <div className="dashboard_info">
          <div className="movie_details_container_box">
            <Typography sx={{fontSize:'25px',fontWeight:500}}>Total Movies</Typography>
            <Typography sx={{mt:1,fontSize:'28px'}}>{movieList.length}</Typography>

          </div>
          <div className="movie_details_container_box">
            <Typography sx={{fontSize:'25px',fontWeight:500}}>Total Language</Typography>
            <Typography sx={{mt:1,fontSize:'28px'}}>{LanguageList.length}</Typography>

          </div>
          <div className="movie_details_container_box">
            <Typography sx={{fontSize:'25px',fontWeight:500}}>Total Genres</Typography>
            <Typography sx={{mt:1,fontSize:'28px'}}>{GenreList.length}</Typography>

          </div>
          </div>
          <div className="dashboard_info">
          <div className="movie_details_container_box">
            <Typography sx={{fontSize:'25px',fontWeight:500}}>Total Users</Typography>
            <Typography sx={{mt:1,fontSize:'28px'}}>{userList.length}</Typography>

          </div>
          <Link className="link movie_details_container_box" to="add-movie">
          
           
            <Typography sx={{fontSize:'25px',fontWeight:500}}>Add Movies</Typography>
            

          
          </Link>
          <Link className="link movie_details_container_box" to="edit-movie">
          
           
            <Typography sx={{fontSize:'25px',fontWeight:500}}>View Movies</Typography>
            

          
          </Link>
          </div>
     
        </div>
    )
}

export default AdminPage;