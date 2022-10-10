import styles from './statistics.module.css'
import PropTypes from "prop-types";


const Statistics = ({ title, stats }) => (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
  
      <ul className={styles.stat_list}>
        {stats.map(stat => (
          <li className={styles.item} key={stat.id}>
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );


  Statistics.prototype = {
    title : PropTypes.string.isRequired,
    stats : PropTypes.shape({
      id : PropTypes.number.isRequired,
      label : PropTypes.string.isRequired,
      percentage : PropTypes.number.isRequired
    })
  }

  
export default Statistics;