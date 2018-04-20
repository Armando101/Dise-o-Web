# coding=utf-8

def Adivina(a):
	i="7"
	if (a == i):
		print("Bien adivinado")
		return True
	else :
		return False

while True :
	numero = input("Introduce un numero a adivinar")
	if (Adivina(numero)):
		break
	 