using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _8
{
    class Program
    {
        static void Main(string[] args)
        {
            var str1 = "waterbottle";
            var str2 = "lewaterbott";

            Console.WriteLine(IsRotation(str1, str2));

            Console.ReadLine();

        }
        
        static bool IsRotation(string str1, string  str2)
        {
            var tmp = str1 + str1;

            return tmp.Contains(str2);
        }
    }
}
