
const canvas=document.querySelector('.canvas');
const ctx=canvas.getContext('2d');
let logo=false



    let tshirtred={
        url:"img/redtshirt.png",
        opacity:0,
        cargaOK:false,
        x:0,
        y:0
    }
    
    let gorramarihuano={
        url:"img/gorramarihuano.png",
        opacity:0,
        cargaOK:false,
        x:0,
        y:0
    }
    let gorramexicana={
        url:"img/gorramexicana.png",
        opacity:0,
        cargaOK:false,
        x:0,
        y:0
    }
    let gorrabigpiggy={
        url:"img/gorrabigpiggy.png",
        opacity:0,
        cargaOK:false,
        x:0,
        y:0
    }
    let tshirtblue={
        url:"img/tshirtblue.png",
        opacity:0,
        cargaOK:false,
        x:0,
        y:0
    }
    let tshirtbrown={
        url:"img/tshirtbrown.png",
        opacity:0,
        cargaOK:false,
        x:0,
        y:0
    }
    let tshirtgreen={
        url:"img/tshirtgreen.png",
        opacity:0,
        cargaOK:false,
        x:0,
        y:0
    }
    let tshirtwhite={
        url:"img/whitetshirt.png",
        opacity:0,
        cargaOK:false,
        x:0,
        y:0
    }
    let tshirtcyan={
        url:"img/cyantshirt.png",
        opacity:0,
        cargaOK:false,
        x:0,
        y:0
    }
    let tshirtblack={
        url:"img/blacktshirt.png",
        opacity:0,
        cargaOK:false,
        x:0,
        y:0
    } 
    let tshirtpink={
        url:"img/pinktshirt.png",
        opacity:0,
        cargaOK:false,
        x:0,
        y:0
    }
    let gorraminera={
        url:"img/gorraminera.png",
        opacity:0,
        cargaOK:false,
        x:0,
        y:0
    }
    let gorraverdad={
        url:"img/gorraverdad.png",
        opacity:0,
        cargaOK:false,
        x:0,
        y:0
    }
    let penis1={
        url:"img/penis1.png",
        opacity:0,
        cargaOK:false,
        x:0,
        y:0
    }
    let penis2={
        url:"img/penis2.png",
        opacity:0,
        cargaOK:false,
        x:0,
        y:0
    }
    let boxers={
        url:"img/boxers.png",
        opacity:0,
        cargaOK:false,
        x:0,
        y:0
    }
    let background={
        url:"img/averageverdadchan.png",
        cargaOK:false
    }
    let boxerminero={
        url:"img/boxerminero.png",
        opacity:0,
        cargaOK:false,
        x:0,
        y:0
    }
    let sullynodeboxers={
        url:"img/sullynodesboxers.png",
        opacity:0,
        cargaOK:false,
        x:0,
        y:0
    }

tshirtblack.image= new Image()
tshirtpink.image= new Image()
tshirtcyan.image= new Image()
tshirtwhite.image= new Image()
tshirtbrown.image= new Image()
tshirtblue.image= new Image()
tshirtred.image= new Image()
tshirtgreen.image= new Image()
background.image=new Image()
gorrabigpiggy.image=new Image()
gorramarihuano.image=new Image()
gorramexicana.image=new Image()
gorraminera.image=new Image()
gorraverdad.image=new Image()
penis1.image=new Image()
penis2.image=new Image()
boxers.image=new Image()
boxerminero.image=new Image()
sullynodeboxers.image=new Image()

tshirtblack.image.src=tshirtblack.url
tshirtpink.image.src=tshirtpink.url
tshirtcyan.image.src=tshirtcyan.url
tshirtwhite.image.src=tshirtwhite.url
tshirtbrown.image.src=tshirtbrown.url
tshirtblue.image.src=tshirtblue.url
tshirtred.image.src=tshirtred.url
tshirtgreen.image.src=tshirtgreen.url
background.image.src=background.url
gorrabigpiggy.image.src=gorrabigpiggy.url
gorramarihuano.image.src=gorramarihuano.url
gorramexicana.image.src=gorramexicana.url
gorraminera.image.src=gorraminera.url
gorraverdad.image.src=gorraverdad.url
penis1.image.src=penis1.url
penis2.image.src=penis2.url
boxers.image.src=boxers.url
boxerminero.image.src=boxerminero.url
sullynodeboxers.image.src=sullynodeboxers.url


background.image.addEventListener("load",()=>{
    ctx.drawImage(background.image,0,0)
})

