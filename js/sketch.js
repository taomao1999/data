let table;

function preload(){
table = loadTable ("assets/data.csv","csv","header");

}



function setup() {
  // put setup code here
  createCanvas(displayWidth,displayHeight);
  background(220);
  console.log(table);
  textAlign(CENTER);

  for(let r = 0; r<table.getRowCount();r++){
    const name = table.getString(r,"Date");
    const ps4 = table.getNum(r,"PS4");
    const pc = table.getNum(r,"PC");
    const iphone = table.getNum(r,"IPHONE");
    const sn = table.getNum(r,"SWITCH");
    const pad = table.getNum(r,"IPAD");
    //console.log(name);
    const x = random(0,displayWidth-200);
    const y = random(0,displayHeight-200);
    const size = map(ps4,0,345,10,100);
    const size1 = map(pc,0,345,10,100);
    const size2 = map(iphone,0,345,10,100);
    const size3 = map(sn,0,345,10,100);
    const size4 = map(pad,0,345,10,100);
    fill(180,80,10);
    circle(x,y,size);
    fill(50,200,50);
    rect(x,y,size1);
    fill(90,10,180);
    circle(x,y,size2);
    fill(180,90,150);
    rect(x,y,size3);
    fill(200,180,50);
    circle(x,y,size4);

    fill(0);
    text(name,x,y + size / 2+5);

  }
}

function draw() {
  // put drawing code here


}
