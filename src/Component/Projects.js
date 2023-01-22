import React from "react";

export default function Projects(props) {
  return (
    <>
      <div className="projjj">
        <div className="cardp">
          <div className="project" >
            {/* <img src="project1.jpg" alt="Project 1" /> */}
            <h3>Project 1</h3>
            <h4>Implementation of Data Structure</h4>
            <p>
              Implemented various data structures such as Non-Linear Data
              Structure, using Java and the Window Builder GUI framework.
              Utilized object-oriented programming concepts to design and
              implement classes and interfaces for data structures. Developed
              interactive graphical user interface using Window Builder to
              demonstrate the functionality of the implemented data structures.
              Validated the correctness of the data structures using JUnit test
              cases and debugged the code using Eclipse IDE. Successfully
              demonstrated the functionality of data structures through various
              scenarios and use cases.
            </p>
            <a href="https://drive.google.com/file/d/1rwMICdf0ezpsLYjneDrqwLyR9DQkuJHc/view?usp=share_link">
              View Project
            </a>
          </div>
        </div>
        <div className="card">
          <div className="project">
            <h3>Project 2</h3>
            <h4>Todo App</h4>
            <p>
              A to-do app built with React JS would be a web application that
              allows users to create and manage a list of tasks. The app would
              have a user-friendly interface that allows users to easily add,
              edit, and delete tasks from the list. Users should also be able to
              mark tasks as complete and view a list of completed tasks. The app
              should be built using React JS for the front-end and could use a
              back-end service such as Firebase for data storage. The app should
              also be responsive and work well on different screen sizes and
              devices. Overall, the goal of the project is to create a simple
              and functional to-do app that is easy to use and helps users stay
              organized..
            </p>
            <a href="/">View Project</a>
          </div>
        </div>
        <div className="card">
          <div className="project">
            <h3>Project 3</h3>
            <h4>Shopping Cart</h4>
            <p>
              Developed a Shopping Cart web application using React, HTML, CSS,
              and JavaScript. Implemented user authentication and authorization
              with login and registration functionality. Utilized a Redux store
              to manage the application's state and implemented CRUD operations
              for managing products in the cart. Built a responsive user
              interface with the use of CSS and design libraries such as
              Tailwind CSS. Incorporated features such as product search,
              filtering, and pagination to improve the user experience.
              Successfully deployed the application on Web server.
            </p>
            <a href="/">View Project</a>
          </div>
        </div>
        <div className="card">
          <div className="project">
            <h3>Project 4</h3>
            <h4>Music Player</h4>
            <p>
              Developed a music player web application using HTML, CSS, and
              JavaScript. Implemented features such as audio playback,
              playlists, and searching for songs. Utilized JavaScript for the
              dynamic manipulation of the DOM to create a seamless user
              interface. Incorporated responsive design using CSS to ensure
              optimal user experience on various screen sizes. Incorporated
              functionality to control playback, such as play, pause, and skip
              buttons, as well as the ability to adjust volume. Additionally,
              implemented drag-and-drop functionality for adding songs to
              playlists. Successfully deployed the application on a web server
            </p>
            <a href="/">View Project</a>
          </div>
        </div>
        <div className="card">
          <div className="project">
            <h3>Project 5</h3>
            <p>A brief description of the project.</p>
            <a href="/">View Project</a>
          </div>
        </div>
        <div className="card">
          <div className="project">
            <h3>Project 6</h3>
            <h4>CNC Miro Milling Machine</h4>
            <p>
              This project is a development of a CNC machine for automated
              production of components for the medical industry. The objective
              of the project is to create a highly efficient and reliable
              machine that can be used for the production of high-precision
              components. The machine will be equipped with the latest
              technologies including servo motors, 3D printing, and laser
              cutting. The project will also involve the design and development
              of software and hardware to ensure the machine meets the
              requirements of the medical industry. Software and Hardware used –
              AutoCAD (Fusion 360), Hyper Mesh Arduino kit, spindle motor,
              stepper motor controlling board etc.
            </p>
            <a href="/">View Project</a>
          </div>
        </div>
      </div>
    </>
  );
}
