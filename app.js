let i=0;
let data;
let iframeElement = document.createElement('iframe');
iframeElement.src="about:blank";
iframeElement.allowFullscreen = true;
iframeElement.width = '100%';
iframeElement.height = '100%';
iframeElement.className = 'frame';
iframeElement.onload = ()=>{
 // iframeElement.parentElement.style.background = 'none';
}
document.body.querySelector('div').appendChild(iframeElement);
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);
      main();
    }
  };
xhttp.open("GET", "data.json", true);
xhttp.send();

function main(){
        iframeElement.src='https://www.shadertoy.com/embed/'+data.Results[i]+'?gui=true&t=10&paused=false&muted=false';
        i++;
        console.log(iframeElement.src);
        setTimeout(()=>{main();},10000);
}