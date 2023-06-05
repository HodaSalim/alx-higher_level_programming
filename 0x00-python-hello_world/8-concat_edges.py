#!/usr/bin/python3
str = "Python is an interpreted, interactive, object-oriented programming\
 language that combines remarkable power with very clear syntax"
str = str.split(", ")[2].split()[0] + str[6] + str.split(", ")[2].split()[1] + str[6] + str.split(" ")[-4] + str[6] + str.split(" ")[0]
print(str)
