using LightInject;
using SignalR.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace SignalR.Web.App_Start
{
    public static class DependencyConfig
    {
        public static void Register(HttpConfiguration configuration)
        {
            var container = new ServiceContainer();
            container.RegisterApiControllers();
            //register other services    

            container.Register<ITicketRepository, TicketRepository>(new PerContainerLifetime());

            container.EnableWebApi(configuration);
        }

    }
}