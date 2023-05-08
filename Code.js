
var four= function() {
    noLoop();
    background(250, 132, 244);
};

var interval1= function() { 
    
    draw= function() {
        background(87, 70, 217);
        
        image(getImage("cute/Star"),152,33);
        
        textSize(25);
        fill(206, 216, 219);
        text('You have finished the first level!',27,244);
        
        fill(232, 86, 245);
        noStroke();
        rect(153,281,100,50);
        fill(255, 255, 255);
        textSize(20);
        text('Continue',163,313);
        if (mouseIsPressed && mouseX>153 && mouseX<253 && mouseY>281 && mouseY<331){
            four();
        }
        //the cursor
        fill(255, 255, 255);
        noStroke();
        ellipse(mouseX, mouseY, 10, 10);
    };

};

var next3 = function(){
    fill(255, 255, 255);
    textSize(15);
    text("Press 'c' key to continue.",110,50);
    keyPressed=function(){
        if (keyCode===67){
            redraw();
            loop();
            interval1();
        }
    };
};

var three= function() { 
    
    draw= function() {
        background(100, 210, 250);
        
        //the question
        fill(255, 255, 255);
        textSize(20);
        text('What is the correct formula for Tan(x)? ',37,111);
        
        //the options
        fill(109, 152, 227);
        rect(144,147,130,40);
        fill(255, 255, 255);
        textSize(18);
        text('Cos(x)/Sec(x)',155,171);
        
        fill(109, 152, 227);
        rect(144,194,130,40);
        fill(255, 255, 255);
        text('Sin(x)/Cos(x)',161,220);
        
        fill(109, 152, 227);
        rect(144,242,130,40);
        fill(255, 255, 255);
        text('Cos(x)/Sin(x)',161,267);
        
        fill(109, 152, 227);
        rect(144,289,130,40);
        fill(255, 255, 255);
        text('Cot(x)/Cos(x)',157,316);
        
        //the cursor
        fill(255, 255, 255);
        noStroke();
        ellipse(mouseX, mouseY, 10, 10);
        
        if (mouseIsPressed && mouseX>152 && mouseX<252 && mouseY>147 && mouseY<187) {
            noLoop();
            fill(240, 91, 91);
            rect(144,147,130,40);
            fill(255, 255, 255);
            text('Cos(x)/Sec(x)',155,171);
            
            fill(112, 240, 105);
            rect(144,194,130,40);
            fill(255, 255, 255);
            text('Sin(x)/Cos(x)',161,220);
                
            textSize(23);
            fill(6, 17, 179);
            text('WRONG!',145,370);
            //loop();
            next3();
        }
        
        else if (mouseIsPressed && mouseX>152 && mouseX<252 && mouseY>194 && mouseY<237) {
            noLoop();
            fill(112, 240, 105);
            rect(144,194,130,40);
            fill(255, 255, 255);
            text('Sin(x)/Cos(x)',161,220);
            
            textSize(23);
            fill(6, 17, 179);
            text('CORRECT!',151,370);
            //loop();
            next3();
        }
        
        else if (mouseIsPressed && mouseX>152 && mouseX<252 && mouseY>242 && mouseY<282) {
            noLoop();
            fill(240, 91, 91);
            rect(144,242,130,40);
            fill(255, 255, 255);
            text('Cos(x)/Sin(x)',161,267);
            
            fill(112, 240, 105);
            rect(144,194,130,40);
            fill(255, 255, 255);
            text('Sin(x)/Cos(x)',161,220);
            
            textSize(23);
            fill(6, 17, 179);
            text('WRONG!',151,370);
            //loop();
            next3();
        }
        else if (mouseIsPressed && mouseX>152 && mouseX<252 && mouseY>289 && mouseY<329) {
            noLoop();
            fill(240, 91, 91);
            rect(144,289,130,40);
            fill(255, 255, 255);
            text('Cot(x)/Cos(x)',157,316);
            
            fill(112, 240, 105);
            rect(144,194,130,40);
            fill(255, 255, 255);
            text('Sin(x)/Cos(x)',161,220);
            
            textSize(23);
            fill(6, 17, 179);
            text('WRONG!',151,370);
            //loop();
            next3();
        }
        
    };
    
};


