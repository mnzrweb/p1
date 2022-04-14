function id0(id){
    return document.getElementById(id);
}
let furl = window.location.search.substr(1);
let indexurl = window.location.search.indexOf("https://drive.google.com/file/d/");
let shared = furl.indexOf("sharing");
if (indexurl != -1 && shared != -1) {
    id0('filelink').value = furl;
    document.querySelector('#loading').setAttribute('style', 'width:auto;height:auto;padding:10px;');
    setTimeout(()=>{
        document.querySelector('#loading').removeAttribute('style');
        setTimeout(()=>{
            let flink = id0("filelink").value;
            let drive = flink.indexOf("google.com/file/d/");
            if(drive != -1){if(drive != -1){
                    var start = flink.indexOf("d/");
                    var end = flink.indexOf("/view");
                    var reString = flink.slice(start+2, end);
                    var dlink = "https://drive.google.com/uc?export=download&id="+reString+"";
                    let askuser = confirm('Converted! Do you want to copy Converted data? Click "Ok" to copy or "Cancel" to do not copy.');
                    if(askuser == true){
                        id0("downlink").value = dlink;
                        navigator.clipboard.writeText(dlink);
                        let copymsg = document.querySelector('#copymsg');
                        setTimeout(() => {  copymsg.style.transition = '2s';copymsg.style.visibility = 'visible'; }, 500);
                        setTimeout(() => {  copymsg.style.opacity = '0';copymsg.style.visibility = 'hidden'; }, 5000);
                    } else {
                        id0("downlink").value = dlink;
                    }
                } else{
                    let dirdrive = flink.indexOf("google.com/uc?export=download&id=");
                    if(dirdrive != -1){
                        let inv = document.querySelector('#downlink');
                        inv.style.color = 'red';
                        id0("downlink").value = "⨻ No need to Conver, already Directed.";
                    } else {
                        let inv = document.querySelector('#downlink');
                        inv.style.color = 'red';
                        id0("downlink").value = "⨻null! ⨷Empty or Invalid URL🔗";
                    }
                }
            }
        },500);
    },2500);
} else {
    function genbtneratelink(){
        let flink = id0("filelink").value;
        let drive = flink.indexOf("google.com/file/d/");
        if(drive != -1){
            var start = flink.indexOf("d/");
            var end = flink.indexOf("/view");
            var reString = flink.slice(start+2, end);
            var dlink = "https://drive.google.com/uc?export=download&id="+reString+"";
            setTimeout(()=>{
                let askuser = confirm('Converted! Do you want to copy Converted data? Click "Ok" to copy or "Cancel" to do not copy.');
                if(askuser == true){
                    id0("downlink").value = dlink;
                    navigator.clipboard.writeText(dlink);
                    let copymsg = document.querySelector('#copymsg');
                    setTimeout(() => {  copymsg.style.transition = '2s';copymsg.style.visibility = 'visible'; }, 500);
                    setTimeout(() => {  copymsg.style.opacity = '0';copymsg.style.visibility = 'hidden'; }, 5000);
                } else {
                    id0("downlink").value = dlink;
                }
            },800);
        } else{
            let dirdrive = flink.indexOf("google.com/uc?export=download&id=");
            if(dirdrive != -1){
                let inv = document.querySelector('#downlink');
                inv.style.color = 'red';
                id0("downlink").value = "⨻ No need to Conver, already Directed.";
            } else {
                let inv = document.querySelector('#downlink');
                inv.style.color = 'red';
                id0("downlink").value = "⨻null! ⨷Empty or Invalid URL🔗";
            }
        }
    }
}

window.onload = function(){
    id0("filelink").focus();
    id0("genbtn").onclick = genbtneratelink;
};
function reload(){
    if(window.location.search.indexOf("?https://drive.google.com/") != -1){
        window.location.href=window.location.origin + window.location.pathname;
    }else{
        location.reload();
    }
}