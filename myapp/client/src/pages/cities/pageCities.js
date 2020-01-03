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

  }
  
  async componentDidMount(){
    await this.props.getCities();

    this.setState({
      cities: this.props.item.cities,
      filteredCities: this.props.item.cities
    })
  }



  //filtro de ciudades
  filterCities = (cityFilter) => {
    let filteredCities = this.state.cities
    const expresion = new RegExp (`^${cityFilter}`,'i')

    filteredCities = filteredCities.filter((cities) => {
      var city = cities.city + ", " + cities.country
      if(expresion.test(cities.city) || expresion.test(cities.country)){
        return city
      };
    })

    this.setState({
      filteredCities
    })
  }

  render() {
    console.log(this.props);
    
    return (
      this.props.item.flag?
      <PageCities cities={this.state.filteredCities} onChange={this.filterCities} location={this.props.location}/>:null
    )
  }
}
Cities.propTypes = {
  getCities: PropTypes.func.isRequired,
  
}
const mapStateToProps = (state) => ({
  item: state.cities
})

export default connect(mapStateToProps, { getCities })(Cities);