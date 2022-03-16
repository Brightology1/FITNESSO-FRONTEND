import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Trainers.css";

const Trainers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [trainers, setTrainers] = useState([]);
  const url = `http://localhost:9067/person/view_trainers`;

  useEffect((e) => {
    getTrainers(e);
  }, []);

  const getTrainers = async (e) => {
    const response = await axios.get(url);
    console.log("This is response: " + response);
    console.log("This is data: " + response.data);
    setTrainers(response.data);
    setIsLoading(true);
  };
  return (
    <div className="trainers">
      <div className="trainers_section">
        {trainers.map((item) => (
          <div className="details" key={item._id}>
            <div className="big-img">
              <img src={item.trainer.image} alt="" />
            </div>

            <div className="box">
              <div className="row">
                <h2>{`${item.trainer.firstName} ${item.trainer.lastName}`}</h2>
              </div>
              {/* <Colors colors={item.colors} /> */}

              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="trainers_text">
        <span class="colour-free"> See Our Trainers</span>
      </div>
    </div>
  );
};

export default Trainers;
