export function getSizeImage(imgUrl, size) {
  return `${imgUrl}?param=${size}x${size}`;
}

export function getCount(count) {
  if(count < 10000) {
    return count
  } else if(count / 10000 < 10000) {
    return Math.floor(count / 1000) / 10 + '万'
  } else {
    return Math.floor(count / 1000000) / 10000000 + '亿'
  }
}
