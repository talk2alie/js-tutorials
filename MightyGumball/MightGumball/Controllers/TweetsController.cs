using Microsoft.AspNetCore.Mvc;
using MightGumball.Models;
using System.Collections.Generic;
using System.Linq;

namespace MightGumball.Controllers
{
    [Route("api/[controller]")]
    public class TweetsController: ControllerBase
    {
        private readonly ICollection<Tweet> tweets;

        public TweetsController()
        {
            tweets = new HashSet<Tweet>
            {
                new Tweet(1, "After all is said and done, we are all one species!"),
                new Tweet(2, "Life is, but a mystery."),
                new Tweet(3, "There will come a time when all things will be gone; even the sun!"),
                new Tweet(4, "I cannot believe I have come this far only to learn nothing about the world!"),
                new Tweet(5, "There must be an equation that explains everything; there's gotta be one!")
            };
        }

        public IActionResult Get() => Ok(tweets.ToList());
    }
}
