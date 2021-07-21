import React, { Component } from 'react';
import styles from './Column.scss';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';

export default class Column extends Component {
    state = {
        cards: this.props.cards || [],
      }
      addCard(title){
        this.setState(state => (
          {
            cards: [
              ...state.cards,
              {
                key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
                title,
              }
            ]
          }
        ));
      }
    render() {
        return (
            <div className = {styles.component}>
                <section >
                    <h3 className = {styles.title}>{this.props.title}
                    <span className = {styles.icon}>
                       <Icon name = {this.props.icon}/> 
                    </span></h3>
                    {this.state.cards.map(({key, ...cardProps}) => (
                        <Card key={key} {...cardProps} />
                    ))}
                    <div>
                        <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
                    </div>
                </section>
            </div>
        )
    }
}
