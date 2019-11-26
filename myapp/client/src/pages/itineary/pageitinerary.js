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
    this.componentWillMount = this.componentWillMount.bind(this)
  }
  componentDidMount(){
    this.props.getItinerary();

  }
  componentWillMount() {
    this.setState({
      itinerary: this.props.item
    })
  }

  render() {
    return (
      <Itinerary itinerary = {this.state.itinerary}/>
    )
  }
}
Cities.propTypes = {
  getCities: PropTypes.func.isRequired,
  item: PropTypes.array.isRequired
}
const mapStateToProps = (state) => ({
  item: state.itinerary
})

export default connect(mapStateToProps, { getItinerary })(PageItinerary);