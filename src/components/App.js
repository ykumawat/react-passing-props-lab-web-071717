import React from 'react';

import FruitBasket from './FruitBasket';

// const App = () => <FruitBasket />;

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruits();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({filters}));
  }

  fetchFruits = () => {
    fetch('/api/fruit')
    .then(response => response.json())
    .then(fruit => this.setState({fruit}))
  }

  updateFilter = event => {
    console.log('update filter to: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }


  render() {
    return (
      <div><FruitBasket
        fruit={this.state.fruit}
        filter={this.state.filters}
        currentFilter={this.state.currentFilter}
        onUpdate={this.updateFilter}
        />
      </div>
    )
  }
}
