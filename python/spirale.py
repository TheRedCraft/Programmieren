import turtle as t
#from tkinter import *

size=800
t.setup(width=size, height=size)

farben = ["blue", "yellow", "red", "purple", "green", "orange"]
t.speed("fastest")

for k in range(360):
    t.color(farben[k % len(farben)])
    t.width(k // 100 + 1)
    t.forward(k)
    t.left(59)

#ts = t.getscreen()
#ts.getcanvas().postscript(file="spirale.eps")

t.Screen().exitonclick()