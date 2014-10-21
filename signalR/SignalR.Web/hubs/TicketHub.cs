using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR.Hubs;
using SignalR.Web.Models;

namespace SignalR.Web.hubs
{
    public class TicketHub : Microsoft.AspNet.SignalR.Hub
    {
        public void Send(Ticket ticket)
        {
            Clients.All.addNewTicket(ticket);
        }

    }
}