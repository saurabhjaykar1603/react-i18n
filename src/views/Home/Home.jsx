import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="container mt-4 text-center fs-2 text-white fw-bold py-2 px-5 bg-dark rounded" style={{width: "28rem"}}>React i18n here...</div>
      <div className="card mx-auto  mt-5" style={{ width: "34rem" }}>
        <div className="card-body">
            <h3 className="text-center fw-bold">Welcome !</h3>
            <h4 className="text-center my-4">we hope you enjoy learning react.</h4>
            <h5 className="text-center ">Have a Grate Day !</h5>
        </div>
      </div>
    </>
  );
}

export default Home;
