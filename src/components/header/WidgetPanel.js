import React, { PropTypes } from 'react';
import Table from './Table';

class WidgetPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            widget : {
                widget_id : "",
                widget_name : "",
                widget_desc : "",
                widget_active : false
            },
            data : [
            {
                widget_id: "barchart",
                widget_name: "Bar Chart Widget",
                widget_desc :"Just Drag and Drop the barchart widget in the widget panel and create a new Bar chart by configuring the data source",
                widget_active : false
            },
            {
                widget_id: "linechart",
                widget_name: "Line Chart Widget",
                widget_desc :"Just Drag and Drop the linechart widget in the widget panel and create a new Line chart by configuring the data source",
                widget_active : false
            },
            {
                widget_id: "table",
                widget_name: "Table Widget",
                widget_desc :"Just Drag and Drop the table widget in the widget panel and create a new Table by configuring the data source",
                widget_active : false
            },
            {
                widget_id: "d3component",
                widget_name: "D3 Component Widget",
                widget_desc :"Just Drag and Drop the d3 widget in the widget panel and create a new D3 widget by configuring the data source",
                widget_active : false
            }
        ]
        };
        this.selectWidget = this.selectWidget.bind(this);
        this.searchFilter = this.searchFilter.bind(this);
    }
    selectWidget(widgetObj) {
        let tempState = this.state.data;
        tempState.forEach((obj) => {
            obj.widget_active = false;
        });
        widgetObj.widget_active = true;
        const existingWidgetIndex = tempState.findIndex(a => a.widget_id == widgetObj.widget_id);
        tempState.splice(existingWidgetIndex, 1, widgetObj);

        this.setState({widget : widgetObj, data : tempState});
    }
   searchFilter(event) {
        if(event.target.value == "") {
            this.setState({widget : {
                widget_id : "",
                widget_name : "",
                widget_desc : "",
                widget_active : false
            }, data : this.props.initialData});
            return;
        }
        let query = event.target.value.toLocaleLowerCase();
        let matches = this.state.data.filter(widget => widget.widget_name.toLocaleLowerCase().indexOf(query) !== -1);
        this.setState({widget : this.state.widget,data : matches});
    }
    render() {
           

        return (
            <div className="new-widget-panel">
                <div className="glyphicon glyphicon-remove col-md-offset-12" style={{ cursor: 'pointer', color: 'black' }} onClick={this.props.toggleShowWidgetPanel}>
                </div>
                <div className="row">
                    <div className="col-md-4 col-md-offset-8">
                       <input className="form-control" type="text" id="txtSearchWidget" placeholder="Search..." onChange={this.searchFilter} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-md-offset-1">
                        <h2>{this.state.widget.widget_name}</h2>
                        <h5><i>{this.state.widget.widget_desc}</i></h5>
                    </div>
                    <div className="col-md-4 col-md-offset-1">
                        <Table data={this.state.data} selectWidget={this.selectWidget} />
                    </div>
                </div>
            </div>
        );
    }

}

WidgetPanel.propTypes = {
    toggleShowWidgetPanel: PropTypes.func,
    initialData : PropTypes.array.isRequired
};

WidgetPanel.defaultProps = {
    initialData : [
            {
                widget_id: "barchart",
                widget_name: "Bar Chart Widget",
                widget_desc :"Just Drag and Drop the barchart widget in the widget panel and create a new Bar chart by configuring the data source",
                widget_active : false
            },
            {
                widget_id: "linechart",
                widget_name: "Line Chart Widget",
                widget_desc :"Just Drag and Drop the linechart widget in the widget panel and create a new Line chart by configuring the data source",
                widget_active : false
            },
            {
                widget_id: "table",
                widget_name: "Table Widget",
                widget_desc :"Just Drag and Drop the table widget in the widget panel and create a new Table by configuring the data source",
                widget_active : false
            },
            {
                widget_id: "d3component",
                widget_name: "D3 Component Widget",
                widget_desc :"Just Drag and Drop the d3 widget in the widget panel and create a new D3 widget by configuring the data source",
                widget_active : false
            }
        ]
};

export default WidgetPanel;