"use client";

import styles from "./page.module.css";
import Link from "next/link";
import VideoGrid from "../../../../components/VideoGrid/VideoGrid.js";

const videos = [
  {
    title: "американские жесты семья",
    url: "https://youtu.be/mAr5VHF-5Yg",
    thumbnail: "https://i.ytimg.com/vi/mAr5VHF-5Yg/maxresdefault.jpg",
    duration: "03:35",
  },
    {
    title: "американские жесты семья предложения",
    url: "https://youtu.be/b2YIMrZmXGY",
    thumbnail: "https://i.ytimg.com/vi/b2YIMrZmXGY/maxresdefault.jpg",
    duration: "02:38",
  },
];

export default function RussianASLPage() {
  return (
    <div className={styles.container}>
      <Link href="/learn-asl/russian" className={styles.backLink}>
        ← Back to ASL Classes
      </Link>

      <h1 className={styles.title}>
        ASL Videos in Russian | Видеоролики по американскому жестовому языку на
        русском языке
      </h1>

      <p className={styles.subtitle}>
        American Sign Language lessons taught through Russian for families with
        Deaf or hard of hearing children.
      </p>

      <p className={styles.subtitle}>
        Занятия по американскому жестовому языку на русском языке для семей с
        глухими или слабослышащими детьми.{" "}
      </p>

      <VideoGrid videos={videos} />
    </div>
  );
}

// export default function HaitianCreoleASLPage() {
//   return (
//     <div className={styles.container}>
//       {/* Back button */}
//       <Link href="/learn-asl/haitian-creole/" className={styles.backLink}>
//         ← Back to ASL programs | Retounen nan pwogram ASL yo
//       </Link>

//       <h1 className={styles.title}>ASL Classes in Haitian Creole</h1>

//       <h1 className={styles.title}>Klas ASL an Kreyòl Ayisyen</h1>
//       <p className={styles.subtitle}>
//         Free American Sign Language lessons taught through Haitian Creole for
//         Haitian families with Deaf or hard of hearing children. These lessons
//         focus on practical vocabulary families can use in everyday communication
//         at home.
//       </p>

//       <p className={styles.subtitle}>
//         Leson gratis Lang Siy Ameriken yo anseye an Kreyòl Ayisyen pou fanmi
//         ayisyen ki gen timoun soud oswa ki gen pwoblèm pou tande. Leson sa yo
//         konsantre sou yon vokabilè pratik fanmi yo ka itilize nan kominikasyon
//         yo chak jou lakay yo.
//       </p>

//       <div className={styles.grid}>
//         {videos.map((video, index) => (
//           <a
//             key={index}
//             href={video.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.card}
//           >
//             <div className={styles.thumbnailContainer}>
//               <img
//                 src={video.thumbnail}
//                 alt={video.title}
//                 className={styles.thumbnail}
//               />
//               <span className={styles.duration}>{video.duration}</span>
//             </div>

//             <div className={styles.cardTitle}>{video.title}</div>
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// }
