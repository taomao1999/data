let timeUse;
let date;

let dateArray = [];
let ps4Array = [];
let pcArray = [];
let nsArray = [];
let iphoneArray = [];
let padArray = [];

let canvas;

function preload(){
  timeUse = loadTable('js/timeUse.csv', 'csv', 'header');
}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.id("myChart");

  for (var i = 0; i < timeUse.getRowCount(); i++){

    date = timeUse.getString(i, 'Date');

    dateArray.push(date);
    ps4Array.push(timeUse.getNum(i, 'PS4'));
    pcArray.push(timeUse.getNum(i, 'PC'));
    nsArray.push(timeUse.getNum(i, 'SWITCH'));
    iphoneArray.push(timeUse.getNum(i, 'IPHONE'));
    padArray.push(timeUse.getNum(i, 'IPAD'));

}
loadGraph();

}

function draw(){

}


function loadGraph(){
  var ctx = document.getElementById('myChart').getContext('2d');

  var mixedChart = new Chart(ctx, {
      type: 'line',
      data: {

        datasets: [{
           label: 'PS4',
          data: ps4Array,

         backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
         fill:false,
          order: 1
         }, {
           label: 'PC',
           data: pcArray,
           type: 'line',
           borderColor: 'rgba(255, 222, 20, 1)',

          borderWidth: 1,
           fill: false,
          order: 2
       }, {
         label: 'Switch',
         data: nsArray,
         type: 'line',
         borderColor: 'rgba(70, 180, 165, 1)',

        borderWidth: 1,
         fill: false,
        order: 3
     }, {
       label: 'iphone',
       data: iphoneArray,
       type: 'line',
       borderColor: 'rgba(255, 99, 255, 1)',

      borderWidth: 1,
       fill: false,
      order: 4
   }, {
     label: 'ipad',
     data: padArray,
     type: 'line',
     borderColor: 'rgba(132, 99, 255, 1)',

    borderWidth: 1,
     fill: false,
    order: 5
 }],
         labels: dateArray
       },
       options: {

         scales: {
           xAxes: [{ stacked: true }],
           yAxes: [{ stacked: true }]
         }
       }

     });





















}
