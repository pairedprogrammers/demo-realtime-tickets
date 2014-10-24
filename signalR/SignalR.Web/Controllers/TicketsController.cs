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
        private ITicketRepository _repository;

        public TicketsController(ITicketRepository repository)
        {
            if (repository == null) throw new ArgumentNullException("repository");
            _repository = repository;
        }

        // GET: api/Tickets
        public IEnumerable<Ticket> Get()
        {
            return _repository.GetTickets();
        }

        // POST: api/Tickets
        public void Post([FromBody]Ticket ticket)
        {                    
            _repository.AddTicket(ticket);
        }


    }
}
