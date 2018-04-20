# coding=utf-8
def factorial(f):
	if f>1:
		return f*factorial(f-1)
	else:
		return 1
print(factorial(5))