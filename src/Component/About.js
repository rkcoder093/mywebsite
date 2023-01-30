import React from 'react'

export default function About(props) {
  return (
    <>
        <div className="card text-center" >
          <div className="card-header fs-3 fw-bold  ">{props.name}</div>
          <div className="card-body">
            <h5 className="card-title fs-3">{props.title_of_about}</h5>
            <p className="card-text fs-5">
            As a full stack Java developer, I have a strong foundation in the Java programming language and experience building both front-end and back-end components for web applications.

            On the front-end, I have experience using HTML, CSS, and JavaScript to build intuitive and interactive user interfaces. I am also familiar with popular front-end libraries and frameworks such as React and Angular.

            On the back-end, I have experience designing and implementing RESTful APIs in Java using frameworks such as Spring and Hibernate. I am also skilled in database design and management, with experience using MySQL and Oracle.

            In addition to my technical skills, I am a strong communicator and thrive in collaborative work environments. I am constantly learning and staying up-to-date with the latest developments in the field to improve my skills and deliver the best possible solutions to my clients
            </p>
          </div>
        </div>
      </>
  )
}
