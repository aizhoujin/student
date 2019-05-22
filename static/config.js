let baseUrl = '';
let base_baseUrl = '';
let iconfontVersion = ['1186103_3ip8jjqzprs'];
let iconfontUrl = `//at.alicdn.com/t/font_$key.css`;
let codeUrl = `${baseUrl}/code`;
const env = process.env;
// 开发环境
// baseUrl = `http://localhost:8080/wechat`;

//测试环境
// baseUrl = `http://biz.ngrok.eanfang.net:89/wechat`;
// baseUrl = `http://tea.ngrok.eanfang.net:89/wechat`;
baseUrl = `http://api.xiaoxunbang.com/wechat`;

base_baseUrl = `http://api.xiaoxunbang.com`;


export {
  baseUrl,
  base_baseUrl,
  iconfontUrl,
  iconfontVersion,
  codeUrl,
  env
}
