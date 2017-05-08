import React, {PropTypes} from 'react';
import CustomTableRow from './CustomTableRow';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : props.data
        };
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps != null )
            this.setState({data : nextProps.data});
    }


    render() {
        const rows =  this.state.data.map((obj) => <CustomTableRow key={obj.widget_id} data={obj} selectWidget={this.props.selectWidget} />);
        return (
            <div>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Available Widgets</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

Table.propTypes = {
    data : PropTypes.array.isRequired,
    selectWidget : PropTypes.func.isRequired
};

export default Table;