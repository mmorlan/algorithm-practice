/* Data structures and Complexity Analysis

Data structures are sets of data values, the relationships between the values, 
and the set of operations and functions that you apply to the values.

Complexity Analysis
The process of determining how efficient an algorithm is, involving time and space complexity of an algorithm.

Time Complexity (Big O)
A measure of how fast an algorithm runs, time complexity is a central concept in the field of algorithms

Space Complexity (Big O)
A measure of how much auxiliary memory an algorithm takes up
*/

/* Memory

Bit - Short for binary digit, a fundamental unit of information in CS that represents a state with one of two values, 
typically 0 and 1.

Byte - A group of eight bits, e.g., 01101000.  A single byte can represent up to 256 data values (2^8)

1: 00000001
2: 00000010
3: 00000011
4: 00000100

Bytes in memory can point to other bytes in memory, so as to store references to other data
The amount of memory that a machine has is bounded, making it valuable to limit how much memory 
an algorithm takes up.

Accessing a byte or a fixed number of bytes (like 4 bytes or 8 bytes in the case of 32-bit and 64-bit integers) 
is an elementary operation, which can be loosely treated as a single unit of operational work.
*/

/* Big O Notation
Variables used in Big O notation denote the sizes of inputs to algorithms. For example, O(n) might be 
the time complexity of an algorithm that traverses through an array of length n; similarly,
O(n + m) might be the time complexity of an algorithm that traverses through an array of length n and
through a string of length m.

We care about the speed of algorithm as the input (n) increases

The following are examples of common complexities and their Big O notations,
ordered from fastest to slowest:

Constant: O(1)
Logarithmic: O(log(n))
Linear: O(n)
Log-linear: O(nlog(n))
Quadratic: O(n^2)
Cubic: O(n^3)
Exponential: O(2^n)
Factorial: O(n!)
*/

a = [1, 2, 3, 4, 5, 6, 7, 8, 9]

a => 1 + a[0] //O(1) constant

a => sum(a) //O(n) linear

a => pair(a) //O(n^2) quadratic

