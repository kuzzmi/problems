using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MergeSort
{
    public static class Extensions
    {
        public static T[] Slice<T>(this T[] source, int start, int end)
        {
            // Handles negative ends.
            if (end < 0)
            {
                end = source.Length + end;
            }
            int len = end - start;

            // Return new array.
            T[] res = new T[len];
            for (int i = 0; i < len; i++)
            {
                res[i] = source[i + start];
            }
            return res;
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            int[] arr = new int[] { 5, 9, 2, 7, 1, 4, 6, 3, 0 };

            PrintArray(MergeSort(arr));
                        
            Console.ReadLine();
        }

        static void PrintArray(int[] arr)
        {
            for (var i = 0; i < arr.Length; i++)
            {
                Console.Write(arr[i]);
                Console.Write(", ");
            }
            Console.WriteLine();
        }
                
        static int[] MergeSort(int[] arr)
        {
            int m = arr.Length / 2;
            if (arr.Length == 1)
            {
                return arr;
            }

            var left = arr.Slice(0, m);
            var right = arr.Slice(m, arr.Length);

            arr = Merge(MergeSort(left), MergeSort(right));

            return arr;
        }

        static int[] Merge(int[] left, int[] right)
        {
            if (left.Length == 0)
            {
                return right;
            }
            if (right.Length == 0)
            {
                return left;
            }
            if (left[0] <= right[0])
            {
                return left.Take(1).Concat(Merge(left.Slice(1, left.Length), right)).ToArray();
            } else
            {
                return right.Take(1).Concat(Merge(right.Slice(1, right.Length), left)).ToArray();
            }
        }
    }
}
