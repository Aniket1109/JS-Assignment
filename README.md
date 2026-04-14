Q1.
Loop from L to R
Check divisible by K
 Find sum of digits
 Check if sum is prime
 Also check number does not contain 0
 Count valid numbers

Time Complexity: O(nd)



Q2:
Repeat 3 times:
If even → divide by 2 + seed
If odd → multiply by 3 - seed
Check-
Number is 3 digit
Middle digit = seed

Time Complexity: O(1)



Q3:
 Try values of X from 0 to 100000
Check-
N + X is palindrome
Divisible by K
Return first valid X

Time Complexity: O(n)


Q4: 
Calculate base fare
 Apply conditions:
Late → add 20
Distance > 10 → add 10%
Adjust using seed
Round to nearest multiple of 5

Time Complexity: O(1)

Q5: 
 Add numbers from 1 onwards
 Skip numbers divisible by (seed + 2)
Stop when sum ≥ N

Time Complexity: O(n)



Q6: 
Calculate score = 3a + b - 2c
If negative - make 0
If total questions > 50 - subtract 10
Check PASS or FAIL

Time Complexity: O(1)