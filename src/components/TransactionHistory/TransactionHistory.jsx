import styles from './transactionHistory.module.css';
import PropTypes from "prop-types";

const TransactionHistory = ({ items }) => (
    <table className={styles.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
  
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );


TransactionHistory.prototype = {
    items: PropTypes.shape({
        id : PropTypes.number.isRequired,
        type : PropTypes.string.isRequired,
        amount :  PropTypes.number.isRequired,
        currency :  PropTypes.string.isRequired,
}       

    )
}






  export default TransactionHistory; 