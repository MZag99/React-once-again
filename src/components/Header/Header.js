import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore';

export default class Header extends Component {
  render() {
    return (
      <header className = {styles.component}>
        <Container>
          <div className = {styles.wrapper}>
            <nav>
              <NavLink exact to='/'>Home</NavLink>
              <NavLink exact to='/info'>Info</NavLink>
              <NavLink exact to='/faq'>FAQ</NavLink>
            </nav>
            <Link className = {styles.logo} to = '/'>
              <Icon name = {settings.headerIcon}/>
            </Link>
          </div>
        </Container>
      </header>
    );
  }
}

