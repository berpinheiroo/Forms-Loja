let star = document.querySelectorAll('.rates2 img')
let whiteStar = document.querySelectorAll('.rates2 img')


function changeStar(e) {
    e.target.src = 'imgs/star.png'
}

for(let index = 0; index < 5 ;index++){
    star[index].addEventListener('click' , changeStar)
}