import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCities } from '../../redux/actions/action'
import {PropTypes} from 'prop-types'
import PageCities from './cities'

class Cities extends Component {
  constructor(props) {
    super(props)
    this.state = {
        Cities: [],
      filteredCities: []
    }
  }
  componentDidMount(){
    this.props.getCities();
  }
  componentWillMount() {
    this.setState({
      Cities: this.props.item,
      filteredCities: this.props.item
    })
  }

  filterCities = (cityFilter) => {
    let filteredCities = this.state.Cities
    const expresion = new RegExp (`^${cityFilter}`,'i')
    filteredCities = filteredCities.filter((city) => {
      // let cityName = city.city.toLowerCase() + city.country.toLowerCase()
      // return cityName.indexOf(
      //   cityFilter.toLowerCase()) !== -1
      return expresion.test(city.city);
    })
    this.setState({
      filteredCities
    })
  }

  render() {
    return (
      <PageCities Cities={this.state.filteredCities} onChange={this.filterCities} />
    )
  }
}
Cities.propTypes = {
  getCities: PropTypes.func.isRequired,
  item: PropTypes.array.isRequired
}
const mapStateToProps = (state) => ({
  item: state.cities
})

export default connect(mapStateToProps, { getCities })(Cities);