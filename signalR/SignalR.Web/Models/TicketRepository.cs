using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SignalR.Web.Models
{
    public class TicketRepository : ITicketRepository
    {
        private List<Ticket> _localTickets;

        public TicketRepository()
        {
            _localTickets = new List<Ticket>() {
                new Ticket("sample", "sample desc"),
                new Ticket("sample 2", "sample desc 2"),
                new Ticket("sample 3", "sample desc 3")
            };
        }

        public IEnumerable<Ticket> GetTickets()
        {
            return _localTickets.AsEnumerable();
        }

        public void AddTicket(Ticket ticket)
        {
            _localTickets.Add(ticket);
        }
    }
}