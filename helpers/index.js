export function changeRankName(rank) {
  switch (rank) {
    case 'D': {
      return 0
    }
    case 'C': {
      return 1
    }
    case 'B': {
      return 2
    }
    case 'A': {
      return 3
    }
    case 'S': {
      return 4
    }
    default: {
      return rank
    }
  }
}

export function sortItem(list, type, reverse) {
  console.log(reverse)
  if (type === 'title') {
    return !reverse
      ? list.sort((a, b) => a.title.localeCompare(b.title))
      : list.sort((a, b) => b.title.localeCompare(a.title))
  }
  return !reverse
    ? list.sort((a, b) => changeRankName(a[type]) - changeRankName(b[type]))
    : list.sort((a, b) => changeRankName(b[type]) - changeRankName(a[type]))
}
