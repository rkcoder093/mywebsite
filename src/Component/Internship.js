import React from "react";



export default function Internship() {
  

  return (
    <>
      <div >
        <div >
          <h3>Internship</h3>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  <h4>Internship 1</h4>
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className="internship-item">
                    <h3>Institution's Innovation Council</h3>
                    <p>Position: ROS Developer</p>
                    <p>
                      Duration: 21<sup>th</sup> SEPT 2022 - 25<sup>th</sup> SEPT 2022
                    </p>
                    <p>
                      Description: Trained in luinex cmmand line programes, Robotic
                      operating system aurdino Raspberrypi, Python. Project Details:
                      simmulation os the roborts like nano bots, drons etc, in the virtual
                      enviroment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  <h4> Internship 2</h4>

                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className="internship-item">
                    <h3>New Barrackpore Navachetna Welfare Society</h3>
                    <p>Position: Graphic Desiginer</p>
                    <p>Duration: Start date - End date</p>
                    <p>
                      Description: Trained in Adobe photoshop ans Adobe illustrator.
                      Executed Projects are advertisiments posters or web designes with
                      the requirments
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
