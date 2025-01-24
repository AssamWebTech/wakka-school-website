import image1 from "../../public/Assets/notice.jpg";
import { Teacher } from "../models/types";

export const teachers: Teacher[] = [
  {
    id: 1,
    name: "Mr. John Doe",
    subject: "Mathematics",
    bio: "Passionate about solving problems and making math enjoyable for all students.",
    image: image1,
  },
  {
    id: 2,
    name: "Ms. Jane Smith",
    subject: "Science",
    bio: "Dedicated to inspiring curiosity and fostering a love for science.",
    image: image1,
  },
  {
    id: 3,
    name: "Mrs. Emily Johnson",
    subject: "English",
    bio: "Loves bringing stories to life and enhancing communication skills.",
    image: image1,
  },
];
