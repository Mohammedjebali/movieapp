import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Editmovie({setmovies,movie,movies}) {
  const [show, setShow] = useState(false);
  const [title,settitle]= useState(movie.title)
  const [descriptions,setdescriptions]= useState(movie.descriptions)
  const[poster,setposter]=useState(movie.poster)
  const[trailer,settrailer]=useState(movie.trailer)
  const[raing,setrating]=useState(0)
  const[actors,setactors]=useState(movie.actors)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  /*const add=()=>{
    const data={title,descriptions,actors,poster,trailer,raing}
    setmovies([...movies,data])
  }*/
 const edit=()=>{
    const data={title,descriptions,actors,poster,trailer,raing}
    setmovies(movies.map(el=>el.title===movie.title?el=data:el))
    handleClose()
 }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
 edit movie      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>movie title</Form.Label>
              
              <Form.Control
              onChange={(event)=> settitle(event.target.value)}
                type="text"
                defaultValue={movie.title}

                placeholder="put the title of the movie"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>movie Description</Form.Label>
              <Form.Control
                              defaultValue={movie.Description}

              onChange={(event)=> setdescriptions(event.target.value)}
                type="text"
                placeholder="put the description"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>movie Poster</Form.Label>
              <Form.Control
              onChange={(event)=> setposter(event.target.value)}
              defaultValue={movie.poster}
                type="text"
                placeholder="put the title of the Poster"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>movie Rating</Form.Label>
              <Form.Control
              onChange={(event)=> setrating(event.target.value)}
                type="number"
                placeholder="put the title of the movie"
                autoFocus
                defaultValue={movie.rating}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>trailer</Form.Label>
              <Form.Control
              onChange={(event)=> settrailer(event.target.value)}
                type="text"
                placeholder="put the link of the trailer"
                autoFocus
                defaultValue={movie.trailer}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>movie Actors</Form.Label>
              <Form.Control
              onChange={(event)=> setactors(event.target.value)}
                type="text"
                placeholder="put the list of actors"
                autoFocus
                defaultValue={movie.actors}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"onClick={()=>edit(movie)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Editmovie;