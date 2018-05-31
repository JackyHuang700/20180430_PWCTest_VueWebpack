let dataList = []
const template = [
  {
    value: 'jquery',
    label: 'jQuery',
    desc: 'the write less, do more, JavaScript library',
    icon: 'jquery_32x32.png'
  },
  {
    value: 'jquery-ui',
    label: 'jQuery UI',
    desc: 'the official user interface library for jQuery',
    icon: 'jqueryui_32x32.png'
  },
  {
    value: 'sizzlejs',
    label: 'Sizzle JS',
    desc: 'a pure-JavaScript CSS selector engine',
    icon: 'sizzlejs_32x32.png'
  }
]

for (let index = 0; index < 100; index++) {
  var selectCount = parseInt(Math.random() * 100) % 3
  var selectTemplate = JSON.parse(JSON.stringify(template[selectCount]))
  selectTemplate.value = `${index}${selectTemplate.value}`
  selectTemplate.label = `${index}${selectTemplate.label}`
  selectTemplate.desc = `${index}${selectTemplate.desc}`
  selectTemplate.icon = `${index}${selectTemplate.icon}`

  dataList.push(selectTemplate)
}

export {
  dataList
}
