import React, { Component } from 'react';
import MenuItem from './MenuItem';
import DISHES from '../../data/dishes';
import DishDetails from './DishDetails';
import { Button, CardGroup, Modal, ModalFooter } from 'reactstrap';

// 1. Menu File e Ami data ta anlam and then useState e nilam and array bind kore ekekta element ke fetch korlam and then 
// then <MenuItem/> er through te represent korbo.
class Menu extends Component {
  state = {
    dishes: DISHES,
    selectedDish: null,
    modalOpen: false,
  }

  // const [dishes]= useState(DISHES);
  // const [selectedDish,setSelectedDish]=useState(null); // 5. When clicked on a specific item.
  onSelectDish = (dish) => { // 6
    // setSelectedDish(dish);
    this.setState({
      selectedDish: dish,
      modalOpen: true,
    });
  };

  // console.log(selectedDish);

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }

  render() {
    const menu = this.state.dishes.map((dish) => {
      return <MenuItem item={dish} onSelectDish={this.onSelectDish} key={dish.id} />; // 6. passing onSelectDish to MenuItem.js
    }); // Check Menuitem for step 7

    const dishDetail = this.state.selectedDish ? (
      <DishDetails dish={this.state.selectedDish} toggleModal={this.toggleModal} />  // Pass toggleModal to DishDetails
    ) : null; // 10. Either I click or not, DishDetails always shows. bc there wasnt any conditions set. Hence, This condition is set. 

    return (
      <div className='container'>
        <div className='row'>
          <CardGroup>
            {menu}
          </CardGroup>
          <Modal isOpen={this.state.modalOpen} toggle={this.toggleModal}>
            {dishDetail}
            <ModalFooter>
              <Button color='primary' onClick={this.toggleModal}>
                Close
              </Button>
            </ModalFooter>
          </Modal>

          {/* <div className='col-7'><DishDetails dish={selectedDish}/></div> */}   {/* 9. dish={selectedDish} */}
          {/* <div className='col-7'>
            {dishDetail}
          </div>  */}   {/* 11. {dishDetail} added instead of step 9..... For STEP12 go DishDetail.js */}
        </div>
      </div>
    );
  }
}

export default Menu;
