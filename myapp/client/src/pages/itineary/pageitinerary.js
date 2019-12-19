import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getItinerary } from '../../redux/actions/itineraryAction'
import {PropTypes} from 'prop-types'
import Itinerary from './itinerary'

class PageItinerary extends Component {
  constructor(props) {
    super(props)
    this.state = {
        itinerary: []
    }
    
  }
  async componentDidMount(){
    let cityId = this.props.match.params.id;
    await this.props.getItinerary(cityId);
    console.log(this.props.item)
  }

  render() {
    console.log(this.props.item.flag, 'flag de itineraryPage')
    return (
      this.props.item.flag?
      <Itinerary itinerary = {this.props.item.itineraries}/>: null
    )
  }
}
PageItinerary.propTypes = {
  getItinerary: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  item: state.itinerary
})

export default connect(mapStateToProps, { getItinerary })(PageItinerary);