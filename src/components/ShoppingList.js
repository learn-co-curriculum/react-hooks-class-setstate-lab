import React from "react";
import Item from "./Item";

class ShoppingList extends React.Component {
  state = {
    selectedCategory: "All",
  };

  handleCategoryChange = (event) => {
    this.setState({ selectedCategory: event.target.value });
  };

  getItemsToDisplay() {
    return this.props.items
      .filter(
        (item) =>
          this.state.selectedCategory === "All" ||
          item.category === this.state.selectedCategory
      )
      .map((item) => (
        <Item key={item.id} name={item.name} category={item.category} />
      ));
  }

  render() {
    return (
      <div className="ShoppingList">
        <div className="Filter">
          <select name="filter" onChange={this.handleCategoryChange}>
            <option value="All">Filter by category</option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div>
        <ul className="Items">{this.getItemsToDisplay()}</ul>
      </div>
    );
  }
}

export default ShoppingList;
