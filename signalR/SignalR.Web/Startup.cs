using Owin;
using Microsoft.Owin;
[assembly: OwinStartup(typeof(SignalR.Web.Startup))]
namespace SignalR.Web
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // Any connection or hub wire up and configuration should go here
            app.MapSignalR();
        }
    }
}


