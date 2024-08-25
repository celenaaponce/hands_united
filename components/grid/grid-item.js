import Link from "next/link";
import Image from "next/image";
import AudioPlayer from "components/audioPlayer/audioPlayer";
import classes from "./grid-item.module.css";

export default function GridItem({ id, name, description, image, alt = null, website = null, audio=null }) {
  return (
    <article className={classes.grid}>
      <header>
        <div className={classes.image}>
          <AudioPlayer
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignSelf: "flex-end",
                    marginBottom: ".5rem"
                  }}
            src={audio}
          />
          <Image src={image} alt={name} width={250} height={250} />
        </div>
        <div className={classes.headerText}>
          <h2>{name}</h2>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{description}</p>
        <div className={classes.cta}>
          {!alt && !website && <Link href={`/ASL/${name}`}>Ver {name}</Link>}
          {!website && alt && <Link href={`/ASL/${name}`}>{alt}</Link>}
          {website && <a target="_blank" href={website}>Ver {name}</a>}
        </div>
      </div>
    </article>
  );
}
