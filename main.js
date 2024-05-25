function setup(){
    canvas=createCanvas(550,550)
    canvas.position(110,250)
    video=createCapture(VIDEO)
    video.hide()

    fill(205,92,92)
    circle(70,70,80)

    fill(205,92,92)
    circle(480,70,80)

    fill(205,92,92)
    circle(70,480,80)

    fill(205,92,92)
    circle(480,480,80)

    fill(127,255,0)
    rect(110,60,330,20)

    fill(127,255,0)
    rect(60,110,20,330)

    fill(127,255,0)
    rect(110,470,330,20)

    fill(127,255,0)
    rect(470,110,20,330)
}


function draw()
{
    image(video, 150, 175, 250,200)
}

function take_snapshot()
{
    save("jessica.png")
}