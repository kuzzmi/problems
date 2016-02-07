using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _5
{
    class Program
    {
        static void Main(string[] args)
        {
            var str = "aabcccccaaa";
            Console.WriteLine(Compress(str));
            Console.ReadLine();
        }

        static string Compress(string str)
        {
            if (str.Length == 0)
            {
                return "";
            }
            StringBuilder result = new StringBuilder();
            int count = 1;
            char current = str[0];

            for (int i = 1; i < str.Length; i++)
            {
                if (str[i] == current)
                {
                    count++;
                } else
                {
                    result.Append(current);
                    result.Append(count.ToString());
                    count = 1;
                    current = str[i];
                }
            }
            result.Append(current);
            result.Append(count.ToString());

            return result.ToString();
        }
    }
}
