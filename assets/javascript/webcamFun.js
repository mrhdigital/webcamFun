//alert("js is linked"); 
const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
    navigator.mediaDevices.getUserMedia({video: true, audio: false})
    .then(localMediaStream => {
        console.log(localMediaStream);
        //video.src = window.URL.createObjectURL(localMediaStream);
        video.srcObject = localMediaStream;
        video.play();
    })
    .catch(err => {
        console.log(`OH NO!!`, err);
    });
}
function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    //console.log(width, height); // 640x 480
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
        ctx.drawImage(video,0,0,width,height);
    },16);
}
getVideo();
