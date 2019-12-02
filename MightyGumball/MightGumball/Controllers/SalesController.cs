using Microsoft.AspNetCore.Mvc;
using MightGumball.Models;
using System.Collections.Generic;
using System.Linq;

namespace MightGumball.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SalesController : ControllerBase
    {
        private readonly List<Sale> sales = new List<Sale>
        {
            new Sale {Name = "ARTESIA", Sales = 8, Time = 1308774240669},
            new Sale {Name = "LOS ANGELES", Sales = 2, Time = 1308774240669},
            new Sale {Name = "PASADENA", Sales = 8, Time = 1308774240669},
            new Sale {Name = "STOCKTON", Sales = 2, Time = 1308774240669},
            new Sale {Name = "FRESNO", Sales = 2, Time = 1308774240669},
            //new Sale {Name = "SPRING VALLEY", Sales = 9, Time = 1308774240669},
            //new Sale {Name = "ELVERTA", Sales = 5, Time = 1308774240669},
            //new Sale {Name = "SACRAMENTO", Sales = 7, Time = 1308774240669},
            //new Sale {Name = "SAN MATEO", Sales = 1, Time = 1308774240669},
        };

        [HttpGet]
        public IActionResult Get() => Ok(sales.OrderByDescending(sale => sale.Sales));

        [HttpGet("ByTime/{lastReportTime:long}")]
        public IActionResult Get(long lastReportTime)
        {
            var filteredSales = sales.Where(sale => sale.Time >= lastReportTime).ToList();
            return Ok(filteredSales);
        }
    }
}