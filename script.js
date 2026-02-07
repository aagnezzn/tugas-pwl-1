/* ================= MENU TOGGLE ================= */
const navMenu = document.querySelector('.nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

/* buka menu */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* tutup menu */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* ================= CLOSE MENU SAAT LINK DIKLIK ================= */
const navLinks = document.querySelectorAll('.nav-link')

function linkAction() {
    navMenu.classList.remove('show-menu')
}

navLinks.forEach(link => link.addEventListener('click', linkAction))

/* ================= ACTIVE LINK SAAT SCROLL ================= */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 100
        const sectionId = current.getAttribute('id')

        const navLink = document.querySelector(
            '.nav-menu a[href="#' + sectionId + '"]'
        )

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.classList.add('active-link')
        } else {
            navLink.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)
