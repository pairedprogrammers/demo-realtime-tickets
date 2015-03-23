var Dashboard = React.createClass({
    loadTicketsFromServer: function () {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function (data) {
                this.setState({data: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    componentDidMount: function () {
        this.loadTicketsFromServer();
    },
    getInitialState: function () {
        return {
            data: []
        };
    },

    render: function () {
        return (
            <TicketList data={this.state.data} />
        );
    }
});
React.render(
    <Dashboard url="/tickets" />,
    document.getElementById('content')
);