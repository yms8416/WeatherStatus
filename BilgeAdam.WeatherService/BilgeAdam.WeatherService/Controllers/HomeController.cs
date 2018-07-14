using Microsoft.AspNetCore.Mvc;

namespace BilgeAdam.WeatherService.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
