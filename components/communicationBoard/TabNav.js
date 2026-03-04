import styles from "./communicationBoard.module.css";

export default function TabNav({ tabs, activeTab, setActiveTab }) {
  return (
    <div className={styles.tabNav}>
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`${styles.tabButton} ${
            activeTab === tab.id ? styles.active : ""
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          <div className={styles.emoji}>{tab.emoji}</div>
          <div className={styles.label}>{tab.label}</div>
        </button>
      ))}
    </div>
  );
}