//cap:
document.querySelector('.capoption1').addEventListener('click',()=>{
   
    document.querySelector('.cap').style.display='none'
    document.querySelector('.tshirt').style.display='flex'
})
document.querySelector('.capoption2').addEventListener('click',()=>{
    ctx.drawImage(gorrabigpiggy.image,0,0)
    document.querySelector('.cap').style.display='none'
    document.querySelector('.tshirt').style.display='flex'
})
document.querySelector('.capoption3').addEventListener('click',()=>{
    ctx.drawImage(gorramarihuano.image,0,0)
    document.querySelector('.cap').style.display='none'
    document.querySelector('.tshirt').style.display='flex'
})
document.querySelector('.capoption4').addEventListener('click',()=>{
    ctx.drawImage(gorramexicana.image,0,0)
    document.querySelector('.cap').style.display='none'
    document.querySelector('.tshirt').style.display='flex'
})
document.querySelector('.capoption5').addEventListener('click',()=>{
    ctx.drawImage(gorraminera.image,0,0)
    document.querySelector('.cap').style.display='none'
    document.querySelector('.tshirt').style.display='flex'
})
document.querySelector('.capoption6').addEventListener('click',()=>{
    ctx.drawImage(gorraverdad.image,0,0)
    document.querySelector('.cap').style.display='none'
    document.querySelector('.tshirt').style.display='flex'
})

//tshirt:

document.querySelector('.tshirtoption1').addEventListener('click',()=>{
    ctx.drawImage(tshirtblue.image,0,0)
    document.querySelector('.tshirt').style.display='none'
    document.querySelector('.penis').style.display='flex'
})
document.querySelector('.tshirtoption2').addEventListener('click',()=>{
    ctx.drawImage(tshirtgreen.image,0,0)
    document.querySelector('.tshirt').style.display='none'
    document.querySelector('.penis').style.display='flex'
})
document.querySelector('.tshirtoption3').addEventListener('click',()=>{
    ctx.drawImage(tshirtpink.image,0,0)
    document.querySelector('.tshirt').style.display='none'
    document.querySelector('.penis').style.display='flex'
})
document.querySelector('.tshirtoption4').addEventListener('click',()=>{
    ctx.drawImage(tshirtblack.image,0,0)
    document.querySelector('.tshirt').style.display='none'
    document.querySelector('.penis').style.display='flex'
})
document.querySelector('.tshirtoption5').addEventListener('click',()=>{
    ctx.drawImage(tshirtwhite.image,0,0)
    document.querySelector('.tshirt').style.display='none'
    document.querySelector('.penis').style.display='flex'
})
document.querySelector('.tshirtoption6').addEventListener('click',()=>{
    ctx.drawImage(tshirtred.image,0,0)
    document.querySelector('.tshirt').style.display='none'
    document.querySelector('.penis').style.display='flex'
})

//penis:

document.querySelector('.penisoption1').addEventListener('click',()=>{
    ctx.drawImage(penis1.image,0,0)
    document.querySelector('.penis').style.display='none'
    document.querySelector('.filereader').style.display='flex'
})
document.querySelector('.penisoption2').addEventListener('click',()=>{
    ctx.drawImage(penis2.image,0,0)
    document.querySelector('.penis').style.display='none'
    document.querySelector('.filereader').style.display='flex'
})
document.querySelector('.penisoption3').addEventListener('click',()=>{
 
    document.querySelector('.penis').style.display='none'
    document.querySelector('.filereader').style.display='flex'
})
document.querySelector('.penisoption4').addEventListener('click',()=>{
    ctx.drawImage(boxers.image,0,0)
    document.querySelector('.penis').style.display='none'
    document.querySelector('.filereader').style.display='flex'
})
document.querySelector('.penisoption5').addEventListener('click',()=>{
    ctx.drawImage(boxerminero.image,0,0)
    document.querySelector('.penis').style.display='none'
    document.querySelector('.filereader').style.display='flex'
})
document.querySelector('.penisoption6').addEventListener('click',()=>{
    ctx.drawImage(sullynodeboxers.image,0,0)
    document.querySelector('.penis').style.display='none'
    document.querySelector('.filereader').style.display='flex'
})



const userfile=document.getElementById('fileInput')

let print={
    url:'',
  
}

window.onload = function() {
    var input = document.getElementById('fileInput');
    input.addEventListener('change', handleFiles, false);
    
    // set original canvas dimensions as max

    canvas.dataMaxWidth = canvas.width;
    canvas.dataMaxHeight = canvas.height;
}

var URL = window.webkitURL || window.URL;

function handleFiles(e){
    let reader= new FileReader();
    var file = e.target.files[0];

    print.image=new Image()  
    print.image.onload=()=>{
 
     ctx.drawImage(print.image, 207, 240
         , 90, 90)
         document.querySelector('.filereader').style.display='none'
    document.querySelector('.finalMessage').style.display='flex'
   


}
 
    ctx.drawImage(print.image, 20, 20);    
    reader.onloadend = function () {
        print.image.src= reader.result;
    }
    // this is to read the file
    reader.readAsDataURL(file);
}

function saveCanvasLocal(){
   
        const a = document.createElement("a")
        document.body.appendChild(a)
        a.href=canvas.toDataURL();
        a.download="myChan"
        a.click();  
        document.body.removeChild(a) 
    }
 
