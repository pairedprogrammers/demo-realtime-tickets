var TicketListItem = React.createClass({
    render: function () {
        return (
            <div className="list-group-item">
                <button type="button" className="btn btn-default btn-danger pull-right">
                    <span  className="glyphicon glyphicon-trash"></span>
                    Delete
                </button>
                <h4 className="list-group-item-heading">{this.props.data.title}</h4>

                <p className="list-group-item-text">{this.props.data.desc}</p>
            </div>
        );
    }
});