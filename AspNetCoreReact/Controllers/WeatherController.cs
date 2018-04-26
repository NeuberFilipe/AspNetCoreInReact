using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using AspNetCoreReact.ViewModel;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace AspNetCoreReact.Controllers
{
    [Produces("application/json")]
    [Route("api/Weather")]
    public class WeatherController : Controller
    {
        public IActionResult Index()
        {
            var model = City("Belo Horizonte");
            return View("Index", model);
        }

        private string _Url = "http://api.openweathermap.org";
        private string _ApiKEY = "2bac87e0cb16557bff7d4ebcbaa89d2f";

        [HttpGet("[action]")]
        public async Task<WeatherModel.RootObject> City(string city)
        {
            using (var client = new HttpClient())
            {
                try
                {
                    client.BaseAddress = new Uri(_Url);
                    var response = await client.GetAsync($"/data/2.5/weather?q={city}&appid={_ApiKEY}&units=metric");
                    response.EnsureSuccessStatusCode();

                    var stringResult = await response.Content.ReadAsStringAsync();
                    return JsonConvert.DeserializeObject<WeatherModel.RootObject>(stringResult);
                }
                catch (HttpRequestException httpRequestException)
                {
                    return null;
                    //return BadRequest($"Error getting weather from OpenWeather: {httpRequestException.Message}");
                }
            }
        }
    }
}