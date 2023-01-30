import React from "react";

export default function Skills() {
  const skills = ["Core Java","Advance Java","Spring Framework","Spring Boot Framework","Hibernate Framework","Python","Django","Numpy","Pandas","Matplotlib","Data Structure","GitHub","HTML5","CSS","JavaScript","Node JS","React JS","Angular JS","jQuery","JSON","Tailwind CSS","Bootstrap","SQL","MySQL","Manual Testing","Automated Testing","Selenium","Computer Networking","Adobe Iliustrator","Adobe Photoshop"]
  return (
    <>
      <div className="skills-section">
        <h2>Skills</h2>
        <ul>
          {
            skills.map((item,i)=>(
              <li key={i}>{item}</li>
            ))
          }
        </ul>
      </div>
    </>
  );
}
