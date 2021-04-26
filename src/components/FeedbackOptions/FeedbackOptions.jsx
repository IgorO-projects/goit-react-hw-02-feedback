import Button from '../Button';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

export default function FeedbackOptions ({ options, onLeaveFeedback }) {
    const arrOptions = Object.keys(options);

    return (
        <ul className={styles.list}>
            {arrOptions.map(option => {
                return (
                    <li 
                        key={option}
                        className={styles.list__item}>
                        <Button 
                        option={option}
                        onLeaveFeedback={onLeaveFeedback}
                        />
                    </li>
                )
            })}   
        </ul>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}