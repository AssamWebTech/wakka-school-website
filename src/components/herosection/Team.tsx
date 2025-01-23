
import React from 'react'

export const Team = () => {

  const teachers = [
    {
      name: "Mr. John Doe",
      subject: "Mathematics",
      bio: "Passionate about solving problems and making math enjoyable for all students.",
      image: "../../../public/Assets/notice.jpg",
    },
    {
      name: "Ms. Jane Smith",
      subject: "Science",
      bio: "Dedicated to inspiring curiosity and fostering a love for science.",
      image: "../../../public/Assets/notice.jpg",
    },
    {
      name: "Mrs. Emily Johnson",
      subject: "English",
      bio: "Loves bringing stories to life and enhancing communication skills.",
      image: "../../../public/Assets/notice.jpg",
    },
  ];
  return (
    <>
    <div className="meet-our-teachers">
      <h1>Meet Our Teachers</h1>
      <div className="teacher-grid">
        {teachers.map((teacher, index) => (
          <div key={index} className="teacher-card">
            <img src={teacher.image} alt={`${teacher.name}`} className="teacher-image" />
            <h2>{teacher.name}</h2>
            <h3>{teacher.subject}</h3>
            <p>{teacher.bio}</p>
          </div>
        ))}
      </div>
    </div>
    </>

  )
}
export default Team;
