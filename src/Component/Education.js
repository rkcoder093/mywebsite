import React from "react";

export default function Education() {

  const education = [
    { Degree: "Degree in Mechanical Engineering", Institution: "Ms Ramaiah University of applied sciences", CGPA: "7.58/10", PassOutDate: "June 2022" },
    { Degree: "12th", Institution: "Sri Chaitanya Vidya Niketan", CGPA: "7.2/10", PassOutDate: "March 2018" },
    { Degree: "10th", Institution: "Ms Ramaiah University of applied sciences", CGPA: "7.58/10", PassOutDate: "June 2022" },
  ]
  return (
    <>
      <section id="education">
        <h2>Education</h2>
        <table >
          <tbody>
            <tr>
              <th>Degree</th>
              <th>Institution</th>
              <th>CGPA</th>
              <th>Pass Out Date</th>
            </tr>
            {
              education.map((item,i) => (
                <tr key={i}>
                  <td>
                    {item.Degree}
                  </td>
                  <td>{item.Institution} </td>
                  <td>{item.CGPA}</td>
                  <td>{item.PassOutDate}</td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </section>
    </>
  );
}
