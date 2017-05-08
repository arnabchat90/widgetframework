import React from 'react';
import AddWidgets from './header/AddWidgets';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import WidgetArea from './widgets/WidgetArea';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <div className="jumbotron">
                    <h1 style={{textAlign : 'center', color : '#106ebe'}}>Widget Framework</h1>
                </div>
                <div className="row"><AddWidgets /></div>
                <div className="row"><WidgetArea /></div>
                
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(HomePage);