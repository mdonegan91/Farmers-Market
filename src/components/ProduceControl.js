import React from "react";
import ProduceList from "./ProduceList";

class ProduceControl extends React.Component{

  constructor(props) {
      super(props);
      this.state = {
        formVisibleOnPage: false
      };
    }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    return (
      <React.Fragment>
        <ProduceList />
      </ React.Fragment>
    );
  }
}

export default ProduceControl;