import turtle as t

t.setup(width=800, height=600)
t.speed("fastest")



def tree_level(länge, level, max_level, winkel):
    #rekursiv äste zeichnen
    t.width(t.width() * 0.75)
    länge *= 0.75

    #linker zweig
    t.left(winkel)
    t.forward(länge)
    if level < max_level:
        tree_level(länge, level + 1, max_level, winkel)
    t.back(länge)


    #rechter zweig
    t.right(2 * winkel)
    t.forward(länge)
    if level < max_level:
        tree_level(länge, level + 1, max_level, winkel)
    t.back(länge)
    t.left(winkel)


#Parameter:
max_level = 12
länge = 120
winkel = 18


#stamm zeichnen
t.width(max_level)
t.up()
t.left(90)
t.back(100 + länge)
t.down()
t.forward(länge)

#äste zeichnen
tree_level(länge, 2, max_level, winkel)

t.hideturtle()
t.up()
t.setpos(-50, 250)
t.write("Tiefe: "+ str(max_level), font=("Arial", 16, "normal"))


t.Screen().exitonclick()