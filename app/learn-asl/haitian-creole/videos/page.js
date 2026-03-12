"use client";

import styles from "./page.module.css";
import Link from "next/link";
import VideoGrid from "../../../../components/VideoGrid/VideoGrid.js";

const videos = [
  {
    title: "Fanmi — Lang Siy Ameriken (ASL)",
    url: "https://www.youtube.com/watch?v=FIlvFebo0dA",
    thumbnail: "https://i.ytimg.com/vi/FIlvFebo0dA/maxresdefault.jpg",
    duration: "24:29",
  },
  {
    title: "Manje — Lang Siy Ameriken (ASL)",
    url: "https://www.youtube.com/watch?v=Ct4wMaKpBMs",
    thumbnail: "https://i.ytimg.com/vi/Ct4wMaKpBMs/maxresdefault.jpg",
    duration: "50:30",
  },
  {
    title: "Orè ak Lè (Pati 1) — Lang Siy Ameriken (ASL)",
    url: "https://www.youtube.com/watch?v=kULoqH-ZrI4",
    thumbnail: "https://i.ytimg.com/vi/kULoqH-ZrI4/maxresdefault.jpg",
    duration: "43:47",
  },
  {
    title: "Orè ak Lè (Pati 2) — Lang Siy Ameriken (ASL)",
    url: "https://www.youtube.com/watch?v=Mm0_6Lmb-Rg",
    thumbnail: "https://i.ytimg.com/vi/Mm0_6Lmb-Rg/maxresdefault.jpg",
    duration: "57:07",
  },
  {
    title: "Emosyon — Lang Siy Ameriken (ASL)",
    url: "https://www.youtube.com/watch?v=O7gE2DwzkcE",
    thumbnail: "https://i.ytimg.com/vi/O7gE2DwzkcE/maxresdefault.jpg",
    duration: "48:29",
  },
  {
    title: "Revizyon — Lang Siy Ameriken (ASL)",
    url: "https://youtu.be/Q9eZSoiomqU",
    thumbnail: "https://i.ytimg.com/vi/Q9eZSoiomqU/maxresdefault.jpg",
    duration: "36:01",
  },
];

export default function HaitianCreoleASLPage() {
  return (
    <div className={styles.container}>
      <Link href="/learn-asl/haitian-creole" className={styles.backLink}>
        ← Back to ASL Classes
      </Link>

      <h1 className={styles.title}>ASL Classes in Haitian Creole | Klas ASL an Kreyòl Ayisyen</h1>
      

      <p className={styles.subtitle}>
        American Sign Language lessons taught through Haitian Creole for
        families with Deaf or hard of hearing children.
      </p>

      <p className={styles.subtitle}>
        Leson Lang Siy Ameriken ki anseye an Kreyòl Ayisyen pou fanmi ki gen
        timoun soud oswa ki gen pwoblèm pou tande.
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
