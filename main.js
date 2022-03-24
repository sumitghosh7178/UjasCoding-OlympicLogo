canvas=document.getElementById("myCanvas");
cvs=canvas.getContext("2d");

cvs.beginPath();
cvs.strokeStyle="grey"
cvs.lineWidth=4;
cvs.rect(180,200,430,200);
cvs.stroke();

cvs.beginPath();
cvs.strokeStyle="blue"
cvs.lineWidth=5;
cvs.arc(300,282,40,0,2*Math.PI);
cvs.stroke();

cvs.beginPath();
cvs.strokeStyle="black"
cvs.lineWidth=5;
cvs.arc(400,282,40,0,2*Math.PI);
cvs.stroke();

cvs.beginPath();
cvs.strokeStyle="red"
cvs.lineWidth=5;
cvs.arc(500,282,40,0,2*Math.PI);
cvs.stroke();

cvs.beginPath();
cvs.strokeStyle="yellow"
cvs.lineWidth=5;
cvs.arc(350,319,40,0,2*Math.PI);
cvs.stroke();

cvs.beginPath();
cvs.strokeStyle="green"
cvs.lineWidth=5;
cvs.arc(450,319,40,0,2*Math.PI);
cvs.stroke();
