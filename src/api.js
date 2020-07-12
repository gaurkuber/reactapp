import React,{Component} from 'react';
import Display from './display';

const getUrl = "http://localhost:9990/getDocs?search='sanjay'";

class API extends Component{
    constructor(){
        super()
        this.state = {
            myArr: []
        }
    }

    render(){
        console.log(this.state.myArr);
        return(
            <div>
                <Display userdata={this.state.myArr}></Display>
            </div>
        )
    }

    componentDidMount(){
        fetch(getUrl,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({myArr:data})
        })
    }
}

export default API;