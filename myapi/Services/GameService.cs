using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace myapi.Services
{
    public class GameService
    {

        public string PlayerOne(string RPSLS)
        {
            Random random = new Random();
            int rng = random.Next(0, 5);
            string winner1 = "Player 1 wins!";
            string winner2 = "CPU wins!";
            string tie = "It's a tie!";

            string[] cpu = [
        "CPU chose Rock.  ",
        "CPU chose Paper.  ",
        "CPU chose Scissors.  ",
        "CPU chose Lizard.  ",
        "CPU chose Spock.  ",
        ];
            if (RPSLS.ToLower() == "rock")
            {
                if (rng == 0)
                {
                    return cpu[0] + tie;
                }
                else if (rng == 1)
                {
                    return cpu[1] + winner2;
                }
                else if (rng == 2)
                {
                    return cpu[2] + winner1;
                }
                else if (rng == 3)
                {
                    return cpu[3] + winner1;
                }
                else if (rng == 4)
                {
                    return cpu[4] + winner2;
                }

            }
            else if (RPSLS.ToLower() == "paper")
            {
                if (rng == 0)
                {
                    return cpu[0] + winner1;
                }
                else if (rng == 1)
                {
                    return cpu[1] + tie;
                }
                else if (rng == 2)
                {
                    return cpu[2] + winner2;
                }
                else if (rng == 3)
                {
                    return cpu[3] + winner2;
                }
                else if (rng == 4)
                {
                    return cpu[4] + winner1;
                }
            }
            else if (RPSLS.ToLower() == "scissors")
            {
                if (rng == 0)
                {
                    return cpu[0] + winner2;
                }
                else if (rng == 1)
                {
                    return cpu[1] + winner1;
                }
                else if (rng == 2)
                {
                    return cpu[2] + tie;
                }
                else if (rng == 3)
                {
                    return cpu[3] + winner1;
                }
                else if (rng == 4)
                {
                    return cpu[4] + winner2;
                }
            }
            else if (RPSLS.ToLower() == "lizard")
            {
                if (rng == 0)
                {
                    return cpu[0] + winner1;
                }
                else if (rng == 1)
                {
                    return cpu[1] + winner2;
                }
                else if (rng == 2)
                {
                    return cpu[2] + winner2;
                }
                else if (rng == 3)
                {
                    return cpu[3] + tie;
                }
                else if (rng == 4)
                {
                    return cpu[4] + winner1;
                }
            }
            else if (RPSLS.ToLower() == "spock")
            {
                if (rng == 0)
                {
                    return cpu[0] + winner1;
                }
                else if (rng == 1)
                {
                    return cpu[1] + winner2;
                }
                else if (rng == 2)
                {
                    return cpu[2] + winner1;
                }
                else if (rng == 3)
                {
                    return cpu[3] + winner2;
                }
                else if (rng == 4)
                {
                    return cpu[4] + tie;
                }
            }

            return "Please enter 'Rock', 'Paper','Scissors','Lizard', or 'Spock'";


        }



        public string PlayerVsPlayer(string choice1, string choice2)
        {
            Random random = new Random();
            int rng = random.Next(0, 5);
            string winner1 = "Player 1 wins!";
            string winner2 = "Player 2 wins!";

            string[] results = [
        "Rock beats Scissors!  ",
        "Rock beats Lizard!  ",
        "Paper beats Rock.  ",
        "Paper beats Spock.  ",
        "Scissors beats Paper!  ",
        "Scissors beats Lizard!  ",
        "Lizard beats Paper.  ",
        "Lizard beats Spock.  ",
        "Spock beats Rock!  ",
        "Spock beats Scissors!  ",      
        ];

            if (choice1.ToLower() == choice2.ToLower())
            {
                return $"two {choice1}s tie!";
            }
            else if (choice1.ToLower() == "rock")
            {
                if (choice2.ToLower() == "paper")
                {
                    return results[2] + winner2;
                }
                else if (choice2.ToLower() == "scissors")
                {
                    return results[0] + winner1;
                }
                else if (choice2.ToLower() == "lizard")
                {
                    return results[1] + winner1;
                }
                else if (choice2.ToLower() == "spock")
                {
                    return results[8] + winner2;
                }
            
            }
            else if (choice1.ToLower() == "paper")
            {
                if (choice2.ToLower() == "rock")
                {
                    return results[2] + winner1;
                }
                else if (choice2.ToLower() == "scissors")
                {
                    return results[4] + winner2;
                }
                else if (choice2.ToLower() == "lizard")
                {
                    return results[6] + winner2;
                }
                else if (choice2.ToLower() == "spock")
                {
                    return results[3] + winner1;
                }
            else if (choice1.ToLower() == "scissors")
            {
                if (choice2.ToLower() == "paper")
                {
                    return results[4] + winner1;
                }
                else if (choice2.ToLower() == "rock")
                {
                    return results[0] + winner2;
                }
                else if (choice2.ToLower() == "lizard")
                {
                    return results[5] + winner1;
                }
                else if (choice2.ToLower() == "spock")
                {
                    return results[9] + winner2;
                }
            
            }else if (choice1.ToLower() == "lizard")
            {
                if (choice2.ToLower() == "paper")
                {
                    return results[6] + winner1;
                }
                else if (choice2.ToLower() == "scissors")
                {
                    return results[5] + winner2;
                }
                else if (choice2.ToLower() == "rock")
                {
                    return results[1] + winner2;
                }
                else if (choice2.ToLower() == "spock")
                {
                    return results[7] + winner1;
                }
            
            }else if (choice1.ToLower() == "spock")
            {
                if (choice2.ToLower() == "paper")
                {
                    return results[3] + winner2;
                }
                else if (choice2.ToLower() == "scissors")
                {
                    return results[9] + winner1;
                }
                else if (choice2.ToLower() == "lizard")
                {
                    return results[7] + winner2;
                }
                else if (choice2.ToLower() == "rock")
                {
                    return results[8] + winner1;
                }
            
            
            
            }
            }

            return "Both players must enter enter 'Rock', 'Paper','Scissors','Lizard', or 'Spock'";


        }
    }
}