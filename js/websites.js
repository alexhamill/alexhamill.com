let websites = ["Animation", "gradecalc", "pt2", "stylepractive"];
let curslide = 0;
function Listeners() {
    let cubes = document.getElementById('arrow');
    cubes.addEventListener('click', scroll);
}
function scroll(){
    
    console.log('scrolling');
    curslide++;
    let div = createDiv();
    div.style.top = 'calc(50% - 50px)';
    lastdiv = document.getElementById('div'+(curslide-1));
    lastdiv.style.top = '110%';

}
function createDiv(){
    let div = document.createElement('div');
    div.id = 'div'+curslide;
    let iframe = document.createElement('iframe');
    iframe.src = 'websites/'+websites[curslide]+"/"+websites[curslide]+'.html';
    div.classList.add('div');
    document.body.appendChild(div);
    div.appendChild(iframe);
    console.log('div created');
    
    div.style.position = 'absolute';
    div.style.width = '100px';
    div.style.height = '100px';
    iframe.style.width = 'inherit';
    iframe.style.height = 'inherit';
    div.style.top = '-10%';
    div.style.left = 'calc(50% - 50px)';
    div.style.transition = "all 3s ease";
    return div;
}
Listeners();
