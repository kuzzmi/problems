using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GemStones
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = 3;
            var stones = new string[]
            {
                "abcdde",
                "baccd",
                "eeabg"
            };

            Console.WriteLine(GetGems(stones));

            Console.ReadLine();
        }

        static int GetGems(string[] stones)
        {
            var elements = new Dictionary<char, bool>();

            for (var j = 0; j < stones[0].Length; j++)
            {
                var c = stones[0][j];
                if (!elements.ContainsKey(stones[0][j]))
                {
                    elements.Add(c, true);
                }
            }

            for (var i = 1; i < stones.Length; i++)
            {
                var arr = elements.ToArray();

                for (var j = 0; j < arr.Length; j++)
                {
                    var c = arr[j].Key;
                    if (stones[i].IndexOf(c) == -1)
                    {
                        elements.Remove(c);
                    }
                }

            }

            return elements.Keys.Count();
        }
    }
}
