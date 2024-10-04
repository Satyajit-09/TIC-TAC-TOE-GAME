
let divs= document.querySelectorAll('#maindiv div');
let ctn= [];
let z=0;
let out= document.querySelector('#res');
for(let i=0;i<3;i++){
       ctn.push([]);
       for(let j=0;j<3;j++){
             ctn[i].push(divs[z].textContent);
       }
       z++;
}   
let sign= false; 
let state=true;
let turns=0;
for(let div of divs){
     div.addEventListener('click',()=>{
      if(state){ let sign= current();
        let tar;
        let next;
        if(sign){
               tar='X';
               next='O';
        }else{
             tar='O';
             next='X';
        }
        div.textContent=`${tar}`; 
        out.textContent=`player ${next} turn`
        let string;
        for(let str of div.classList){
              string= str;
        }
        let i= string[1];
        let j= string[2];
        ctn[i][j]=`${tar}`;
        let res= check(ctn,tar);
        turns++;
        if(res){
            out.textContent=`player ${tar} wins` ; 
            state=false;
        }  
        else if(turns==9){
            out.textContent=`Match Draws` ; 
            state=false;
      }
      }
      })  
} 

function current(){
        sign= !sign;
        return sign;
}   
let bt= document.querySelector('#btn');
bt.addEventListener('click',()=>{
        for(let div of divs){
              div.textContent='';
        }
        for (let i = 0; i < ctn.length; i++) {
            for (let j = 0; j < ctn[i].length; j++) {
                ctn[i][j] = '';
            }
        }        
        out.textContent=`player X turn`;
        sign=false;
        state=true;
        turns=0;
})
function check(board,player){
      for (let row = 0; row < 3; row++) {
            if (board[row][0] == player && board[row][1] == player && board[row][2] == player) {
                return true;
            }
        }  
        for (let col = 0; col < 3; col++) {
            if (board[0][col] == player && board[1][col] == player && board[2][col] == player) {
                return true;
            }
        }
        // Diagonal Wins
        if (board[0][0] == player && board[1][1] == player && board[2][2] == player) {
            return true;
        }
        if (board[0][2] == player && board[1][1] == player && board[2][0] == player) {
            return true;
        } 
        return false;
}












 





  
 