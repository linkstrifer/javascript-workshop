function assert(pass, description) {
  const styles = 'color: white; padding: .2em 1em; border-radius: 5px; '
  if (pass) {
    const backgroundColor = 'background-color: #2ecc71;'
    console.log('%c✔︎ ok - ' + description, styles + backgroundColor)
  } else {
    const backgroundColor = 'background-color: #e74c3c;'
    console.log('%cx fail - ' + description, styles + backgroundColor)
  }
}

export default assert
