using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _6
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] list1 = new int[4] { 1, 2, 3, 4 };
            int[] list2 = new int[4] { 5, 6, 7, 8 };
            int[] list3 = new int[4] { 1, 3, 2, 1 };
            int[] list4 = new int[4] { 5, 4, 3, 2 };

            int[][] matrix = new int[][] { list1, list2, list3, list4 };

            Rotate(matrix);

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

        static void Rotate(int[][] matrix)
        {
            for (int layer = 0; layer < matrix.Length / 2; layer++)
            {
                int first = layer;
                int last = matrix.Length - 1 - layer;

                for (int i = first; i < last; ++i)
                {
                    int offset = i - first;
                    var tmp = matrix[first][i];

                    matrix[first][i] = matrix[last - offset][first];
                    matrix[last - offset][first] = matrix[last][last - offset];
                    matrix[last][last - offset] = matrix[i][last];
                    matrix[i][last] = tmp;

                }
            }
        }
    }
}
