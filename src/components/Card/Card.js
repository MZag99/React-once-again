import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

const Card = ({title}) => {
  return (
    <div className = {styles.component}>
      <section>
        <h3>{title}</h3>
      </section>
    </div>
  );
};
Card.propTypes = {
  title: PropTypes.node,
};

export default Card;
