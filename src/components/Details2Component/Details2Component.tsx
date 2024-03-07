import listStyle from '../../assets/Ellipse 7570.svg'
import styles from './Details2Component.module.scss'
const Details2Component = () => {
  return (
    <div className={styles.Details2Styles}>
      <p>
        In this event, we've curated a series of engaging, interactive sessions
        led by our esteemed panel of speakers. This is your opportunity to dive
        deep into the nuances of SaaS business strategies and ask direct
        questions about:
      </p>
      <div className={styles.liststyle}>
        <div className={styles.list}> <img src={listStyle} alt="list type"/><span className={styles.listText}>Product strategies</span></div>
        <div className={styles.list}> <img src={listStyle} alt="list type"/><p className={styles.listText}>Future-Proofing your SaaS model</p></div>
        <div className={styles.list}> <img src={listStyle} alt="list type"/><p className={styles.listText}>Sustainable growth mastery</p></div>
        <div className={styles.list}> <img src={listStyle} alt="list type"/><p className={styles.listText}>Expansion into new geographies</p></div>
        <div className={styles.list}> <img src={listStyle} alt="list type"/><p className={styles.listText}>Scaling techniques</p></div>
        <div className={styles.list}> <img src={listStyle} alt="list type"/><p className={styles.listText}>Product strategies</p></div>
      </div>
      <p>
        In this event, we've curated a series of engaging, interactive sessions
        led by our esteemed panel of speakers. This is your opportunity to dive
        deep into the nuances of SaaS business strategies and ask direct
        questions about:
      </p>
    </div>
  );
};
export default Details2Component;
