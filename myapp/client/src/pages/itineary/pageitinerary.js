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
    this.componentDidMount = this.componentDidMount.bind(this)
    // this.componentWillMount = this.componentWillMount.bind(this)
  }
  async componentDidMount(){
    let cityId = this.props.match.params.id;
    await this.props.getItinerary(cityId);
    console.log(this.props.item)

    this.setState({
      itinerary: this.props.item.cities
    })
  }

  render() {
    return (
      <Itinerary itinerary = {this.state.itinerary}/>
    )
  }
}
PageItinerary.propTypes = {
  getItinerary: PropTypes.func.isRequired,
  item: PropTypes.array.isRequired
}
const mapStateToProps = (state) => ({
  item: state.itinerary
})

export default connect(mapStateToProps, { getItinerary })(PageItinerary);