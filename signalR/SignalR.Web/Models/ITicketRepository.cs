using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SignalR.Web.Models
{
    public interface ITicketRepository
    {
        IEnumerable<Ticket> GetTickets();
        void AddTicket(Ticket ticket);

    }
}
