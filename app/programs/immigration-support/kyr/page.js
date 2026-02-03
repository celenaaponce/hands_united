import Image from "next/image";
import classes from "./page.module.css";
import KYR from "components/kyrlayout/kyr";
import data from "components/kyrlayout/kyr.json";

export default function Inmigracion() {
  return (
    <>
      <div className={classes.headerImageContainer}>
        <Image
          src="/immigration/kyr.png"
          alt="Conocer sus derechos"
          width={400}
          height={400}
          style={{
            marginTop: "5rem",
            width: "100%",
            height: "auto",
            maxWidth: "300px",
          }}
        />
      </div>
      <div>
        <header className={classes.header}>
          <div className={classes.row}>
            <div className={`${classes.imageContainer} ${classes.hideOnSmall}`}>
              <Image
                className={classes.large}
                src="/immigration/simple.png"
                alt="Conocer sus derechos simplificado"
                width={300}
                height={300}
                style={{ marginLeft: "5rem" }}
              />
            </div>
            <div className={`${classes.imageContainer} ${classes.hideOnSmall}`}>
              <Image
                className={classes.large}
                src="/immigration/hard.png"
                alt="Conocer sus derechos completo"
                width={300}
                height={300}
                style={{ marginLeft: "5rem" }}
              />
            </div>
          </div>
        </header>
      </div>

      <header className={classes.header}>
        <div>
          {data.map((item, index) => (
            <KYR key={index} {...item} />
          ))}
        </div>
      </header>
    </>
  );
}
