import React from "react";

export default function Projects() {
  const project = [
    { projectNo: "Project 1", projectTitle: "Implementation of Data Structure", sumarry: "Implemented various data tructures such as Non-Linear Data Structure, using Java and the Window Builder GUI framework. Utilized bject-oriented programming concepts to design and implement classes and interfaces for data structures. eveloped interactive graphical user interface using Window Builder to demonstrate the functionality of the mplemented data structures. Validated the correctness of the data structures using JUnit test cases and ebugged the code using Eclipse IDE. Successfully demonstrated the functionality of data structures through various scenarios and use cases.", link: "https://github.com/rkcoder093/Data-Structure" },
    { projectNo: "Project 2", projectTitle: "Todo App", sumarry: "A to-do app built with React JS would be a web application that allows users to create and manage a list of tasks. The app would have a user-friendly interface that allows users to easily add, edit, and delete tasks from the list. Users should also be able to  mark tasks as complete and view a list of completed tasks. The app should be built using React JS for the front-end and could use a back-end service such as Firebase for data storage. The app should also be responsive and work well on different screen sizes and devices. Overall, the goal of the project is to create a simple   and functional to-do app that is easy to use and helps users stay organized.", link: "https://github.com/rkcoder093/TO-DO-App" },
    { projectNo: "Project 3", projectTitle: "Shopping Cart", sumarry: "Developed a Shopping Cart web application sing React, HTML, CSS, and JavaScript. Implemented user authentication and authorization with login and egistration functionality. Utilized a Redux store to manage the application's state and implemented CRUD perations for managing products in the cart. Built a responsive user interface with the use of CSS and design libraries such as Tailwind CSS. Incorporated features such as product search, filtering, and pagination to mprove the user experience. Successfully deployed the application on Web server.", link: "https://github.com/rkcoder093/Shopping-Cart" },
    { projectNo: "Project 4", projectTitle: "Social Media", sumarry: "SocialConnect is an innovative social media application built using React.js. It offers a seamless user experience with real-time updates and smooth navigation. The application integrates a comprehensive News API, delivering the latest news across various categories. Users can create profiles, connect with friends, and share posts, photos, and videos. The News API integration enhances content diversity and engagement. SocialConnect combines the power of React.js and the News API to provide a responsive and interactive environment. It brings together social interactions and news consumption, offering a compelling and inclusive platform for users to connect and stay informed. Overall, SocialConnect is a next-generation social media application that seamlessly integrates social features with up-to-date news and information in one convenient place.", link: "https://github.com/rkcoder093/Web-Music-Player" },
    { projectNo: "Project 5", projectTitle: "CNC Miro Milling Machine", sumarry: "This project is a development of  CNC machine for automated production of components for the medical industry. The objective of the project is to reate a highly efficient and reliable machine that can be used for the production of high-precision components. The machine will be equipped with the latest technologies including servo motors, 3D printing, and laser cutting. The project will also involve the design and development of software and hardware to ensure the machine meets the requirements of the medical industry. Software and Hardware used – AutoCAD (Fusion 360), Hyper Mesh Arduino kit, spindle motor, stepper motor controlling board etc.", link: "https://drive.google.com/drive/folders/115xqw5ziJy6G0larFZXXQpL1anc890Mm?usp=share_link" },
    { projectNo: "Project 6", projectTitle: "Code Editor", sumarry: "This project is a development of  CNC machine for automated production of components for the medical industry. The objective of the project is to reate a highly efficient and reliable machine that can be used for the production of high-precision components. The machine will be equipped with the latest technologies including servo motors, 3D printing, and laser cutting. The project will also involve the design and development of software and hardware to ensure the machine meets the requirements of the medical industry. Software and Hardware used – AutoCAD (Fusion 360), Hyper Mesh Arduino kit, spindle motor, stepper motor controlling board etc.", link: "https://drive.google.com/drive/folders/115xqw5ziJy6G0larFZXXQpL1anc890Mm?usp=share_link" },
  ]

  return (
    <>
      <div className="projjj"> 
        {
        project.map((item,i)=>(
          <div className="card" id="card" key={i}>
          <div className="project" >
            <h3>{item.projectNo}</h3>
            <h4>{item.projectTitle}</h4>
            <p>{item.sumarry}</p>
            <a href={item.link} target="_blank" rel="" >
              View Project
            </a>
          </div>
        </div>
        ))
        }
      </div>
    </>
  );
}