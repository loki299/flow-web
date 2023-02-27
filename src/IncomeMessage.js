import React from "react";

class IncomeMessage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="income message">
                {this.props.content}
            </div>
        );
    };
};

export default IncomeMessage;