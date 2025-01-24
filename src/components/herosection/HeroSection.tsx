import "./HeroSec.css";
import "./Team.css";
import Team from "./Team";
import Counter from "./Counter";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NoticeBoard from "../noticeboard/NoticeBoard";

const HeroSection = () => {
  const navigate = useNavigate();
  const counters = [
    { id: 1, label: "Buildings", value: 20 },
    { id: 2, label: "Servers", value: 150 },
    { id: 3, label: "Employees", value: 500 },
    { id: 4, label: "Projects Completed", value: 1200 },
  ];
  const teachers = [
    {
      id: 1,
      name: "Alice Johnson",
      subject: "Mathematics",
      image:
        "../../../public/Assets/WhatsApp Image 2025-01-20 at 2.48.59 PM.jpeg",
    },
    {
      id: 2,
      name: "Mark Smith",
      subject: "Physics",
      image:
        "../../../public/Assets/WhatsApp Image 2025-01-20 at 2.48.58 PM (2).jpeg",
    },
    {
      id: 3,
      name: "Sophia Brown",
      subject: "Chemistry",
      image:
        "../../../public/Assets/WhatsApp Image 2025-01-20 at 2.51.01 PM.jpeg",
    },
    {
      id: 4,
      name: "James Wilson",
      subject: "English",
      image:
        "../../../public/Assets/WhatsApp Image 2025-01-20 at 2.50.55 PM.jpeg",
    },
  ];

  const [modalSrc, setModalSrc] = useState<string | null>(null);

  const images = [
    "../../../public/Assets/WhatsApp Image 2025-01-20 at 2.51.08 PM.jpeg",
    "../../../public/Assets/WhatsApp Image 2025-01-20 at 2.50.57 PM (2).jpeg",
    "../../../public/Assets/WhatsApp Image 2025-01-20 at 2.51.02 PM (1).jpeg",
    "../../../public/Assets/WhatsApp Image 2025-01-20 at 2.51.05 PM.jpeg",
    "../../../public/Assets/WhatsApp Image 2025-01-20 at 2.51.08 PM (1).jpeg",
    "../../../public/Assets/WhatsApp Image 2025-01-20 at 2.51.02 PM (1).jpeg",
    "../../../public/Assets/WhatsApp Image 2025-01-20 at 2.51.05 PM.jpeg",
    "../../../public/Assets/WhatsApp Image 2025-01-20 at 2.51.08 PM (1).jpeg",
  ];
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="../../../public/Assets/c1.jpeg"
              className="d-block w-100 h-60"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="../../../public/Assets/c22.jpeg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="../../../public/Assets/c23.jpeg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="../../../public/Assets/c24.jpeg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="extra-sec">
        <h2 className="font">
          Welcome to Wakka Best CBSE Board School in India
        </h2>

        <hr className="line" />

        <div className="container text-center ">
          <div className="row">
            <div className="col">
              <img
                src="../../../public/Assets/p1.jpeg"
                className="d-block w-100 "
                alt="..."
              />
            </div>
            <div className="col">
              <h2>About </h2>
              <p className="text-md-end">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                deserunt maiores illum asperiores aliquam nobis, est excepturi
                tempore tempora mollitia distinctio ab nihil blanditiis corporis
                dicta veritatis beatae adipisci dolorem. Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Et ducimus iste repellendus
                ex voluptatem, libero quisquam, soluta architecto alias autem
                iure mollitia Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quis recusandae voluptatibus, dolore, eius amet dolores
                est voluptas in consectetur ea non consequuntur enim illo Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Repellendus
                quaerat doloremque perferendis dolor? Fuga eveniet tempora
                quisquam ducimus alias nihil, necessitatibus voluptas vero ea!
                Dolorum deserunt aliquid corporis veniam ut!veritatis ipsam
                sequi, consequatur praesentium unde. voluptas maxime vero itaque
                dicta unde. Alias, temporibus.
              </p>
              <button type="button" className="btn btn-primary" onClick={() => navigate("/about")}>
                About us
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="update">
          <p className="notice-p">
            <h1>Notice Updates</h1>
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Eligendi, aut nisi architecto
            obcaecati ea deserunt suscipit cumque necessitatibus Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Sit distinctio, dolorem
            repellat sint, aperiam molestiae quae, quo nesciunt pariatur iure id
            earum impedit illum? Hic porro Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Impedit doloremque distinctio eius,
            corrupti asperiores dolor temporibus. Architecto enim voluptates
            culpa qui aliquid, perspiciatis saepe, exercitationem voluptatibus
            dolorum Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Sint obcaecati accusantium enim rem maiores ex aspernatur architecto
            ab quod voluptatibus, nam nisi saepe aliquid molestiae ullam natus!
            Nihil, sit? Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Impedit ut illo, porro, aliquam voluptas hic dolores nobis
            libero corrupti officia tiae mollitia velit deserunt ratione
            sapiente corrupti modi! Iste, dicta earum. Voluptatum doloribus
            harum iure molestiae illum in!
          </p>
        </div>
      </div>

      <NoticeBoard />
      <section className="infrastructure-counters">
        <h2 className="section-title">Infrastructure Overview</h2>

        <Counter />
        <div className="action-btn">
          <button type="button" className="btn btn-success">
            Explore More
          </button>
        </div>
      </section>

      <Team />
    </>
  );
};

export default HeroSection;
