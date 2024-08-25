require(['https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js'], function () {
    // caurosel
    new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 3000
        },
        spaceBetween: 30,
        effect: "coverflow",
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
    })
});

// ----------

const flags = ['tw', 'jp', 'kr', 'uk']

// click text
const selectedLanguage = document.querySelector('.selected')
const selectedLanguageImg = document.querySelector('.selected > img')
const languageOptions = document.querySelector('.options')

const setFlags = () => {
    // set selected language img
    selectedLanguageImg.setAttribute('src', `images/country_icon/${flags[0]}.png`)

    // set language options imgs
    document.querySelectorAll('.options img')
        .forEach((el, index) => el.setAttribute('src', `images/country_icon/${flags[index + 1]}.png`))
}

setFlags()

// click selected language
selectedLanguage.addEventListener('click', event => {
    // show options
    showOptions()
    event.stopPropagation()
})

// click language option
document.querySelectorAll('.options > div')
    .forEach(el => el.addEventListener('click', event => {
        flags.unshift(flags.splice(event.target.dataset.option, 1))
        setFlags()
        closeOptions()
        event.stopPropagation()
    }))

// click outside
document.addEventListener('click', () => {
    closeOptions()
})

const showOptions = () => {
    languageOptions.classList.add('show')
}

const closeOptions = () => {
    languageOptions.classList.remove('show')
}

// ----------
/**
 * 需求：送出表單時，將資訊顯示在彈窗上
 *
 * 步驟：
 *
 *   1. 點擊送出按鈕
 *      a. select from
 *      b. on click
 *      c. event
 *      d. prevent default (不要送到後端)
 *   2. 取得表單資料
 *      a. event.target
 *   3. 將資料塞進彈窗
 *      a. create modal
 *      b. select 欄位
 *      c. innerText / innerHTML
 */

const form = document.querySelector('form')
const modal = document.querySelector('.modal')
const close = document.querySelector('.close')
const reservationName = document.querySelector('.name-data > span')
const reservationEmail = document.querySelector('.email-data > span')
const reservationTel = document.querySelector('.tel-data > span')

form.addEventListener('submit', e => {
    modal.classList.add('show')

    reservationName.innerText = e.target[2].value
    reservationEmail.innerText = e.target[3].value
    reservationTel.innerText = e.target[4].value

    e.preventDefault()
})

close.addEventListener('click', () => {
    modal.classList.remove('show')
})

// click outside
document.addEventListener('click', () => {
    modal.classList.remove('show')
})

