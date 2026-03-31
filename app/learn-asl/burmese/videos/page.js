"use client";

import styles from "./page.module.css";
import Link from "next/link";
import VideoGrid from "../../../../components/VideoGrid/VideoGrid.js";

const videos = [
  {
    title: "ASL မိသားစု အမှတ်အသားများ",
    url: "https://youtu.be/-53DuX4mIyU?si=_YThbTTecQFP47xo",
    thumbnail: "https://i.ytimg.com/vi/-53DuX4mIyU/maxresdefault.jpg",
    duration: "46:00",
  },
  
];

export default function BurmeseASLPage() {
  return (
    <div className={styles.container}>
      <Link href="/learn-asl/burmese" className={styles.backLink}>
        ← Back to ASL Classes
      </Link>

      <h1 className={styles.title}>ASL Classes in Burmese | မြန်မာဘာသာဖြင့် အမေရိကန် လက်အမူအရာ ဘာသာသင်တန်းများ</h1>
      

      <p className={styles.subtitle}>
        American Sign Language lessons taught through Burmese for
        families with Deaf or hard of hearing children.
      </p>

      <p className={styles.subtitle}>
        နားမကြားသောကလေးများပါဝင်သည့် မိသားစုများအတွက် မြန်မာဘာသာဖြင့် သင်ကြားပို့ချသည့် အမေရိကန် လက်အမူအရာ ဘာသာ သင်ခန်းစာများ။
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
