using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _3
{
    static class Extenstions
    {
        public static string Order(this string str)
        {
            var chars = str.ToArray();
            Array.Sort(chars);
            return new string(chars); 
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            var str1 = "abcdef";
            var str2 = "dcebaf";
            var str3 = "asjdha";

            Console.WriteLine(IsPermutation(str1, str3));
            Console.ReadLine();
        }

        private static bool IsPermutation(string str1, string str2)
        {
            return str1.Order() == str2.Order();
        }
    }
}
