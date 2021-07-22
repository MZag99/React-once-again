import {connect} from 'react-redux';
import { createActionAddCard, getCardsForSearchResults } from '../../redux/cardsRedux';
import SearchResults from './SearchResults';


const mapStateToProps = (state, props) => ({
  title: `Search results for "${props.match.params.id}"`,
  cards: getCardsForSearchResults(state, props.match.params.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);