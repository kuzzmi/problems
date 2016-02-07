using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _7
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] list1 = new int[4] { 0, 1, 1, 1 };
            int[] list2 = new int[4] { 1, 1, 1, 1 };
            int[] list3 = new int[4] { 1, 1, 1, 1 };
            int[] list4 = new int[4] { 1, 1, 1, 0 };

            int[][] matrix = new int[][] { list1, list2, list3, list4 };

            Zerofy(matrix);

            for (int i = 0; i < matrix.Length; i++)
            {
                for (int j = 0; j < matrix[0].Length; j++)
                {
                    Console.Write(matrix[i][j]);
                    Console.Write(' ');
                }
                Console.WriteLine();
            }

            Console.ReadLine();
        }

        static void Zerofy(int[][] matrix)
        {
            bool[] row = new bool[matrix.Length];
            bool[] column = new bool[matrix[0].Length];

            for (int i = 0; i < matrix.Length; i++)
            {
                for (int j = 0; j < matrix[i].Length; j++)
                {
                    if (matrix[i][j] == 0)
                    {
                        row[i] = true;
                        column[j] = true;
                    }
                }
            }

            for (int i = 0; i < matrix.Length; i++)
            {
                for (int j = 0; j < matrix[i].Length; j++)
                {
                    if (row[i] || column[j])
                    {
                        matrix[i][j] = 0;
                    }
                }
            }
        }
    }
}
