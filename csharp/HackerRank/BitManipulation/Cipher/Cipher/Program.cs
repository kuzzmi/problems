﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cipher
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = 7;
            var k = 4;

            var s = "1110100110";


            var b = new byte[n];
            int head = 0,
                curr = 0;

            for (int i = 0; i < n; i++)
            {
                if (i - head == k)
                {
                    curr ^= b[head++];
                }
                b[i] = (byte)(((int)s[i] - 48) ^ curr);
                Console.Write(b[i]);
                curr ^= b[i];
            }

            Console.ReadLine();
        }
    }
}