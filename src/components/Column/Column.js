import React, { Component } from 'react';
import styles from './Column.scss';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';


export default class Column extends Component {
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
      const {addCard,title, cards, icon} = this.props; // eslint-disable-line no-unused-vars
      return (
        <div className = {styles.component}>
          <section >
            <h3 className = {styles.title}>{this.props.title}
              <span className = {styles.icon}>
                <Icon name = {icon}/> 
              </span></h3>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
            <Creator text={settings.cardCreatorText} action={addCard}/>
          </section>
        </div>
      );
    }
}
