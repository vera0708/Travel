const slider = document.querySelector('.destinations_3-pictures')
console.log(slider);

const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')

const dots = document.querySelectorAll('.small_circle')
console.log(dots);

let position = 0
let dotIndex = 1

const nextSlide = () => {
    if (position < Math.floor(dots.length / 2) * 860) {
        position += 860
        dotIndex++
    } else {
        position = -860
        dotIndex = 0
    }

    slider.style.left = -position + 'px'
    thisSlide(dotIndex)
}

const prevSlide = () => {
    if (position > -Math.floor(dots.length / 2) * 860) {
        position -= 860
        dotIndex--
    } else {
        position = Math.floor(dots.length / 2) * 860
        dotIndex = Math.floor(dots.length / 2) + 1
    }

    slider.style.left = -position + 'px'
    thisSlide(dotIndex)
}

const thisSlide = (i) => {
    for (let dot of dots) {
        dot.classList.remove('active')
    }
    dots[i].classList.add('active')
}

nextBtn.addEventListener('click', nextSlide)
prevBtn.addEventListener('click', prevSlide)

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        position = 860 * (i - 1)
        slider.style.left = -position + 'px'
        dotIndex = i
        thisSlide(dotIndex)
    })
})