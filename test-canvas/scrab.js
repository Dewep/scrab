const scrabbleFR = {
  letters: {
    A: { pts: 1, nb: 9 },
    B: { pts: 3, nb: 2 },
    C: { pts: 3, nb: 2 },
    D: { pts: 2, nb: 3 },
    E: { pts: 1, nb: 15 },
    F: { pts: 4, nb: 2 },
    G: { pts: 2, nb: 2 },
    H: { pts: 4, nb: 2 },
    I: { pts: 1, nb: 8 },
    J: { pts: 8, nb: 1 },
    K: { pts: 10, nb: 1 },
    L: { pts: 1, nb: 5 },
    M: { pts: 2, nb: 3 },
    N: { pts: 1, nb: 6 },
    O: { pts: 1, nb: 6 },
    P: { pts: 3, nb: 2 },
    Q: { pts: 8, nb: 1 },
    R: { pts: 1, nb: 6 },
    S: { pts: 1, nb: 6 },
    T: { pts: 1, nb: 6 },
    U: { pts: 1, nb: 6 },
    V: { pts: 4, nb: 2 },
    W: { pts: 10, nb: 1 },
    X: { pts: 10, nb: 1 },
    Y: { pts: 10, nb: 1 },
    Z: { pts: 10, nb: 1 },
    _: { pts: 0, nb: 2 }
  },
  tileTypes: {
    letterDouble: { name: 'Lettre compte double', color: 'cyan', letter: 2, word: 1, tag: 2 },
    letterTriple: { name: 'Lettre compte triple', color: 'blue', letter: 3, word: 1, tag: 3 },
    wordDouble: { name: 'Mot compte double', color: 'purple', letter: 1, word: 2, tag: 2 },
    wordTriple: { name: 'Mot compte triple', color: 'red', letter: 1, word: 3, tag: 3 }
  },
  size: 15,
  tiles: [
    { x: 0, y: 0, type: 'wordTriple' },
    { x: 7, y: 0, type: 'wordTriple' },
    { x: 14, y: 0, type: 'wordTriple' },
    { x: 0, y: 7, type: 'wordTriple' },
    { x: 14, y: 7, type: 'wordTriple' },
    { x: 0, y: 14, type: 'wordTriple' },
    { x: 7, y: 14, type: 'wordTriple' },
    { x: 14, y: 14, type: 'wordTriple' },
    { x: 7, y: 7, type: 'wordDouble' },
    { x: 1, y: 1, type: 'wordDouble' },
    { x: 2, y: 2, type: 'wordDouble' },
    { x: 3, y: 3, type: 'wordDouble' },
    { x: 4, y: 4, type: 'wordDouble' },
    { x: 13, y: 1, type: 'wordDouble' },
    { x: 12, y: 2, type: 'wordDouble' },
    { x: 11, y: 3, type: 'wordDouble' },
    { x: 10, y: 4, type: 'wordDouble' },
    { x: 1, y: 13, type: 'wordDouble' },
    { x: 2, y: 12, type: 'wordDouble' },
    { x: 3, y: 11, type: 'wordDouble' },
    { x: 4, y: 10, type: 'wordDouble' },
    { x: 13, y: 13, type: 'wordDouble' },
    { x: 12, y: 12, type: 'wordDouble' },
    { x: 11, y: 11, type: 'wordDouble' },
    { x: 10, y: 10, type: 'wordDouble' },
    { x: 5, y: 1, type: 'letterTriple' },
    { x: 9, y: 1, type: 'letterTriple' },
    { x: 1, y: 5, type: 'letterTriple' },
    { x: 5, y: 5, type: 'letterTriple' },
    { x: 9, y: 5, type: 'letterTriple' },
    { x: 13, y: 5, type: 'letterTriple' },
    { x: 1, y: 9, type: 'letterTriple' },
    { x: 5, y: 9, type: 'letterTriple' },
    { x: 9, y: 9, type: 'letterTriple' },
    { x: 13, y: 9, type: 'letterTriple' },
    { x: 5, y: 13, type: 'letterTriple' },
    { x: 9, y: 13, type: 'letterTriple' },
    { x: 3, y: 0, type: 'letterDouble' },
    { x: 11, y: 0, type: 'letterDouble' },
    { x: 6, y: 2, type: 'letterDouble' },
    { x: 8, y: 2, type: 'letterDouble' },
    { x: 0, y: 3, type: 'letterDouble' },
    { x: 7, y: 3, type: 'letterDouble' },
    { x: 14, y: 3, type: 'letterDouble' },
    { x: 2, y: 6, type: 'letterDouble' },
    { x: 6, y: 6, type: 'letterDouble' },
    { x: 8, y: 6, type: 'letterDouble' },
    { x: 12, y: 6, type: 'letterDouble' },
    { x: 3, y: 7, type: 'letterDouble' },
    { x: 11, y: 7, type: 'letterDouble' },
    { x: 2, y: 8, type: 'letterDouble' },
    { x: 6, y: 8, type: 'letterDouble' },
    { x: 8, y: 8, type: 'letterDouble' },
    { x: 12, y: 8, type: 'letterDouble' },
    { x: 0, y: 11, type: 'letterDouble' },
    { x: 7, y: 11, type: 'letterDouble' },
    { x: 14, y: 11, type: 'letterDouble' },
    { x: 6, y: 12, type: 'letterDouble' },
    { x: 8, y: 12, type: 'letterDouble' },
    { x: 3, y: 14, type: 'letterDouble' },
    { x: 11, y: 14, type: 'letterDouble' }
  ]
}
const colors = {
  tileNotConfirmed: '#eae6d7',
  tile: '#CBC3A7',
  tileBorder: '#8a8573',
  black: '#333333',
  grey: '#666666',
  red: '#BF0426',
  purple: '#F24405',
  blue: '#049DBF',
  cyan: '#D5EFF2',
  green: '#40BF3B'
}

