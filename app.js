let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      main(JSON.parse(this.responseText));
    }
  };
xhttp.open("GET", "data.json", true);
xhttp.send();

function main(data){
    let i=0;
    let iframeElement = document.getElementById('frame');
    setInterval(()=>{
        iframeElement.src='https://www.shadertoy.com/embed/'+data.Results[i]+'?gui=true&t=10&paused=false&muted=false';
        i++;
        console.log(iframeElement.src);
    },10000);
}