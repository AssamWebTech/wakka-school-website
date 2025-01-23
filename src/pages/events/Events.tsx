import { faCalendarAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Events.css';
import Achievements from "../../components/achievements/Achievements";
import { events } from '../../static/events.ts';
import { EventType } from "../../models/types.js";

const Events = () => {
  return (
    <>
      <main className="container-fluid">
        <section className="row py-4">
          <div className="col-12 text-center">
            <h1 className="title">Our Events</h1>
          </div>
        </section>

        {events.map((item: EventType) => {
          return (
            <section className="row justify-content-center pb-5 pt-3 gap-3" key={item.id}>
              {
                (item.id % 2 === 1) && 
                <div className="col-3">
                  <img src='../../../public/Assets/p1.jpeg' height={'100%'} width={'100%'}></img>
                </div>
              }
              <div className="col-6 flex flex-column gap-3">
                <div className="event-title">{item.title}</div>
                <div className="flex flex-row gap-5 event-datetime">
                  <div className="flex gap-2 align-items-center">
                    <FontAwesomeIcon icon={faCalendarAlt} />{item.date}
                  </div>
                  <div className="flex gap-2 align-items-center">
                    <FontAwesomeIcon icon={faClock} />{item.time}
                  </div>
                </div>
                <div className="event-description">{item.description}</div>
              </div>
              {
                (item.id % 2 === 0) && 
                <div className="col-3 er">
                  <img src='../../../public/Assets/p1.jpeg' height={'100%'} width={'100%'}></img>
                </div>
              }
            </section>
          )
        })}
      </main>
      <main className="container-fluid achievement-section">
        <section className='row py-4'>
          <div className="section-header text-center  col-12">
              <h2>Our Achievements</h2>
          </div>
        </section>
        <Achievements />
      </main>
    </>
  )
}

export default Events