lista = [1,2,3,4,5,6,7,8,9]

def obtener_par(lista):
	i=0
	print("Numero de pares:")
	for x in xrange(0,len(lista)):
		if (lista[x]%2==0):
			i+=1
	print(i)

def obtener_impar(lista):
	i=0
	print("Numero de impares :")
	for x in xrange(0,len(lista)):
		if (lista[x]%2!=0):
			i+=1
	print(i)

obtener_impar(lista)
obtener_par(lista)