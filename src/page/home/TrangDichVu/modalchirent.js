import React,{Component} from "react"
import Form from "./../../../components/form_1/index"

export default class modalchirent extends Component{
    render(){
        return(
            <div className="py-4">
                <h1 style={{fontSize:"22px",textAlign:"center"}}>Them thong tin</h1>
                <Form/>
            </div>
        )
    }
}