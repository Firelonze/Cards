const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let image = new Image();
image.src = "cards.png";
let cardHeight = image.height/4;
let cardWidth = image.width/13;
let index,row,column;
let stack = [];
for (let i = 0; i < 52; i++) {
  stack.push(i);
}
shuffle(stack);
image.addEventListener('load',()=>{
  for(let i = 0; i<stack.length;i++)
  {
    index = stack[i];
    row = Math.floor(index/13);
    column = index%13;
    x = i%13 * cardWidth;
    y = Math.floor(i/13)*cardHeight;
    context.drawImage(image,column*cardWidth,row*cardHeight,cardWidth,cardHeight,x,y,cardWidth,cardHeight);
  }
})


function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
