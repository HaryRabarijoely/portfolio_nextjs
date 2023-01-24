import styles from '../styles/ContactCode.module.css';

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;website:{' '}
        <a href="https://portfolio-hary-andrianarisoa.vercel.app/" target="_blank" rel="noopener">
          Hary ANDRIANARISOA 
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;email:{' '}
        <a
          href="mailto:rabonia@hotmail.com"
          target="_blank"
          rel="noopener"
        >
          rabonia@hotmail.com
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;github:{' '}
        <a href="https://github.com/HaryRabarijoely" target="_blank" rel="noopener">
          HaryRabarijoely
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;linkedin:{' '}
        <a
          href="www.linkedin.com/in/hary-andrianarisoa-b2bb8a221"
          target="_blank"
          rel="noopener"
        >
          Hary ANDRIANARISOA
        </a>
        ;
      </p>     
                 
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
