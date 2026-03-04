import styles from "./communicationBoard.module.css";
import TileGrid from "./TileGrid";

export default function TabContent({ tab, secondaryLang }) {
  return (
    <div className={styles.content}>
      {tab.sections.map((section, index) => (
        <div key={index} className={styles.section}>
          {section.title && (
            <h2 className={styles.sectionTitle}>{section.title}</h2>
          )}
          <TileGrid
            items={section.items}
            secondaryLang={secondaryLang}
          />
        </div>
      ))}
    </div>
  );
}