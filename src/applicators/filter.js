module.exports = {
  name: 'filter',
  desc: 'expects f to be a predicate and keeps all JSON elements for which f yields true.',
  func: (ps, {verbose}) => (jsons, lines) => {
    let jsons2 = []
    const err  = []

    for (let index = 0; index < jsons.length; index++) {
      let obj = jsons[index]
      try {
        let acc = obj
        for (let jndex = 0; jndex < ps.length; jndex++) {
          const p = ps[jndex]
          if (typeof acc === 'undefined' || p(acc) === false) {
            acc = undefined
            break
          }
        }
        obj = acc
        if (typeof obj !== 'undefined') jsons2.push(obj)
      } catch (e) {
        const line = verbose > 0 ? 'Line ' + lines[index] + ': '                           : ''
        const info = verbose > 1 ? ' while transforming:\n' + JSON.stringify(obj, null, 2) : ''
        err.push(line + e + info)
      }
    }

    return {err, jsons: jsons2}
  }
}