import React from "react";

class OutcomeMessage extends React.Component{
    constructor(props){
        super(props);
    };
    render(){
        return (
            <div className="outcome message">
                <p>{this.props.content}</p>
            </div>
        );
    };
};

export default OutcomeMessage;