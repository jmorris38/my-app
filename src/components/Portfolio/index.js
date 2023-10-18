import React from "react";
import homeBrewImage from "../../assets/small/HomeBrew.png";
import summerPunchImage from "../../assets/small/Summer_Punch.png";
import weatherDashImage from "../../assets/small/Weather_Dash.png";
import noteTakerImage from "../../assets/small/NoteTaker.png";
import twilightImage from "../../assets/small/Twilight_Ristorante.png";
import flowerImage from "../../assets/small/Sweet-Pea-Flowers.png";
import sphereImage from "../../assets/small/Sphere.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="">
                {" "}
                <img
                  src={sphereImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Sweet-Pea-Flowers"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Sorcerer's Sphere</h4>
              <p>
                A MERN application that allows users to log in and create accounts. Users can receive daily affirmations, ask questions, receive lucky numbers, and donate money to the website.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="">
                {" "}
                <img
                  src={flowerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Sweet-Pea-Flowers"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Sweet Pea Flowers</h4>
              <p>
                An HTML, CSS, and JavaScript application that allows users to shop for flowers, sign in as guests or users, add items to their cart, manage their cart using local storage, and validate their credit card for checkout.
              </p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Portfolio;
