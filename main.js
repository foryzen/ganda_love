if(320<=window.innerWidth&&599>=window.innerWidth){
    console.log('smartphone')
}

if(620<=window.innerWidth&&1024>=window.innerWidth){
    console.log('tablet')
}

if(1025<=window.innerWidth){
    console.log('pc')
}

function sc(x){
    return document.getElementById(x)
}

let rotate_deg = 0
let variable_deg = 10
let count = 0

function speed_change(){
    variable_deg = Number(sc('speed').value)
    sc('speed_value').value = variable_deg
}

setInterval(()=>{
    rotate_deg += variable_deg
    if(rotate_deg>3600||rotate_deg<-3600)rotate_deg = 0
    sc('pic').style.rotate = rotate_deg+'deg'
},10)

function next(){
    count++

    if(count==0){
        sc('pic-div').innerHTML = '<img src="gnd.png" id="pic">'
    }else if(count==1){
        sc('pic-div').innerHTML = '<img src="gnd_head.png" id="pic">'
    }else if(count==2){
        sc('pic-div').innerHTML = '<img src="gnd2.png" id="pic">'
    }else if(count==3){
        sc('pic-div').innerHTML = '<img src="gnd2_head.png" id="pic">'
        count = -1
    }
}