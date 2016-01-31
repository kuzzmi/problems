using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2
{
    class Program
    {
        static void Main(string[] args)
        {
            var str = "veryverystring";
            Console.WriteLine(Reverse(str));
            Console.ReadLine();
        }

        static string Reverse(string str)
        {
            char[] chars = str.ToArray();
            for (var i = 0; i < str.Length / 2; i++)
            {
                var tmp = chars[i];
                chars[i] = chars[chars.Length - 1 - i];
                chars[chars.Length - 1 - i] = tmp;
            }
            return new string(chars);
        }
    }
}
