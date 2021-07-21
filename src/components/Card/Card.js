import React from 'react';
import styles from './Card.scss';

const Card = props => {
    return (
        <div className = {styles.component}>
            <section>
                <h3>{props.title}</h3>
            </section>
        </div>
    )
}

export default Card
