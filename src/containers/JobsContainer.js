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

  componentDidMount() {
    // const url = "https://"+ username +"@wwww.reed.co.uk/api/1.0/search?keywords=developer&location=edinburgh";//
    const url = "https://wwww.reed.co.uk/api/1.0/search?keywords=developer&location=edinburgh";//
    const request = new XMLHttpRequest();
    request.open("GET", url);
    const username = "8eab5cd8-e801-4755-b3ee-2918f46a51e9:"
    // request.setRequestHeader( 'Content-Type',   '' );
    // request.setRequestHeader( 'Accept', 'application/json' );
    request.setRequestHeader('Authorization', 'Basic ' + username);
    // request.setRequestHeader("auth", "8eab5cd8-e801-4755-b3ee-2918f46a51e9")
    request.addEventListener("load", () => {
      // console.log("Loaded");
      if(request.status !== 200) return;
      const jsonString = request.responseText;
      const jobsReturned = JSON.parse(jsonString);
      // console.log(jobsReturned);
      this.setState({
        jobs: jobsReturned
      })
    })
    request.send();

  }

  render(){
    return (
      <div>
        <TitleBar />
        <JobsList />
      </div>
    )

  }


}











export default JobsContainer;
