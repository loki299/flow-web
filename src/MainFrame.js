import React from 'react';
import ContactBanner from './ContactBanner';
import Prompt from './Prompt';
import IncomeMessage from './IncomeMessage';
import OutcomeMessage from './OutcomeMessage';

class MainFrame extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div id="mainFrame">
                <div id='bannerContainer'>
                    <ContactBanner name="Someone"/>
                </div>
                <div id='chatContainer'>
                    <div>
                        <div id='chat'>
                            <IncomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                            <OutcomeMessage content="Hi" />
                        </div>
                        <Prompt />
                    </div>
                </div>
            </div>
        )
    }
}

export default MainFrame;