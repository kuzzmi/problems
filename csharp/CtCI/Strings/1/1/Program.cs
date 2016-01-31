using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _1
{
    class Program
    {
        static void Main(string[] args)
        {
            String str = Console.ReadLine();
            Boolean isUnique = ContainsUniqueNoDS(str);

            if (isUnique)
            {
                Console.WriteLine("All chars unique");
            } else
            {
                Console.WriteLine("Not unique char found");
            }
            Console.ReadLine();
        }

        static bool ContainsUniqueNoDS(string str)
        {
            bool isUnique = true;

            char[] sorted = str.ToArray();
            char curChar;
            Array.Sort(sorted);

            for (int i = 0; i < sorted.Length - 1; i++)
            {
                curChar = sorted[i];
                if (curChar == sorted[i + 1])
                {
                    isUnique = false;
                    break;
                }
            }
            
            return isUnique;
        }

        static bool ContainsUnique(string str)
        {
            Hashtable chars = new Hashtable();
            Boolean isUnique = true;

            for (var i = 0; i < str.Length; i++)
            {
                if (!chars.ContainsKey(str[i]))
                {
                    chars.Add(str[i], true);
                }
                else
                {
                    isUnique = false;
                    break;
                }
            }
            return isUnique;
        }
    }
}
