import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCities } from '../../redux/actions/action'
import {PropTypes} from 'prop-types'
import PageCities from './cities'

class Cities extends Component {
  constructor(props) {
    super(props)
    this.state = {
        cities: [],
        filteredCities: []
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.componentWillMount = this.componentWillMount.bind(this)
  }
  async componentDidMount(){
    await this.props.getCities();

  }
  componentWillMount() {
    this.setState({
      cities: this.props.item,
      filteredCities: this.props.item
    })
  }

  filterCities = (cityFilter) => {
    let filteredCities = this.state.cities
    const expresion = new RegExp (`^${cityFilter}`,'i')

    filteredCities = filteredCities.filter((cities) => {
      var city = cities.city + ", " + cities.country
      return expresion.test(city);
    })

    this.setState({
      filteredCities
    })
  }

  render() {
    return (
      <PageCities cities={this.state.filteredCities} onChange={this.filterCities} />
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