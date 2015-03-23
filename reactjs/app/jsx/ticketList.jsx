var TicketList = React.createClass({
    render: function () {
        var ticketNodes = this.props.data.map(function (ticket) {
            return <TicketListItem data={ticket} />
        });

        return (
            <div className="list-group">
                {ticketNodes}
            </div>
        );
    }
});