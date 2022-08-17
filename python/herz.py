import turtle 


turtle.width(30)

  
def curve(): 
    for i in range(200): 
  
        
        turtle.right(1) 
        turtle.forward(1) 
  
def heart(): 
  
    
    turtle.fillcolor('red') 
  
    
    turtle.begin_fill() 
  
    
    turtle.left(140) 
    turtle.forward(113) 
  
    
    curve() 
    turtle.left(120) 
  
    
    curve() 
  
    
    turtle.forward(112) 
  
    
    turtle.end_fill() 
  
def txt(): 
  
    
    turtle.up() 
  
    
    turtle.setpos(-68, 95) 
  
    
    turtle.down() 
  
    
    turtle.color('lightgreen') 
  
    
    
    turtle.write("Hab dich lieb", font=( 
      "Verdana", 12, "bold")) 
  
  
heart() 
  
txt() 
  
turtle.ht()


turtle.Screen().exitonclick()