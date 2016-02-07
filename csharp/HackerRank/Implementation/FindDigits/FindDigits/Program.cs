using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FindDigits
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = 1102;


            Console.WriteLine(FindDigits(n));

            Console.ReadLine();
        }

        static int FindDigits(int n)
        {
            var dictionary = new Dictionary<int, int>();
            var tmp = n;
            var sum = 0;

            while (tmp > 0)
            {
                var num = tmp % 10;

                if (!dictionary.ContainsKey(num) && IsDivisible(n, num))
                {
                    dictionary.Add(num, 1);
                }
                else {
                    var cnt = 0;
                    if (dictionary.TryGetValue(num, out cnt))
                    {
                        dictionary[num]++;
                    }
                }

                tmp /= 10;
            }

            foreach (var pair in dictionary)
            {
                sum += pair.Value;
                Console.WriteLine("{0} - {1}", pair.Key, pair.Value);
            }

            return sum;
        }

        static bool IsDivisible(int n, int num)
        {
            if (num == 0)
            {
                return false;
            }
            return n % num == 0;
        }
    }
}
