let one = document.getElementById("certificate-slide__one");
let two = document.getElementById("certificate-slide__two");
let three = document.getElementById("certificate-slide__three");

let one_dot = document.getElementById("button__dot_one");
let two_dot = document.getElementById("button__dot_two");
let three_dot = document.getElementById("button__dot_three");

const dots = [
    one_dot,
    two_dot,
    three_dot
];

const img = [
    one,
    two,
    three
];

let index = 1;
function update(){
    for(let i = 0; i < img.length; i++){
    if(i !== index){
        img[i].classList.remove('certificate-slide__image_active');
        img[i].classList.remove('certificate-slide__image_left');
        img[i].classList.remove('certificate-slide__image_right');
        dots[i].classList.remove('button__dot_active');
        dots[i].classList.remove('button__dot_active');
        dots[i].classList.remove('button__dot_active');
    }

    img[index].classList.remove('certificate-slide__image_right');
    img[index].classList.remove('certificate-slide__image_left');
    img[index].classList.remove('certificate-slide__image_right');
    dots[index].classList.add('button__dot_active');

    }
    if(index === 0){
        img[index].classList.add('certificate-slide__image_left' ,'certificate-slide__image_active');
        img[1].classList.add('certificate-slide__image_left');
        img[2].classList.add('certificate-slide__image_left');

    } else if(index === 2){
        img[index].classList.add('certificate-slide__image_right', 'certificate-slide__image_active');
        img[0].classList.add('certificate-slide__image_right');
        img[1].classList.add('certificate-slide__image_right');

    } else{
        img[index].classList.add('certificate-slide__image_active');

    }
}


function prev(){
    index--;
    if(index < 0){
        index = img.length - 1;
    }
    update();
}

function next(){
    index++;
    if(index >= img.length){
        index = 0;
    }
    update();
}