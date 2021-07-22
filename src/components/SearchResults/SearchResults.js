import React, { Component } from 'react';
import styles from '../Column/Column.scss';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import Container from '../Container/Container';
import { settings } from '../../data/dataStore';


export default class SearchResults extends Component {
    static propTypes = {
      title: PropTypes.node,
      cards: PropTypes.array,
      icon: PropTypes.node,
      map: PropTypes.func,
      addCard: PropTypes.func,
    };

    static defaultProps = {
      icon: settings.defaultColumnIcon,
    }

    render() {
      const { title, cards, icon } = this.props; // eslint-disable-line no-unused-vars
      return (
        <Container>
          <div className={styles.component}>
            <section >
              <h3 className={styles.title}>{title}
                <span className={styles.icon}>
                  <Icon name={icon} />
                </span></h3>
              {cards.map(cardData => (
                <div key = {cardData.id}>
                  <Card key={cardData.id} {...cardData} />
                  <p>found in: {cardData.columnId}</p>
                </div>
              ))}
            </section>
          </div>
        </Container>
      );
    }
}