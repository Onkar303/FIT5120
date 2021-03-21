using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(FIT5120_Project_Refugees.Startup))]
namespace FIT5120_Project_Refugees
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
