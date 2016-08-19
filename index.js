var fs = require('fs');
var china = require('./china.json');
var directlyPro = ['北京', '上海', '天津', '重庆'];
var autoArea = ['西藏', '内蒙古', '宁夏', '广西', '新疆'];
var Admin = ['香港', '澳门']
var aa = china.features.map(function(item) {
  if(directlyPro.indexOf(item.properties.name) > -1) {
    item.properties.name = item.properties.name + '市';
    return item
  }
  if(autoArea.indexOf(item.properties.name) > -1) {
    if(item.properties.name == '宁夏') {
      item.properties.name = item.properties.name + '回族自治区';
      return item
    }
    if(item.properties.name == '广西') {
      item.properties.name = item.properties.name + '壮族自治区';
      return item
    }
    if(item.properties.name == '新疆') {
      item.properties.name = item.properties.name + '维吾尔自治区';
      return item
    }
    item.properties.name = item.properties.name + '自治区';
    return item
  }
  if(Admin.indexOf(item.properties.name) > -1) {
    item.properties.name = item.properties.name + '特别行政区';
    return item
  }
  item.properties.name = item.properties.name + '省';
  return item
})
fs.writeFileSync('newchina.json', JSON.stringify(aa))
