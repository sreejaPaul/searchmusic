import React from 'react';
import Searchbar from "./Searchbar";
import Result from './Result';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      enterQuery:"",
    }
  }
  searchEnter = (item)=>{
    this.setState({enterQuery: item});
  }
  render(){
    return (
      <div className="App">
        <Searchbar query={this.searchEnter}/>
        {this.state.enterQuery!=="" ?
          <Result query={this.state.enterQuery}/>
        :""}
      </div>
    );
  }
}

export default App;
