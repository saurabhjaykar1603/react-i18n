import React, { useState } from "react";
import "./Home.css";
import i18n from "../../utils/i18n.js";

function Home() {
  const [lang, setLang] = useState("en");
  const usersCount = 155;
  return (
    <>
      <div className="  text-center fs-2 text-white fw-bold py-2 px-5 bg-primary shadow">
        React i18n here....
      </div>
      <div
        className="card mx-auto card-container mt-5"
        style={{ width: "44rem" }}
      >
        <div className="card-body">
          <h1 className="text-center fw-bold">{i18n("welcomeMessage")}</h1>
          <h4 className="text-center my-5">{i18n("normalMessage")}</h4>
          <h2 className="text-center fw-bold">{i18n("greetingMessage")}</h2>
          <h4 className="text-center mt-5 ">{i18n("endMessage")}</h4>
          <p className="text-center mt-5 fw-bold">
            {i18n("usersStatMessage", "<studentCount>", usersCount)}
          </p>
          <p className="mt-4 text-center text-primary fw-bold">{i18n("contactNumber")}</p>
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
