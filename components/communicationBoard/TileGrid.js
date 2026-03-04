import Image from "next/image";
import styles from "./communicationBoard.module.css";
import { translations } from "./translations";

export default function TileGrid({ items, secondaryLang }) {
  const getText = (key, lang) => {
    return translations[key]?.[lang] || translations[key]?.en || "";
  };

  return (
    <div className={styles.grid}>
      {items.map((item, index) => {
        const translation = translations[item.textKey];
        const isFlag = !!translation?.flag;

        return (
          <div
            key={index}
            className={`${styles.tile} ${
              isFlag ? styles.flagTile : ""
            }`}
          >
            {isFlag ? (
              <>
                {/* 75% FLAG */}
                <div className={styles.flagTop}>
                  <span className={styles.flagEmoji}>
                    {translation.flag}
                  </span>
                </div>

                {/* 25% COUNTRY NAME */}
                <div className={styles.flagBottom}>
                  {translation.en}
                </div>
              </>
            ) : (
              <>
                {/* NORMAL IMAGE TILE */}
                {item.image && (
                  <div className={styles.imageWrapper}>
                    <Image
                      src={item.image}
                      alt={getText(item.textKey, "en")}
                      width={400}
                      height={400}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                )}

                <div
                  className={`${styles.tileText} ${
                    secondaryLang
                      ? styles.bilingual
                      : styles.singleLanguage
                  }`}
                >
                  <span className={styles.primaryText}>
                    {getText(item.textKey, "en")}
                  </span>

                  <span
                    className={`${styles.secondaryText} ${
                      !secondaryLang ? styles.hidden : ""
                    }`}
                  >
                    {secondaryLang
                      ? getText(item.textKey, secondaryLang)
                      : ""}
                  </span>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}