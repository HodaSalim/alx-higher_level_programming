#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
#last_digit_str = str(abs(number))[-1]
#last_digit = int(last_digit_str)

last_digit_str = str(abs(number))[-1]
last_digit = int(last_digit_str)
if number >= 0:
    sign = ""
elif last_digit == 0:
    sign = ""
else:
    sign = "-"

if last_digit > 5:
    print(f'Last digit of {number} is {sign}{last_digit} and is greater than 5')
elif last_digit == 0:
    print(f'Last digit of {number} is {sign}{last_digit} and is 0')
elif last_digit < 6 and last_digit > 0:
    print(f'Last digit of {number} is {sign}{last_digit} and is less than 6 and not 0')
