import styles from './Section.module.css';
import PropTypes from 'prop-types';

export default function Section ({ title, children })  {

    return (
        <div className={styles.section}>
            <h2 className={styles.title}>{title}</h2>
            {children}
        </div>
    );
};

Section.defaultProps = {
    title: 'Waiting for answers :)'
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}