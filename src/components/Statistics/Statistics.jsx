import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics ({good, neutral, bad, total, positivePercentage }) {
    
    return (
        <>
        <h2 className={styles.title}>Statistic</h2>
        <p className={styles.feedback}>Good: {good}</p>
        <p className={styles.feedback}>Neurtral: {neutral}</p>
        <p className={styles.feedback}>Bad: {bad}</p>
        <p className={styles.feedback}>Total: {total}</p>
        <p className={styles.feedback}>Positive feedback: {positivePercentage} %</p>
        </>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}
