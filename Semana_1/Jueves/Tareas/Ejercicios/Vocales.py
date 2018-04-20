# coding=utf-8

def vocales(word):
	voc = ['a','A','e','E','i','I','o','O','u','U']
	palabra = ''

	for x in word:
		if x not in voc:
			palabra += x
	return palabra

print(vocales("Hola Mundo"))