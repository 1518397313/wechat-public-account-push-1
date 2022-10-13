export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wxe192d6d8385c226a",
    // 公众号appSecret
    appSecret: "e76e0c5ca1d6a868b7eb5fa6c0eb5852",
    // 模板消息id
    templateId: "P9b3G_jXW26r7DUmmRuOwKpDfiER4k48_nfC1n5PsbA",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["obiK852weaduIy95o8uciNID5wPA","obiK8584FzaTwsHlA0kGdtTifd6Y"],
     
    // 信息配置
    ewai: "   ",
    // 所在省份
    province: "河南",
    // 所在城市
    city: "郑州",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "李选", "year": "2003", "date": "08-22", "type": 'new'},
      {"name": "李选", "year": "2003", "date": "08-22", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2022-09-21",
    // 结婚纪念日
    
    }

 //{{date.DATA}}  
//城市：{{city.DATA}}  
//天气：{{weather.DATA}}  
//最低气温: {{min_temperature.DATA}}  
//最高气温: {{max_temperature.DATA}}  
//今天是我们恋爱的第{{love_day.DATA}}天
// 
 //{{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
