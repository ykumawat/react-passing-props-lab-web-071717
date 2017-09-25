import React, { Component }  from 'react';

import Filter from './Filter.js';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {
  return (
    <div className="fruit-basket">
      <Filter
        handleChange={props.updateFilterCallback}
        filters={props.filters}
      />
      <FilteredFruitList
        filter={props.currentFilter}
        fruit={props.fruit}
      />
    </div>
  )
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: undefined
}

export default FruitBasket
