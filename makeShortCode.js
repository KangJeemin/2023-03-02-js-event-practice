let moveBtn = document.getElementById('move-btn');
let root = document.getElementById('root');

let body = document.getElementsByTagName('body');
let everyBody = document.querySelector('*');


let h1 = document.createElement('h1');
let main = document.createElement('main');


moveBtn.appendChild(h1)
moveBtn.children[0].innerHTML="move!"

root.appendChild(main)



for(let i=0;i<2;i++){
let section = document.createElement('section'); //이넘도 2번 실행해야하네.
root.children[0].appendChild(section);  
}

for(let i=0;i<2;i++){
let ul = document.createElement('ul');
root.children[0].children[i].appendChild(ul);

  }

for(let i=0;i<5;i++){
  let li = document.createElement('li');
  root.children[0].children[0].children[0].appendChild(li);
  root.children[0].children[0].children[0].children[i].innerHTML=`items-${i+1}`;
}

everyBody.style.margin="0px";
everyBody.style.padding="0px";
everyBody.style.boxSizing="border-box";

body[0].style.overflowX="hidden";
console.dir(root);
root.children[0].children[0].children[0].style.listStyleType="none";

function setMoveBtn(wid,hei,bgc,br,po,bo,le,tr,dis,justify,align){
  const stylearray = ["width","height","backgroundColor","borderRadius","position","bottom","left","transform","display","justifyContent","alignItems"];
  const styleValue =[wid,hei,bgc,br,po,bo,le,tr,dis,justify,align];
  
  for(let i=0;i<stylearray.length;i++){
    moveBtn.style[stylearray[i]]=styleValue[i];
  }
}


function setRoot(wid,hei,bgc,dis,justify,align){
  const stylearray = ["width","height","backgroundColor","display","justifyContent","alignItems"];
  const styleValue =[wid,hei,bgc,dis,justify,align];

  for(let i=0;i<stylearray.length;i++){
    root.style[stylearray[i]]=styleValue[i];
  }
}

function setRootMain(wid,hei,bor,dis,justify,align){
  const stylearray = ["width","height","border","display","justifyContent","alignItems"];
  const styleValue =[wid,hei,bor,dis,justify,align];

  for(let i=0;i<stylearray.length;i++){
    root.children[0].style[stylearray[i]]=styleValue[i];
  }
}
function setRootMainSection(dis,justify,align){
  const stylearray = ["display","justifyContent","alignItems"];
  const styleValue =[dis,justify,align];

  for(let i=0;i<stylearray.length;i++){
    root.children[0].children[0].style[stylearray[i]]=styleValue[i];
    root.children[0].children[1].style[stylearray[i]]=styleValue[i];

  }
}

function setRootMainSectionOneUl(wid,hei,bor){
  const stylearray = ["width","height","border"];
  const styleValue =[wid,hei,bor];

  for(let i=0;i<stylearray.length;i++){
    root.children[0].children[0].style[stylearray[i]]=styleValue[i];
  }
}
function setRootMainSectionTwoUl(wid,hei,bor){
  const stylearray = ["width","height","border"];
  const styleValue =[wid,hei,bor];

  for(let i=0;i<stylearray.length;i++){
    root.children[0].children[1].style[stylearray[i]]=styleValue[i];
  }
}


function setRootMainSectionUlLi(wid,hei,bgc,bor){
  const stylearray = ["width","height","backgroundColor","border"];
  const styleValue =[wid,hei,bgc,bor];

  for(let i=0;i<stylearray.length;i++){
    for(let a=0;a<5;a++){
      root.children[0].children[0].children[0].children[a].style[stylearray[i]]=styleValue[i];
    }
  }
}
setMoveBtn("200px","200px","#fff","50%","fixed","10px","50vw","translate(-50%,0)","flex","center","center");
setRoot("100vw","100vh","cadetblue","flex","center","center");
setRootMain("500px","500px","1px dotted black","flex","center","center");
setRootMainSection("flex","center","center");
setRootMainSectionUlLi("100%","50px","#fff","1px solid black");
setRootMainSectionOneUl("200px","450px","1px dotted black");
setRootMainSectionTwoUl("200px","450px","1px dotted blue",);
console.dir(moveBtn)
console.dir(root);



