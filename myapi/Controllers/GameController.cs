using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using myapi.Services;

namespace myapi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GameController : ControllerBase
    {

        private readonly GameService _gameService;
        public GameController(GameService gameService)
        {
            _gameService=gameService;
        }
        [HttpGet("OnePlayer/{RPSLS}")]
        public string PlayerOne(string RPSLS)
        {  
           return _gameService.PlayerOne(RPSLS);

        }



        [HttpGet("TwoPlayer/{choice1}/{choice2}")]
        public string PlayerVsPlayer(string choice1, string choice2)
        {
            return _gameService.PlayerVsPlayer(choice1, choice2);
        }
    }
}