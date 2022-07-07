function onScroll() {
  if (scrollY > 0) {
    nav.classList.add('scroll')
    expanded.classList.add('scroll')
    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
  } else {
    nav.classList.remove('scroll')
    expanded.classList.remove('scroll')
  }
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionEndAt = sectionTop + sectionHeight

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  const sectionEndPassedTargetLine = targetLine >= sectionEndAt

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(
    `.access-links a[href*=${sectionId}]`
  )

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 900
}).reveal('#home, .cards, #about, #contact, footer')
