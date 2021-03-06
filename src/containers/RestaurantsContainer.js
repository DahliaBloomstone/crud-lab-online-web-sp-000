import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

    render() {
        return (
        <div>
            <RestaurantInput addRestaurant={this.props.addRestaurant} />
            <Restaurants
                restaurants={this.props.restaurants}
                deleteRestaurant={this.props.deleteRestaurant}
            />
        </div>
        )
    }
}


const mapStateToProps = state => ({ restaurants: state.restaurants })

const mapDispatchToProps = dispatch => ({
    addRestaurant: text => dispatch({ type: 'ADD_RESTAURANT', text }),
    deleteRestaurant: id => dispatch({ type: 'DELETE_RESTAURANT', id })
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)

//Next, you will build out the RestaurantsContainer component that will connect to Redux and pass the appropriate props down to its children. You will then want to create a Restaurants component that renders a list of restaurants, and a Restaurant component that is responsible for each individual restaurant.