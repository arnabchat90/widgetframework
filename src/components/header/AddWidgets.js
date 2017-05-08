import React from 'react';
import '../../styles/styles.css'; //Webpack can import css files too
import WidgetPanel from './WidgetPanel';

class AddWidgets extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showWidgetPanel : false
        };

        this.toggleShowWidgetPanel= this.toggleShowWidgetPanel.bind(this);
    }

    toggleShowWidgetPanel() {
        this.setState({showWidgetPanel : !this.state.showWidgetPanel});
    }
    render() {
        return(
            <div className="row">
                {this.state.showWidgetPanel ? <WidgetPanel toggleShowWidgetPanel={this.toggleShowWidgetPanel} /> : <button className="btn btn-lg btn-primary" onClick={this.toggleShowWidgetPanel}>Add New Widgets</button>}
            </div>
        );
    }
}

export default AddWidgets;