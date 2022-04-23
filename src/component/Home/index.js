import Navbar from '../Navbar'
import {AiOutlineSearch} from 'react-icons/ai'
import './home.css'
import Banner  from '../banner'
import {useDispatch,useSelector} from 'react-redux'
import movieActions from '../admin/redux/actions'

import Movie from '../movie'
import { useEffect } from 'react'
import userActions from '../login/redux/actions'
const Home = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state?.auth?.currentUser?.user?.user_id);

    const currentuserid = {
        userid:currentUser
    }
    useEffect(() => {
        
        dispatch(movieActions.getdetails())
        dispatch(userActions.getCurrentUser())

        dispatch(movieActions.getGenreDetails())
        dispatch(movieActions.getLanguageDetails())
        dispatch(movieActions.getRecommendDetails(currentuserid))
      }, [currentuserid])
    return (
        <>
         <Navbar />
        <div className="home_container">
            <div className="sidebar">
                <div className="search_icon">
                    <span>
                   <AiOutlineSearch size="1.5em"  color="#fff"/>
                   </span>
                </div>
            </div>
            <div className="movie_container">
                   <Banner />
                   {/* <Movie header="New Release" movie_name="The batman" movie_genre="Thriller | Dark" />
                   <Movie header="New Release" movie_name="The batman" movie_genre="Thriller | Dark" /> */}
               <Movie />
                 
                   {/* <Movie header="English Movie" movie_name="The batman" movie_genre="Thriller | Dark" />
                   <Movie header="Hindi Movie" movie_name="The batman" movie_genre="Thriller | Dark" /> */}


            </div>
        </div>
    </>
    )
}

export default Home;