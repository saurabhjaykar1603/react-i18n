import React, { useState } from "react";
import "./Home.css";
import i18n from "../../utils/i18n.js";

function Home() {
  const [lang, setLang] = useState("en");
  const usersCount = 15;
  return (
    <>
      <div
        className="container mt-4 text-center fs-2 text-white fw-bold py-2 px-5 bg-dark rounded"
        style={{ width: "28rem" }}
      >
        React i18n here...
      </div>
      <div className="card mx-auto  mt-5" style={{ width: "34rem" }}>
        <div className="card-body">
          <h3 className="text-center fw-bold">{i18n("welcomeMessage")}</h3>
          <h4 className="text-center my-4">{i18n("normalMessage")}</h4>
          <h5 className="text-center ">{i18n("greetingMessage")}</h5>
          <p className="text-center mt-4 fw-bold">
            {usersCount} are learning in this session
          </p>
          <div className="container w-50 mt-4">
            <form>
              <select
              className="form-select"
                value={localStorage.getItem("lang")}
                onChange={(e) => {
                  localStorage.setItem("lang", e.target.value);
                  window.location.reload();
                }}
              >
                <option value="mr">marathi</option>
                <option value="hn">hindi</option>
                <option value="en">english</option>
              </select>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
