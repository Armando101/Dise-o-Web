# coding=utf-8

for x in xrange(1,10):
	print("*"*x)
	print(">"*x)
for y in xrange(1,10):
	print("*"*(x-y))
	print(">"*(x-y))