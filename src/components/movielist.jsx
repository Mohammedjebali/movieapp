import React, { useState } from "react";
import movies from "./data";
import Card from "react-bootstrap/Card";
import ReactStars from "react-stars";
import { Button } from "react-bootstrap";
import Editmovie from "./Editmovie";

function Movielist(props) {
  console.log(props);
  const bg=props.dark?"black":"white"
  console.log(bg);
  const [search,setSearch]=useState("")
  console.log(search);
  const remove=(title)=>{
    props.setmovies(props.movies.filter(el=>el.title!==title))
  }
  
  return (
    <div>
      <input type="text" placeholder="search a movie"onChange={(event)=>setSearch(event.target.value)}/>
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        background:bg
      }}
      

    >
      {
     props.movies.filter(el=>el.title.includes(search)).map(el=> (
        <div>
          <Card style={{ width: "18rem",marginBottom:"20px" }}>
            <Card.Img variant="top" src={el.poster} />
            <Card.Body>
              <Card.Title>{el.title}</Card.Title>
              <Card.Text>{el.descriptions}</Card.Text>
              <Card.Text>
                <ReactStars
                  count={5}
                  size={24}
                  color2={"#ffd700"}
                  value={el.rating}
                />
              </Card.Text>
              <Button className='btn btn-danger'onClick={()=>remove(el.title)}>remove</Button>

              <Editmovie movie={el} movies={props.movies} setmovies={props.setmovies}/>
            </Card.Body>
          </Card>
          <iframe style={{width:"400",height:"300px"}} src={el.trailer} frameborder="0"></iframe>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Movielist;
