import { FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { useDispatch,useSelector } from "react-redux";
import actions from "./redux/actions";
import './admin.css'
const AdminPage = () => {
    const [name,setMoviename] = useState();
    const [video,setVideoUrl] = useState();
    const [description,setDescription] = useState();
    const [banner,setBanner] = useState();
    const [releasedAt,setRelease] = useState();
    const [movieduration,setMovieDuration]= useState();
    const [ratedfor,setRatedFor] = useState();
    const [actors,setActors] = useState();
    const [director,setDirector] = useState();
    const [language,setLanguage] = useState();
    const [image,setImage] = useState();
    const [genre,setGenre] = useState();
    const [nameerror,shownameError] = useState('');
    const [videoerror,showvideoerror] = useState('');
    const [derror,setDerror] = useState('');
    const [rerror,setRerror] = useState('');
    const [durationerror,setDurationError] = useState('');
    const [ratederror,setRatedError] = useState('');
   

    const [actorerror,setActorError] = useState('');
    const [directorerror,setDirectorError] = useState('');
    const [languageerror,setLanguageError] = useState('');
    const [imagerror,setImageError] = useState('');
    const [bannerimagerror,setBannerImageError] = useState('');

    const [genreerror,setGenreError] = useState('');

    console.log(language)
    const dispatch = useDispatch()
    const previewimage = (e) => {
        setImage(e.target.files[0])
    }
    useEffect(() => {
     dispatch(actions.getLanguageDetails())
     dispatch(actions.getGenreDetails())
    },[])
    const GenreList = useSelector((state) => state.moviedetails.Genre)
    const LanguageList = useSelector((state) => state.moviedetails.Language)


    
     const handleClick = () => {
       
       if (!name) {
        shownameError('*This field is required')
       } else shownameError('')
      
       if (!video) {
        showvideoerror('*This field is required')
       } else showvideoerror('')
       if(!releasedAt) {
        setRerror('*This field is required')

       } else setRerror('')
       if(!banner) {
        setBannerImageError('*This field is required')

       } else setRerror('')
       if (!description) {
        setDerror('*This field is required')
       } else setDerror('')
       if (!language) {
        setLanguageError('*This field is required')
       } else setLanguageError('')
       
       if (!movieduration) {
        setDurationError('*This field is required')
      } else setDurationError('')
      if (!genre) {
        setGenreError('*This field is required')
      } else setGenreError('')
      if (!ratedfor) {
        setRatedError('*This field is required')
      } else setRatedError('')
      if (!actors) {
        setActorError('*This field is required')
      } else setActorError('')
      if (!image) {
        setImageError('*This field is required')
      } else setImageError('')
      if (!director) {
        setDirectorError('*This field is required')
      } else setDirectorError('')
         const formdata = new FormData();

         formdata.append("name", name);
         formdata.append("video",video)
         formdata.append("description",description)
         formdata.append("language",language)
         formdata.append("releasedAt",releasedAt)
         formdata.append("movieDuration",movieduration)
         formdata.append("genre",genre)
         formdata.append("ratedfor",ratedfor)
         formdata.append("actors",actors)
         formdata.append("image",image)
         formdata.append("director",director)

    
   dispatch(actions.adddetails(formdata))
     }
    return (
        <div>
            <Navbar />
            <div className="login_page">
        <div className="login_container">
            <div className="login_form">
            <Typography sx={{mb:3,fontSize:'26px',fontWeight:900}}> Add Movie</Typography>
                <TextField
                fullWidth
                id="demo-helper-text-misaligned"
                label="Movie Name"
                onChange={(e) => 
                  
                  
                  setMoviename(e.target.value)}
                        />
                <Typography sx={{mt:0.2,ml:1,width:'100%',fontSize:'10px',color:'red'}}> {nameerror} </Typography>
                <TextField sx={{mt:2}}
                fullWidth
                id="demo-helper-text-misaligned"
                label="Trailer"
                onChange={(e) => setVideoUrl(e.target.value)}
        helperText="PS: trailer link from youtube "

                        />
                 <Typography sx={{mt:0.2,ml:1,width:'100%',fontSize:'10px',color:'red'}}> {videoerror} </Typography>
                <TextField sx={{mt:2}}
                fullWidth
                id="demo-helper-text-misaligned"
                label="Description"
                onChange={(e) => setDescription(e.target.value)}
                        />
                   <Typography sx={{mt:0.2,ml:1,width:'100%',fontSize:'10px',color:'red'}}> {derror} </Typography>
                  <TextField  sx={{mt:2}}
                fullWidth 
                id="demo-helper-text-misaligned"
                label="Released Year"
                onChange={(e)=> setRelease(e.target.value)}
        helperText="For eg: 2018"

                        />
                 <Typography sx={{mt:0.2,ml:1,width:'100%',fontSize:'10px',color:'red'}}> {rerror} </Typography>
                <TextField sx={{mt:2}}

                fullWidth
                id="demo-helper-text-misaligned"
                label="Movie Duration"
                onChange={(e)=> setMovieDuration(e.target.value)}
                helperText="For eg: 2h 32min"


                        />
                 <Typography sx={{mt:0.2,ml:1,width:'100%',fontSize:'10px',color:'red'}}> {durationerror} </Typography>
                 <TextField sx={{mt:2}}

                fullWidth
            id="demo-helper-text-misaligned"
            label="Rated For"
            onChange={(e)=> setRatedFor(e.target.value)}
            helperText="For eg: 18"


        />
         <Typography sx={{mt:0.2,ml:1,width:'100%',fontSize:'10px',color:'red'}}> {ratederror} </Typography>
        <FormControl  sx={{mt:2}}
 fullWidth>
  <InputLabel id="demo-simple-select-label">Language</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={language}
    label="Language"
    onChange={(e) =>setLanguage(e.target.value)}
  >
    {LanguageList.map((data,i) =>(
    <MenuItem value={data.language_id}>{data.language}</MenuItem>
    ) )}
  </Select>
  <Typography sx={{mt:0.2,ml:1,width:'100%',fontSize:'10px',color:'red'}}> {languageerror} </Typography>
</FormControl>

<FormControl  sx={{mt:2}}
 fullWidth>
  <InputLabel id="demo-simple-select-label">Genre</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={genre}
    label="Genre"
    onChange={(e) =>setGenre(e.target.value)}
  >
     {GenreList.map((data,i) =>(
    <MenuItem value={data.genre_id}>{data.genre}</MenuItem>
    ) )}
   
  </Select>
  <Typography sx={{mt:0.2,ml:1,width:'100%',fontSize:'10px',color:'red'}}> {genreerror} </Typography>
</FormControl>
        <TextField sx={{mt:2}}

        fullWidth
        id="demo-helper-text-misaligned"
        label="Actors"
        onChange={(e)=> setActors(e.target.value)}
        helperText="For eg: Tom Hardy, Tom Cruise"

/>
<Typography sx={{mt:0.2,ml:1,width:'100%',fontSize:'10px',color:'red'}}> {actorerror} </Typography>
<TextField sx={{mt:2}}

fullWidth
id="demo-helper-text-misaligned"
label="Director"
onChange={(e)=> setDirector(e.target.value)}
helperText="For eg: Stanley Kubrick, Alfred Hitchcock"

/>
<Typography sx={{mt:0.2,ml:1,width:'100%',fontSize:'10px',color:'red'}}> {directorerror} </Typography>
<TextField sx={{mt:2}}
type="file"
fullWidth
id="demo-helper-text-misaligned"

onChange={(e) => previewimage(e)}
helperText="preview image"

/>
<Typography sx={{mt:0.2,ml:1,width:'100%',fontSize:'10px',color:'red'}}> {imagerror} </Typography>
<TextField sx={{mt:2}}
type="file"
fullWidth
id="demo-helper-text-misaligned"


helperText="banner image"

/>
<Typography sx={{mt:0.2,ml:1,width:'100%',fontSize:'10px',color:'red'}}> {bannerimagerror} </Typography>
                
                
            <div className="login_button">
                <button onClick={handleClick}>Add Movie </button>
            </div>
            </div>
        </div>
        
        </div>
        </div>
    )
}

export default AdminPage;