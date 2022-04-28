import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {delay} from '../../helper/Helper'
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import './admin.css'
import Navbar from '../Navbar';
import {useHistory} from 'react-router'
import { useDispatch,useSelector } from 'react-redux';
import { FormControl, InputLabel, MenuItem, Select, TableHead, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import movieActions from './redux/actions'
function TablePaginationActions(props) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };




  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};




export default function CustomPaginationActionsTable() {

const history = useHistory()
const [modelid,setModelId] = React.useState();

const modalid = (id) => {
  setModelId(id)

}
const movieList = useSelector((state) => state?.moviedetails?.Details)
console.log(movieList)
const FilteredMovie = movieList?.filter((data) => data?.movie_id == modelid)

React.useEffect(() => {
  dispatch(movieActions.getdetails())
},[])
const handleOpen = () => {

  setOpen(true);
  
  setMoviename(FilteredMovie[0]?.name)

  setVideoUrl(FilteredMovie[0]?.description)
  setDescription(FilteredMovie[0]?.description)
  setRelease(FilteredMovie[0]?.releasedAt)
  setRatedFor(FilteredMovie[0]?.ratedfor)
  setActors(FilteredMovie[0]?.actors)
  setDirector(FilteredMovie[0]?.director)
  setLanguage(FilteredMovie[0]?.language)
  setGenre(FilteredMovie[0]?.genre)
  setMovieDuration(FilteredMovie[0]?.movieDuration)
  
}


    const dispatch = useDispatch();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [name,setMoviename] = React.useState();
    const [video,setVideoUrl] = React.useState();
    const [description,setDescription] = React.useState();
    const [banner,setBanner] = React.useState();
    const [releasedAt,setRelease] = React.useState();
    const [movieduration,setMovieDuration]= React.useState();
    const [ratedfor,setRatedFor] = React.useState();
    const [actors,setActors] = React.useState();
    const [director,setDirector] = React.useState();
    const [language,setLanguage] = React.useState();
    const [image,setImage] = React.useState();
    const [genre,setGenre] = React.useState();
    const previewimage = (e) => {
      setImage(e.target.files[0])

  }


  
  console.log(name)
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    overflow: 'scroll',
    height:'80%',
      p: 4,
  };
  const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    
    boxShadow: 24,
    
    height:'fit-content',
      p: 4,
  };
  const GenreList = useSelector((state) => state.moviedetails.Genre)
  const LanguageList = useSelector((state) => state.moviedetails.Language)
 


  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - movieList.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDelete = (id) => {
    dispatch(movieActions.deletedetails(id))

  }
  const [open, setOpen] = React.useState(false);
  const [modelopen, setModelOpen] = React.useState(false);


  const handleClose = () => setOpen(false);
  const handleCloseModal = () => setModelOpen(false);





 
  function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
}
  const handleClick = () => {
  
   


     
      setModelOpen(true)
  }

  const handleModalOpen = (e) => {
    e.preventDefault()
    
    const data = {
      name:name,
      video:video,
      description:description,
      releasedAt:releasedAt,
      movieDuration:movieduration,
      ratedfor:ratedfor,
      actors:actors,
      director:director,
      genre:genre,
      language:language,
  

    }
 
 
    dispatch(movieActions.editdetails(modelid,data))  
    window.location.reload(true);
   
  }
  const closeModal = () => {
    setOpen(false);

    setModelOpen(false)

  }

  return (
      <>
      <Navbar />
      <Modal
        open={modelopen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
          <Typography> Do you sure want to edit the data? </Typography>
         <Box mt={2}>
         <button className="edit_button" onClick={(e) => handleModalOpen(e)}>yes</button>
         <button  className="delete_button" onClick={closeModal}>No</button>
          </Box>
        </Box>
        </Modal>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {FilteredMovie?.map((FilteredMovie) => (

<>         
        <TextField
                fullWidth
                id="demo-helper-text-misaligned"
                label="Movie Name"
                
               defaultValue={FilteredMovie?.name}
                onChange={(e) => 
                  setMoviename(e.target.value)}
                        />
                
                <TextField sx={{mt:2}}
                fullWidth
                id="demo-helper-text-misaligned"
                label="Trailer"
                defaultValue={FilteredMovie?.video}
                onChange={(e) => setVideoUrl(e.target.value)}
        helperText="PS: trailer link from youtube "

                        />
               
                <TextField sx={{mt:2}}
                fullWidth
                id="demo-helper-text-misaligned"
                label="Description"
                defaultValue={FilteredMovie?.description}
                onChange={(e) => setDescription(e.target.value)}
                        />
                   
                  <TextField  sx={{mt:2}}
                fullWidth 
                id="demo-helper-text-misaligned"
                label="Released Year"
                defaultValue={FilteredMovie?.releasedAt}
                onChange={(e)=> setRelease(e.target.value)}
        helperText="For eg: 2018"

                        />
           
                <TextField sx={{mt:2}}

                fullWidth
                id="demo-helper-text-misaligned"
                label="Movie Duration"
                defaultValue={FilteredMovie?.movieDuration}

                onChange={(e)=> setMovieDuration(e.target.value)}
                helperText="For eg: 2h 32min"


                        />
                
                 <TextField sx={{mt:2}}

                fullWidth
            id="demo-helper-text-misaligned"
            label="Rated For"
            defaultValue={FilteredMovie?.ratedfor}

            onChange={(e)=> setRatedFor(e.target.value)}
            helperText="For eg: 18"


        />
        
        <FormControl  sx={{mt:2}}
 fullWidth>
  <InputLabel id="demo-simple-select-label">Language</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={language}
    defaultValue={FilteredMovie?.language}

    label="Language"
    onChange={(e) =>setLanguage(e.target.value)}
  >
    {LanguageList.map((data,i) =>(
    <MenuItem value={data.language_id}>{data.language}</MenuItem>
    ) )}
  </Select>
  
</FormControl>

<FormControl  sx={{mt:2}}
 fullWidth>
  <InputLabel id="demo-simple-select-label">Genre</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={genre}
    label="Genre"
    defaultValue={FilteredMovie?.genre}
    onChange={(e) =>setGenre(e.target.value)}
  >
     {GenreList.map((data,i) =>(
    <MenuItem  value={data.genre_id}>{data.genre}</MenuItem>
    ) )}
   
  </Select>
 
</FormControl>
        <TextField sx={{mt:2}}

        fullWidth
        id="demo-helper-text-misaligned"
        label="Actors"
    defaultValue={FilteredMovie?.actors}
        
        onChange={(e)=> setActors(e.target.value)}
        helperText="For eg: Tom Hardy, Tom Cruise"

/>

<TextField sx={{mt:2}}

fullWidth
id="demo-helper-text-misaligned"
label="Director"
defaultValue={FilteredMovie?.director}

onChange={(e)=> setDirector(e.target.value)}
helperText="For eg: Stanley Kubrick, Alfred Hitchcock"

/>
{/* <Box sx={{mt:2}}>
<img height="200" width="200" src={FilteredMovie[0]?.image} />
</Box>
<TextField sx={{mt:0}}
type="file"
fullWidth
id="demo-helper-text-misaligned"

onChange={(e) => previewimage(e)}
helperText="choose only if you need to edit image"

/>

<TextField sx={{mt:2}}
type="file"
fullWidth
id="demo-helper-text-misaligned"


helperText="choose only if you need to edit image"


/> */}
</>
          ))}        
                
            <div className="login_button">
                <button onClick={handleClick}>Edit Movie</button>
            </div>
        </Box>
      </Modal>
      
    <TableContainer className="edit-movie-details" component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
      <TableHead>
          <TableRow>
          <TableCell >Image</TableCell>
            <TableCell>Movie Name</TableCell>
            <TableCell >Actors</TableCell>
            <TableCell >Director</TableCell>
            <TableCell >Action</TableCell>

           

        
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? movieList?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : movieList
          )?.map((data) => (
            <TableRow onMouseOver={() =>  modalid(data.movie_id)} key={data.name}>
                 <TableCell component="th" scope="row">
               <img height="50" width="80" src={data.image} />
              </TableCell>
              <TableCell component="th" scope="row">
                {data.name}
              </TableCell>
              <TableCell style={{ width: 160 }} >
                {data.actors}
              </TableCell>
              <TableCell style={{ width: 160 }} >
                {data.director}
              </TableCell>
              <TableCell style={{ width: 160 }} >
               <div className="action_button">
                   <button onClick={() => handleOpen(data.movie_id)} className="edit_button">Edit</button>
                   <button onClick={() => handleDelete(data.movie_id)} className="delete_button">Delete</button>

               </div>
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={movieList?.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
    </>
  );
}
