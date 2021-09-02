const data = `id,name,age
1, john smith, 29
2, jane smith, 30`

const transform = data.split('\n')

const keys = transform[0].split(',')
const values = transform.slice(1).map(item => item.split(','))

const rezult = values.map(item => {
  return item.reduce((obj, elem, index) => {
    obj[`${keys[index]}`] = elem;
    return obj
  }, {})
})

console.log('rezult: ', rezult);
