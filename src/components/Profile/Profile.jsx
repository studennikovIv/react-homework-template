import PropTypes from "prop-types";
import styles from './profile.module.css';

const  Profile = ({username,tag,location,stats,avatar}) =>{
    
  return  <div className={styles.profile}>
    <div className={styles.description}>
        <img src={avatar} alt="User avatar"className={styles.avatar}/>
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
        <li>
            <span className={styles.label}>followers</span>
            <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li>
            <span className={styles.label}>views</span>
            <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li>
            <span className={styles.label}>likes</span>
            <span className={styles.quantity}>{stats.likes}</span>
        </li>
    </ul>

  </div>
}

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  };


export default Profile;


