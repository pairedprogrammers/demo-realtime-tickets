using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR.Hubs;
using SignalR.Web.Models;

namespace SignalR.Web.hubs
{
    [HubName("ticketHub")]
    public class TicketHub : Microsoft.AspNet.SignalR.Hub
    {

    }
}