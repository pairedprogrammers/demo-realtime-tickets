using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SignalR.Web.Models;
using SignalR.Web.hubs;
using Microsoft.AspNet.SignalR;

namespace SignalR.Web.Controllers
{
    public class TicketsController : ApiController
    {
        // GET: api/Tickets
        public IEnumerable<Ticket> Get()
        {
            return new List<Ticket>() {
                new Ticket("sample", "sample desc"),
                new Ticket("sample 2", "sample desc 2")
            };
        }       

        // POST: api/Tickets
        public void Post([FromBody]Ticket ticket)
        {
            var ticketHub =  GlobalHost.ConnectionManager.GetHubContext<TicketHub>();
            
            ticketHub.Clients.All.addNewTicket(ticket);
  

        }

      
    }
}
