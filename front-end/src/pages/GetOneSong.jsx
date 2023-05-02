import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import Delete from "../components/Delete"
import EditButton from "../components/EditButton"
import './SongDetails.css'
import './GetOneSong.css'

const GetOneSong = () => {

  const [oneSong, setOneSong] = useState({
    name: '',
    artist: '',
    album: '',
    time: '',
    is_favorite: false,
    review: ''
  })
  
  const [review, setReview] = useState({ review: '' })
  
    const { id } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
      axios
        .get(`${process.env.REACT_APP_BACKEND_API}/songs/${id}`)
        .then((response) => {
          if (response.data) {
            setOneSong(response.data);
            setReview({ review: response.data.review });
          } else {
            navigate("/error-404");
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            navigate("/error-404");
          } else {
            console.log(error);
          }
        });
    }, [id, navigate]);
    
    
  
    const handleTextChange = (event) => {

      const { name, value } = event.target
      setOneSong((previousState) => ({ ...previousState, [name]: value }))
      setReview((previousState) => ({...previousState, review: value}))

    }
  
  const handleSubmit = (event) => {
    console.log('is the submit working?')
    event.preventDefault()

    const sendData = { ...oneSong, review: review.review === null || review.review === undefined ? '' : review.review }
    console.log('sendData', sendData)
    
   
    axios.put(`${process.env.REACT_APP_BACKEND_API}/songs/${id}`, sendData)
      .then(response => {
        console.log('data', response.data)
        setOneSong((previousState) => ({ ...previousState, review: review.review }))
        setReview({ review: '' })
        navigate('/songs/my-favorites/')
      })
      .catch(error => console.log(error))
    
      

  }

    console.log('oneSong', oneSong)
    console.log('check2', `${process.env.REACT_APP_BACKEND_API}songs/${id}`)
    
    
    return (
      <div>
        
        <form className="Song-Details" onSubmit={handleSubmit}>
          
          {oneSong &&
            <>
              <h3>Song Name: {oneSong.name}</h3>
              <p>Artist: {oneSong.artist}</p>
              <p>Album: {oneSong.album}</p>
              <p>Is Favorite: {oneSong.is_favorite ? '⭐️': '❌'}</p>
              <p>Duration: {oneSong.time}</p>
              <p className="review">Review: {oneSong.review}</p>
            </>
        }
        
        <textarea className="text-area" name="review" id="review" value={oneSong.review === null ? '' : oneSong.review} onChange={handleTextChange} ></textarea>
        <br/>
        <button className='nav-button2'>Submit Review</button>
            
            <EditButton/>
            <Delete />
          
          </form>
        </div>
      );
      
}

export default GetOneSong