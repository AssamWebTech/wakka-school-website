import { Teacher } from '../../models/types';
import { teachers } from '../../static/teachers';
import './TeacherSection.css';

const TeacherSection = () => {
  return (
    <section className='row meet-our-teachers py-5 justify-content-center gap-5'>
      <div className="global-title">
        <h1>Meet Our Teachers</h1>
      </div>
      <div className="col-12 teacher-grid">
        {teachers.map((teacher: Teacher) => (
          <div key={teacher.id} className="teacher-card">
            <img src={teacher.image} alt={`${teacher.name}`} className="teacher-image" />
            <h2>{teacher.name}</h2>
            <h3>{teacher.subject}</h3>
            <p>{teacher.bio}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
export default TeacherSection;
