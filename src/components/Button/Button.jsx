import styles from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button ({ option, onLeaveFeedback }) {
    const increaseFeedback = () => onLeaveFeedback(option);

    return (
        <button 
        className={styles.button}
        onClick={increaseFeedback}
        >
        {option}
        </button>
    );
};

Button.defaultProps ={
    option: 'button',
}

Button.propTypes = {
    option: PropTypes.string,
    onLeaveFeedback: PropTypes.func.isRequired,
}