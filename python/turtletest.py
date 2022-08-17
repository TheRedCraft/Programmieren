#!/usr/bin/env python3

import turtle as t
#from tkinter import *


a = 100
b = 0.5 * a * pow(2, 0.5)

t.setup(width=400, height=300)

t.up()
t.goto(-50, -50)
t.down()
t.left(90)
t.width(2)

t.forward(a)
t.right(45)
t.forward(b)
t.right(90)
t.forward(b)
t.right(135)
t.forward(a)
t.left(135)
t.forward(2 * b)
t.right(135)
t.forward(a)
t.right(135)
t.forward(2 * b)
t.right(135)
t.forward(a)

t.hideturtle()

#ts = t.getscreen()
#ts.getcanvas().postscript(file="nikolaus.eps")

t.Screen().exitonclick()
