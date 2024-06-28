export const anhcorScroll = (anchor: string) => {
  if (process.client) {
    const targetElement = document.getElementById(anchor)
    if (targetElement) {
      const offset = 180
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset - offset

      window.scroll({
        top: targetPosition,
        behavior: 'smooth'
      })
    } else {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