var next2 = function(){
    fill(255, 255, 255);
    textSize(15);
    text("Press 'b' key to continue.",110,50);
    keyPressed=function(){
        if (keyCode===66){
            redraw();
            loop();
            three();
        }
    };
};

var two= function() { 
    
    draw= function() {
        background(127, 206, 235);
        
        //the question
        fill(255, 255, 255);
        textSize(20);
        text('What is the reciprocal of Cot(x)? ',57,111);
        
        //the options
        fill(109, 152, 227);
        rect(152,147,100,40);
        fill(255, 255, 255);
        text('Sin(x)',174,171);
        
        fill(109, 152, 227);
        rect(152,194,100,40);
        fill(255, 255, 255);
        text('Cos(x)',172,220);
        
        fill(109, 152, 227);
        rect(152,242,100,40);
        fill(255, 255, 255);
        text('Cosec(x)',164,267);
        
        fill(109, 152, 227);
        rect(152,289,100,40);
        fill(255, 255, 255);
        text('Tan(x)',173,316);
        
        //the cursor
        fill(255, 255, 255);
        noStroke();
        ellipse(mouseX, mouseY, 10, 10);
        
        if (mouseIsPressed && mouseX>152 && mouseX<252 && mouseY>147 && mouseY<187) {
            noLoop();
            fill(240, 91, 91);
            rect(152,147,100,40);
            fill(255, 255, 255);
            text('Sin(x)',174,171);
            
            fill(112, 240, 105);
            rect(152,289,100,40);
            fill(255, 255, 255);
            text('Tan(x)',173,316);
            
            textSize(23);
            fill(49, 59, 247);
            text('WRONG!',152,370);
            //noLoop();
            next2();
        }
        
        else if (mouseIsPressed && mouseX>152 && mouseX<252 && mouseY>194 && mouseY<237) {
            noLoop();
            fill(240, 91, 91);
            rect(152,194,100,40);
            fill(255, 255, 255);
            text('Cos(x)',172,220);
            
            fill(112, 240, 105);
            rect(152,289,100,40);
            fill(255, 255, 255);
            text('Tan(x)',173,316);
                
            textSize(23);
            fill(49, 59, 247);
            text('WRONG!',151,370);
            noLoop();
            next2();
        }
        
        else if (mouseIsPressed && mouseX>152 && mouseX<252 && mouseY>242 && mouseY<282) {
            noLoop();
            fill(240, 91, 91);
             rect(152,242,100,40);
            fill(255, 255, 255);
            text('Cosec(x)',164,267);
            
            fill(112, 240, 105);
            rect(152,289,100,40);
            fill(255, 255, 255);
            text('Tan(x)',173,316);
                
            textSize(23);
            fill(49, 59, 247);
            text('WRONG!',151,370);
            noLoop();
            next2();
        }
        else if (mouseIsPressed && mouseX>152 && mouseX<252 && mouseY>289 && mouseY<329) {
            noLoop();
            fill(112, 240, 105);
            rect(152,289,100,40);
            fill(255, 255, 255);
            text('Tan(x)',173,316);
            
            
            textSize(23);
            fill(49, 59, 247);
            text('CORRECT!',143,370);
            noLoop();
            next2();
        }
        
    };
    
};

var next = function(){
    fill(255, 255, 255);
    textSize(15);
    text("Press 'a' key to continue.",110,50);
    keyPressed=function(){
        if (keyCode===65){
                redraw();
                loop();
                two();
        }
    };
    
};

