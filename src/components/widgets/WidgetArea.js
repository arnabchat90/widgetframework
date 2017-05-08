import React, {PropTypes} from 'react';
import { ItemTypes } from '../../common/constants';
import { DropTarget } from 'react-dnd';
import {getWidgetData, setWidgetData} from './moveWidget';

const widgetTarget = {
  drop(props,monitor) {
    setWidgetData(monitor.getItem().widgetData);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class WidgetArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            widgets : []
        };
    }

    render() {
        const { connectDropTarget, isOver } = this.props;
        let widgetData =  getWidgetData();
        return connectDropTarget(
            <div className="widget-area">
                {Object.keys(widgetData).length !== 0 ? widgetData.widget_name + " has been added" : ""}
            </div>
        );
    }
}

WidgetArea.propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired
    
};

export default DropTarget(ItemTypes.WIDGET, widgetTarget, collect)(WidgetArea);