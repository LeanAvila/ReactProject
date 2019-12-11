import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getActivities } from '../../redux/actions/activityAction'
import {PropTypes} from 'prop-types'
import Activities from './activity'


class PageActivities extends Component {
  constructor(props) {
    super(props)
    this.state = {
        activities: [],
        flag:false
    }
  }
  async componentDidMount(){
    
    let itineraryId = this.props.id;
    await this.props.getActivities(itineraryId);
    
    console.log(this.props.item, 'item from activities')
    
    this.setState({
        activities: this.props.item.activities,
        flag:this.props.item.flag
      })
  }

  render() {
    return (
       this.state.flag?
      <Activities activities = {this.props.item.activities}/>:null
    )
  }
}
PageActivities.propTypes = {
  getActivities: PropTypes.func.isRequired,
  flag:PropTypes.bool,
  item: PropTypes.array.isRequired
}
const mapStateToProps = (state) => ({
  item: state.activities
})

export default connect(mapStateToProps, { getActivities })(PageActivities);