using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _4
{
    class Program
    {
        static void Main(string[] args)
        {
            var input = "Mr John Smith    ".ToArray();
            ReplaceSpaces(input, 13);
            Console.WriteLine(new string(input));

            Console.ReadLine();
        }

        private static void ReplaceSpaces(char[] str, int length)
        {
            int spaces = 0, i, newLength;

            for (i = 0; i < length; i++)
            {
                if (str[i] == ' ')
                {
                    spaces++;
                }
            }

            newLength = length + spaces * 2;

            for (i = length - 1; i >= 0; i--)
            {
                if (str[i] == ' ')
                {
                    str[newLength - 1] = '0';
                    str[newLength - 2] = '2';
                    str[newLength - 3] = '%';
                    newLength -= 3;
                } else
                {
                    str[newLength - 1] = str[i];
                    newLength--;
                }
            }
        }

    }
}
