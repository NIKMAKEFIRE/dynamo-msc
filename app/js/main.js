// данная логика отвечает за переключение кнопок "игроки", "тренеры", "сотрудники"
const tabsBtn = document.querySelectorAll('.main__tab')
const tabsItems = document.querySelectorAll('.team__item')

tabsBtn.forEach(onTabClick)

function onTabClick(item) {
    item.addEventListener('click', () => {
        let currentBtn = item
        let tabId = currentBtn.getAttribute('data-tab')
        let currentTab = document.querySelector(tabId)

        if (!currentBtn.classList.contains('main__tab--active')) {
            tabsBtn.forEach((item) => {
                item.classList.remove('main__tab--active')
            })

            tabsItems.forEach((item) => {
                item.classList.remove('team__item--active')
            })

            currentBtn.classList.add('main__tab--active')
            currentTab.classList.add('team__item--active')
        }
    })
}

document.querySelector('.main__tab').click()