var i=0;
var images = [];
var time = 6000;

images[0] = 'image/21.png';
images[1] = 'image/22.png';
images[2] = 'image/23.png';
images[3] = 'image/24.png';
images[4] = 'image/25.png';
images[5] = 'image/26.png';
images[5] = 'image/27.png';
images[5] = 'image/28.png';

function changeImg()
{
    document.slide.src=images[i];
    if(i<images.length-1)
    {
        i++;
    }
    else{
        i=0;
    }
    setTimeout("changeImg()",time);
}

window.onload = changeImg;

{/* <img src="/Entertainment/" alt=""></img> */}