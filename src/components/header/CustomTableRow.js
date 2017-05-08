import React, { PropTypes } from 'react';
import { ItemTypes } from '../../common/constants';
import { DragSource } from 'react-dnd';

const widgetSource = {
    beginDrag(props) {
        return {widgetData : props.data};
    }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class CustomTableRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps != null)
            this.setState({ data: nextProps.data });
    }

    render() {
        const { connectDragSource, isDragging } = this.props;
        let temp = this.state.data;
        let completeRow = "";
        const columns = Object.keys(this.state.data).map(function (key) {
            let column = temp[key];
            return <td key={column}>{column}</td>;
        });

        return connectDragSource(
            <tr className={temp["widget_active"] ? "info" : ""} onClick={this.props.selectWidget.bind(null, temp)}>
                <td>{temp["widget_name"]}</td>
            </tr>
        );
    }

}

CustomTableRow.propTypes = {
    data: PropTypes.object.isRequired,
    selectWidget: PropTypes.func.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.WIDGET, widgetSource, collect)(CustomTableRow);