const canvas = document.getElementById('scrab')
const ctx = canvas.getContext('2d')

function drawRect (x, y, width, height, fillStyle, lineWidth = 0, strokeStyle = null, radius = 0) {
  ctx.beginPath()
  ctx.moveTo(x + radius, y)
  ctx.lineTo(x + width - radius, y)
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
  ctx.lineTo(x + width, y + height - radius)
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
  ctx.lineTo(x + radius, y + height)
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
  ctx.lineTo(x, y + radius)
  ctx.quadraticCurveTo(x, y, x + radius, y)
  ctx.closePath()

  ctx.lineWidth = lineWidth
  ctx.strokeStyle = strokeStyle
  ctx.fillStyle = fillStyle

  // ctx.rect(x, y, width, height)

  ctx.fill()
  if (lineWidth) {
    ctx.stroke()
  }
}

function redraw (size, letters, hoverX, hoverY, hoverLetter, hoverCallback) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  if (canvas.width !== size) {
    canvas.width = size
    canvas.height = size
  }

  const offsetGrid = Math.round(size * 0.03)
  const sizeTile = Math.round((size - offsetGrid * 2) / scrabbleFR.size)
  const sizeBorderTile = Math.round(sizeTile / 20)
  const sizeTagTile = Math.round(sizeTile / 15)
  const tileBgSize = sizeTile - sizeBorderTile * 2

  const fontTileBg = Math.round(sizeTile / 5) + 'px Verdana'
  const sizeFontLetter = Math.round(sizeTile / 1.5)
  const fontLetter = 'bold ' + sizeFontLetter + 'px Verdana'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  ctx.font = fontTileBg
  for (let y = 0; y < scrabbleFR.size; y++) {
    for (let x = 0; x < scrabbleFR.size; x++) {
      const tileX = offsetGrid + x * sizeTile
      const tileY = offsetGrid + y * sizeTile
      let tileType = null
      for (tile of scrabbleFR.tiles) {
        if (tile.x === x && tile.y === y && scrabbleFR.tileTypes[tile.type]) {
          tileType = scrabbleFR.tileTypes[tile.type]
          break
        }
      }

      drawRect(tileX, tileY, sizeTile, sizeTile, tileType ? colors[tileType.color] : colors.green, sizeBorderTile, colors.black)

      if (tileType) {
        const words = tileType.name.split(' ')
        const wordX = Math.round(tileX + sizeTile / 2)
        const heightWord = Math.round(sizeTile / (words.length + 2))
        let offsetWord = tileY + heightWord * 1.5
        ctx.fillStyle = colors.black
        for (const word of words) {
          ctx.fillText(word, wordX, offsetWord)
          offsetWord += heightWord
        }
      }
    }
  }

  for (let y = 0; y < scrabbleFR.size; y++) {
    for (let x = 0; x < scrabbleFR.size; x++) {
      const tileX = offsetGrid + x * sizeTile
      const tileY = offsetGrid + y * sizeTile
      let tileType = null
      for (tile of scrabbleFR.tiles) {
        if (tile.x === x && tile.y === y && scrabbleFR.tileTypes[tile.type]) {
          tileType = scrabbleFR.tileTypes[tile.type]
          break
        }
      }

      if (tileType) {
        let offsetTag = Math.round((sizeTile - (2 * tileType.tag - 1) * sizeTagTile) / 2)
        for (let t = 0; t < tileType.tag; t++) {
          drawRect(tileX - sizeTagTile, tileY + offsetTag, sizeTagTile, sizeTagTile, colors[tileType.color], 1, colors.black)
          drawRect(tileX + offsetTag, tileY - sizeTagTile, sizeTagTile, sizeTagTile, colors[tileType.color], 1, colors.black)
          drawRect(tileX + sizeTile, tileY + offsetTag, sizeTagTile, sizeTagTile, colors[tileType.color], 1, colors.black)
          drawRect(tileX + offsetTag, tileY + sizeTile, sizeTagTile, sizeTagTile, colors[tileType.color], 1, colors.black)
          offsetTag += sizeTagTile * 2
        }
      }
    }
  }

  ctx.font = fontLetter
  for (const letter of letters) {
    const tileX = offsetGrid + letter.x * sizeTile
    const tileY = offsetGrid + letter.y * sizeTile
    const letterX = Math.round(tileX + sizeTile - sizeTile / 2)
    const letterY = Math.round(tileY + sizeTile - sizeTile / 2)

    if (letter.notConfirmed) {
      drawRect(tileX + sizeBorderTile, tileY + sizeBorderTile, tileBgSize, tileBgSize, colors.tileNotConfirmed, sizeBorderTile, colors.tile, 5)
      ctx.fillStyle = colors.grey
    } else {
      drawRect(tileX + sizeBorderTile, tileY + sizeBorderTile, tileBgSize, tileBgSize, colors.tile, sizeBorderTile, colors.tileBorder, 5)
      ctx.fillStyle = colors.black
    }

    ctx.fillText(letter.l, letterX, letterY)
  }

  if (hoverX && hoverY && hoverCallback) {
    for (let y = 0; y < scrabbleFR.size; y++) {
      const tileY = offsetGrid + y * sizeTile
      if (tileY <= hoverY && tileY + sizeTile > hoverY) {
        for (let x = 0; x < scrabbleFR.size; x++) {
          const tileX = offsetGrid + x * sizeTile
          if (tileX <= hoverX && tileX + sizeTile > hoverX) {
            drawRect(tileX + sizeBorderTile, tileY + sizeBorderTile, tileBgSize, tileBgSize, colors.tileNotConfirmed, sizeBorderTile, colors.tile, 5)

            const letterX = Math.round(tileX + sizeTile - sizeTile / 2)
            const letterY = Math.round(tileY + sizeTile - sizeTile / 2)
            ctx.fillStyle = colors.grey
            ctx.fillText(hoverLetter, letterX, letterY)

            hoverCallback(x, y)
            break
          }
        }
      }
    }
  }
}

const letters = [
  { l: 'D', x: 7, y: 7 },
  { l: 'E', x: 8, y: 7 },
  { l: 'W', x: 9, y: 7 },
  { l: 'E', x: 10, y: 7 },
  { l: 'P', x: 11, y: 7, notConfirmed: true }
]

redraw(Math.min(window.innerHeight, window.innerWidth), letters, 200, 150, 'B', (x, y) => console.log('hover on', x, y))
