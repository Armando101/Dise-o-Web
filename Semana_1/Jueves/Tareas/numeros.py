# coding=utf-8
print(" Números que son divisibles por 7 y múltiplos de 5, entre 1500 y 2700")

def numeros():
	for x in xrange(1499,2701):
		if (x%7==0 and x%5==0):
			print(x)
numeros()