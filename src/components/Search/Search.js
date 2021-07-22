import React from 'react';
import styles from './Search.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon';
import Container from '../Container/Container';
import { withRouter } from 'react-router';

class Search extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    searchString: PropTypes.string,
    changeSearchString: PropTypes.func,
    countVisible: PropTypes.number,
    countAll: PropTypes.number,
  }

  static defaultProps = {
    text: settings.search.defaultText,
  }

  state = {
    value: this.props.searchString,
  }

  handleChange(event){
    this.setState({
      value: event.target.value,
      visibleButtons: event.target.value.length > 0,
    });
  }

  handleOK(){
    this.props.history.push(`/search/${this.state.value}`); // eslint-disable-line react/prop-types 
  }

  componentDidUpdate(prevProps){
    if(this.props.searchString != prevProps.searchString){
      this.setState({value: this.props.searchString});
    }
  }

  render() {
    const {text, countVisible, countAll} = this.props;
    const {value} = this.state;
    const {icon} = settings.search;
    const searchPhrase = this.props.history.location.pathname; // eslint-disable-line react/prop-types
    return (
      <Container>
        <div className={styles.component}>
          {console.log(searchPhrase)}
          <input
            type='text'
            placeholder={(searchPhrase.length <= 1) ? text // eslint-disable-line react/prop-types
              : (searchPhrase === '/info') ? text
                : (searchPhrase === '/faq') ? text
                  : (new RegExp('/list/', 'i').test(searchPhrase)) ? text
                    : (searchPhrase.length > 1) ? searchPhrase.slice(8) // eslint-disable-line react/prop-types
                      : text
            }
            value={value}
            onChange={event => this.handleChange(event)}
          />
          <div className={styles.buttons}>
            <Button onClick={() => this.handleOK()}><Icon name={icon} /></Button>
          </div>
          <div>
            { countVisible == countAll ? '' : `${countVisible} / ${countAll}` }
          </div>
        </div>
      </Container>
    );
  }
}

export default withRouter(Search);
