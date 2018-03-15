import React, {Component} from "react";
import TitleBar from '../components/TitleBar';
import JobsList from '../components/JobsList'

class JobsContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      jobs: []
    }
  }

  render(){
    return (
      <div>
        "Hello World"
        <TitleBar />
        <JobsList />
      </div>
    )

  }


}











export default JobsContainer;
