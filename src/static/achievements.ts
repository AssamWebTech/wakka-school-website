import { Achievement } from "../models/types";
import image1 from '../../public/Assets/WhatsApp Image 2025-01-20 at 2.48.54 PM.jpeg';
import image2 from '../../public/Assets/WhatsApp Image 2025-01-20 at 2.48.58 PM (3).jpeg';
import image3 from '../../public/Assets/WhatsApp Image 2025-01-20 at 2.50.59 PM.jpeg';
import image4 from '../../public/Assets/WhatsApp Image 2025-01-20 at 2.50.55 PM.jpeg';

export const achievements: Achievement[] = [
    {
        id: 1,
        name: 'John Doe',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum molestias ipsum cum quaerat, adipisci ducimus, sed at, fugiat deserunt repellendus rerum iste hic pariatur omnis vero. Quas ipsa accusantium ipsum!',
        image: image1
    },
    {
        id: 2,
        name: 'Jane Smith',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum molestias ipsum cum quaerat, adipisci ducimus, sed at, fugiat deserunt repellendus rerum iste hic pariatur omnis vero. Quas ipsa accusantium ipsum!',
        image: image2
    },
    {
        id: 3,
        name: 'Michael Brown',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum molestias ipsum cum quaerat, adipisci ducimus, sed at, fugiat deserunt repellendus rerum iste hic pariatur omnis vero. Quas ipsa accusantium ipsum!',
        image: image3
    },
    {
        id: 4,
        name: 'Sarah Johnson',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum molestias ipsum cum quaerat, adipisci ducimus, sed at, fugiat deserunt repellendus rerum iste hic pariatur omnis vero. Quas ipsa accusantium ipsum!',
        image: image4
    },
]