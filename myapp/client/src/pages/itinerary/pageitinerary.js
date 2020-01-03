import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getItinerary } from '../../redux/actions/itineraryAction'
import { getCity } from '../../redux/actions/action'
import {PropTypes} from 'prop-types'
import PageItineraries from './pageItineraries'

class PageItinerary extends Component {
  constructor(props) {
    super(props)
    this.state = {
        itinerary: []
    }
    
  }
  async componentDidMount(){
    let cityId = this.props.match.params.id;
    this.props.getCity(cityId)
    await this.props.getItinerary(cityId);
    console.log(this.props.item)
  }

  render() {
    console.log(this.props.city, 'flag de itineraryPage')

    return (
      (this.props.item.flag && this.props.city.flag)?
      <PageItineraries itinerary = {this.props.item.itineraries} city={this.props.city.city} location={this.props.location}/>: null
    )
  }
}
PageItinerary.propTypes = {
  getItinerary: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  item: state.itinerary,
  city: state.cities
})

export default connect(mapStateToProps, { getItinerary, getCity })(PageItinerary);