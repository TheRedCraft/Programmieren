import random
import os



maxrandom = 10
minrandom = 1
zufalszahl = random.randint(minrandom, maxrandom)



def gameloopzahlen(score2):
    geraten = input("Gebe einen Tipp ab: ")

    geraten = int(geraten)

    if(zufalszahl > geraten):
        print("DIe Zahl  ist größer")
        score2 = score2 + 1
        gameloopzahlen(score2)


    if(zufalszahl < geraten):
        print("Die Zahl ist kleiner")
        score2 = score2 + 1
        gameloopzahlen(score2)


    if(zufalszahl == geraten):
        print("Richtig geraten!")
        return score2



score = gameloopzahlen(0)



print("Super!")
print("Dein score ist " + str(score))


os.system("pause")