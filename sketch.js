var board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

var w, h;
var ai="X";
var human ="O";
var  current_player=human;
var winner=null

function setup(){

    createCanvas(400, 400);
    w= width/3;
    h=height/3;
}

function draw(){

background("lightblue");
strokeWeight(3)
line(w, 0, w, height);
line (w*2, 0, w*2, height);
line (0, h, width, h);
line(0, h*2, width, h*2);
    
    for (var j= 0; j<3; j++){
    for( var i=0; i<3; i++){

        var x= w*i +w/2;
        var y = h*j + h/2;
        var spot = board[i][j];
        var r = w/4
        if (spot===human){

            noFill();
            ellipse(x, y, r*2)
        }
        else if (spot===ai){

            line(x-r, y-r, x+r, y+r);
            line (x+r, y-r, x-r, y+r);
        }
    }
}

console.log(checkWinner());
}

function mousePressed(){
 
    if (winner==null){
    if (current_player===human){

        var i= floor(mouseX/w);
        var j= floor(mouseY/h);
        if (board[i][j]===' '){
        board[i][j]=human
        current_player=ai;    
    }
}

    else if (current_player===ai){

        var i= floor(mouseX/w);
        var j= floor(mouseY/h);
        if (board[i][j]===' '){
        board[i][j]=ai
        current_player=human;    
    }
    }}
    
}


function equals3(a,b,c){
    
 return a==b && b==c && a!=' ';

}

function checkWinner(){

 
// check horizontal
for (var i=0; i<3; i++){

    if(equals3(board[i][0], board[i][1], board[i][2]))
    {
        winner = board[i][0];
    }
}

//check vertical 

for (var i =0; i<3; i++){

    if (equals3( board[0][i], board[1][i], board[2][i])){

        winner = board[0][i]
    }
}

//check diagonal1


    if (equals3(board[0][0],board[1][1], board[2][2] )){
        winner = board[0][0];

    }

   // check diagonal2

    if (equals3(board[2][0], board[1][1], board[0][2])){
winner = board[2][0];

    }

    let openslots =0
    for (var i=0; i<3; i++){
        for (var j=0; j<3; j++){

            if (board[i][j]==' '){
                openslots++;
            }
        }
    }

    if (winner==null && openslots==0){
        return 'tie'
    }
    else 
    {
        return winner
    }

}