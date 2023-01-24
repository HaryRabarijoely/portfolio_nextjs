import Image from 'next/image';
import styles from '../styles/Titlebar.module.css';

const Titlebar = () => {
  return (
    <section className={styles.titlebar}>
      <div className={styles.items}>
        <Image
          src="/vscode_icon.svg"
          alt="VSCode Icon"
          height={15}
          width={15}
        />
        <p>Fichier</p>
        <p>Edition</p>
        <p>Affichage</p>
        <p>Atteindre</p>
        <p>Exécuter</p>
        <p>Terminal</p>
        <p>Aide</p>
      </div>
      <p className={styles.title}>Hary ANDRIANARISOA - Visual Studio Code</p>
      <div className={styles.windowButtons}>
        <span className={styles.minimize}></span>
        <span className={styles.maximize}></span>
        <span className={styles.close}></span>
      </div>
    </section>
  );
};

export default Titlebar;
