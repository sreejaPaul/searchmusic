import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './searchbar.css';

class Searchbar extends React.Component{
    constructor(){
        super();
        this.state={
            searchInput:"",
            sendinputvalue: "",
        }
    }
    
    serach = (e)=>{
        this.setState({searchInput: e.target.value});
        
    }
    checkEnter = (event)=>{
        if(event.charCode === 13){
            this.sendvalue();
        }
    }
    sendvalue = ()=>{
        this.setState({sendinputvalue: this.state.searchInput},function(){
            this.props.query(this.state.sendinputvalue);
        });
    }
    render(){
        return(
            <div id="searchdiv">
                <div id="title"><h1>{"Search Artist"}</h1></div>
                <div id="searchbar">
                    <input type="text" id="inputbox" placeholder="Enter artist name to search" onChange ={(e)=>this.serach(e)} onKeyPress={(e)=>this.checkEnter(e)}/>
                </div>
                <div id="button">
                    <button id="searchbtn" onClick={this.sendvalue}><FontAwesomeIcon icon={faSearch} size="lg"/></button>
                </div>
            </div>
        )
    }
}

export default Searchbar;
