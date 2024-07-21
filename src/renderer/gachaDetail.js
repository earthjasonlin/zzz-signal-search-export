import { isWeapon, isCharacter, isBangboo } from './utils'

const itemCount = (map, name) => {
  if (!map.has(name)) {
    map.set(name, 1)
  } else {
    map.set(name, map.get(name) + 1)
  }
}

const gachaDetail = (data) => {
  const detailMap = new Map()
  for (let [key, value] of data) {
    let detail = {
      count2: 0, count3: 0, count4: 0,
      count2w: 0, count3w: 0, count4w: 0, count3c: 0, count4c: 0, count3b: 0, count4b: 0,
      weapon2: new Map(), weapon3: new Map(), weapon4: new Map(),
      char3: new Map(), char4: new Map(),
      bang3: new Map(), bang4: new Map(),
      date: [],
      ssrPos: [], countMio: 0, total: value.length,
    }
    let lastSSR = 0
    let dateMin = 0
    let dateMax = 0
    value.forEach((item, index) => {
      const { time, name, item_type: type, rank_type: rank } = item
      const timestamp = new Date(time).getTime()
      if (!dateMin) dateMin = timestamp
      if (!dateMax) dateMax = timestamp
      if (dateMin > timestamp) dateMin = timestamp
      if (dateMax < timestamp) dateMax = timestamp
      if (rank === '2') {
        detail.count2++
        detail.countMio++
        if (isWeapon(type)) {
          detail.count2w++
          itemCount(detail.weapon2, name)
        }
      } else if (rank === '3') {
        detail.count3++
        detail.countMio++
        if (isWeapon(type)) {
          detail.count3w++
          itemCount(detail.weapon3, name)
        } else if (isBangboo(type)) {
          detail.count3b++
          itemCount(detail.bang3, name)
        } else if (isCharacter(type)) {
          detail.count3c++
          itemCount(detail.char3, name)
        }
      } else if (rank === '4') {
        detail.ssrPos.push([name, index + 1 - lastSSR, time, key])
        lastSSR = index + 1
        detail.count4++
        detail.countMio = 0
        if (isWeapon(type)) {
          detail.count4w++
          itemCount(detail.weapon4, name)
        } else if (isBangboo(type)) {
          detail.count4b++
          itemCount(detail.bang4, name)
        } else if (isCharacter(type)) {
          detail.count4c++
          itemCount(detail.char4, name)
        }
      }
    })
    detail.date = [dateMin, dateMax]
    if (detail.total) {
      detailMap.set(key, detail)
    }
  }
  return detailMap
}

export default gachaDetail