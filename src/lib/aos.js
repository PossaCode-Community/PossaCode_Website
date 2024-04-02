import AOS from 'aos'

export function aosInit() {
  AOS.init({ duration: 800, easing: 'ease-out', once: true, offset: 75 })
}
