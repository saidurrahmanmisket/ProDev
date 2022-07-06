import React from "react";
import { useParams } from "react-router-dom";
// import HeroSection from "../../heroSection/HeroSection";
import NavBar from "../../navBar/NavBar";
import Footer from "../../footer/Footer";
import data from "../../../../database/postdata.json"


const SinglePost = () => {

  
  const { id } = useParams()
  const found = data.filter((item) => item.id == id)
  const {title , description , image } = found[0]
  console.log(found)
  
    return (
        <>
        <NavBar />
        
        <div className="SinPostBody">
          <img className="sinImg" src={image} />
          <h1>{title}</h1>
          <br />
          <br />
          <p>{description}</p>
          <br />
          <p>{description}</p>
          <br/>
          <p>{description}</p>
          <br/>
          <div className="imgGellry">
            <div><img src={image} /></div>
            <div><img src={image} /></div>
            <div><img src={image} /></div>
            
          </div>
        </div>

        <Footer />
    </>
  );
};

export default SinglePost;
