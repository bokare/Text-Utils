import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="object-fit cover">
        <img
          src="https://images.unsplash.com/photo-1586455122341-927f2dec0691?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8OTU5MjQyOHx8ZW58MHx8fHx8&dpr=1&auto=format&fit=crop&w=294&h=294&q=60"
          alt=""
          
        />
      </div>
      <Link className="btn btn-outline-success m-5" type="button" to="/addform">Home</Link>
    </>
  );
};

export default Home;