var one= function() { 
    
    draw= function() {
        background(100, 210, 250);
        
        //the question
        fill(255, 255, 255);
        textSize(20);
        text('What is the reciprocal of sin(x)? ',57,111);
        
        //the options
        fill(109, 152, 227);
        rect(152,147,100,40);
        fill(255, 255, 255);
        text('Cosec(x)',163,171);
        
        fill(109, 152, 227);
        rect(152,194,100,40);
        fill(255, 255, 255);
        text('Cos(x)',172,220);
        
        fill(109, 152, 227);
        rect(152,242,100,40);
        fill(255, 255, 255);
        text('Sec(x)',172,267);
        
        fill(109, 152, 227);
        rect(152,289,100,40);
        fill(255, 255, 255);
        text('Tan(x)',173,316);
        
        //the cursor
        fill(255, 255, 255);
        noStroke();
        ellipse(mouseX, mouseY, 10, 10);
        
        if (mouseIsPressed && mouseX>152 && mouseX<252 && mouseY>147 && mouseY<187) {
            noLoop();
            fill(112, 240, 105);
            rect(152,147,100,40);
            fill(255, 255, 255);
            text('Cosec(x)',163,171);
            
            textSize(23);
            fill(6, 17, 179);
            text('CORRECT!',145,370);
            //loop();
            next();
        }
        
        else if (mouseIsPressed && mouseX>152 && mouseX<252 && mouseY>194 && mouseY<237) {
            noLoop();
            fill(240, 91, 91);
            rect(152,194,100,40);
            fill(255, 255, 255);
            text('Cos(x)',172,220);
            
            fill(112, 240, 105);
            rect(152,147,100,40);
            fill(255, 255, 255);
            text('Cosec(x)',163,171);
            
            textSize(23);
            fill(6, 17, 179);
            text('WRONG!',151,370);
            //loop();
            next();
        }
        
        else if (mouseIsPressed && mouseX>152 && mouseX<252 && mouseY>242 && mouseY<282) {
            noLoop();
            fill(240, 91, 91);
            rect(152,242,100,40);
            fill(255, 255, 255);
            text('Sec(x)',172,267);
            
            fill(112, 240, 105);
            rect(152,147,100,40);
            fill(255, 255, 255);
            text('Cosec(x)',163,171);
            
            textSize(23);
            fill(6, 17, 179);
            text('WRONG!',151,370);
            //loop();
            next();
        }
        else if (mouseIsPressed && mouseX>152 && mouseX<252 && mouseY>289 && mouseY<329) {
            noLoop();
            fill(240, 91, 91);
            rect(152,289,100,40);
            fill(255, 255, 255);
            text('Tan(x)',173,316);
            
            fill(112, 240, 105);
            rect(152,147,100,40);
            fill(255, 255, 255);
            text('Cosec(x)',163,171);
            
            textSize(23);
            fill(6, 17, 179);
            text('WRONG!',151,370);
            //loop();
            next();
        }
        
    };
    
};


var entry= function() { 
    draw= function() {
        background(219, 131, 213);
        
        fill(255, 255, 255);
        textSize(25);
        text('Starting Level 1 Now...',79,290,308,131);
        
        //the button
        fill(255, 209, 209);
        stroke(169, 88, 201);
        rect(150,335,103,53);
        fill(109, 22, 181);
        textSize(16);
        text("Continue",170,369);
        
        //the cursor
        fill(255, 255, 255);
        noStroke();
        ellipse(mouseX, mouseY, 10, 10);
        
        if (mouseIsPressed && mouseX>150 && mouseX<253 && mouseY>335 && mouseY<382){
            one();
        }
    };
};

draw= function() {
    background(179, 52, 52);
     stroke(240, 72, 173);
     fill(255, 209, 209);
     rect(150,200,103,53);
     fill(250, 95, 95);
     textSize(12);
     text("PRESS TO PLAY",156,231);
     
     //the cursor
     noStroke();
     fill(255, 255, 255);
     ellipse(mouseX, mouseY, 10, 10);
    
     fill(235, 202, 202);
     if (mouseIsPressed && mouseX>153 && mouseX<253 && mouseY>200 && mouseY<253){
         entry();
     }
};


