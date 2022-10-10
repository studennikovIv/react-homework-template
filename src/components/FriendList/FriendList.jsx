import styles from './friendList.module.css'
import PropTypes from "prop-types";

const FriendList = ({ friends }) => (
    <ul className={styles.friend_list}>
      {friends.map(friend => (
        <li className={styles.item} key={friend.id}>
          <span
            className={
              friend.isOnline ? styles.statusOnline : styles.statusOffline
            }
          ></span>
          <img className={styles.avatar} src={friend.avatar} alt="" width="48" />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );

  FriendList.prototype = {
    friend : PropTypes.shape({
        id : PropTypes.number.isRequired,
        isOnline : PropTypes.bool.isRequired,
        avatar : PropTypes.string.isRequired,
        name : PropTypes.string.isRequired,
    })
  }


export default FriendList;