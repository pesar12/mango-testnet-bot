const _0x13517a=_0x21fb;(function(_0x1c4c94,_0x25f585){const _0x2010d0=_0x21fb,_0xd33a75=_0x1c4c94();while(!![]){try{const _0x54a97f=parseInt(_0x2010d0(0xf6))/0x1*(parseInt(_0x2010d0(0xec))/0x2)+parseInt(_0x2010d0(0xf1))/0x3*(parseInt(_0x2010d0(0xfa))/0x4)+parseInt(_0x2010d0(0xf9))/0x5*(parseInt(_0x2010d0(0xe9))/0x6)+parseInt(_0x2010d0(0xf0))/0x7+-parseInt(_0x2010d0(0xe0))/0x8*(parseInt(_0x2010d0(0xe8))/0x9)+-parseInt(_0x2010d0(0xf7))/0xa*(parseInt(_0x2010d0(0xed))/0xb)+parseInt(_0x2010d0(0xe4))/0xc*(parseInt(_0x2010d0(0xe2))/0xd);if(_0x54a97f===_0x25f585)break;else _0xd33a75['push'](_0xd33a75['shift']());}catch(_0x3b5f7c){_0xd33a75['push'](_0xd33a75['shift']());}}}(_0x3b11,0xbd8b9));function _0x3b11(){const _0x2ac173=['logger','691398MgAIZs','1305708VjzTOz','log/app.log','debug','42dewDrh','630685FaLwWY','info','message','361683QwcHKo','8133ymOBfU','File','YYYY-MM-DD\x20HH:mm:ss','level','clear','66355paGKQY','10KbUwwf',']:\x20','5lkvfkQ','76algAul','104IeYmPY','warn','1535911bcantL','Log\x20file\x20cleared','12JVQSsb','error','truncate'];_0x3b11=function(){return _0x2ac173;};return _0x3b11();}import{createLogger,format,transports}from'winston';import _0x4b89d6 from'fs';const {combine,timestamp,printf,colorize}=format,customFormat=printf(({level:_0xad6f2e,message:_0x48eaab,timestamp:_0x2e514a})=>{const _0x2e725f=_0x21fb;return _0x2e514a+'\x20['+_0xad6f2e+_0x2e725f(0xf8)+_0x48eaab;});function _0x21fb(_0x2aa032,_0x15ed39){const _0x3b11e6=_0x3b11();return _0x21fb=function(_0x21fbfa,_0x33d11d){_0x21fbfa=_0x21fbfa-0xe0;let _0x27a5c0=_0x3b11e6[_0x21fbfa];return _0x27a5c0;},_0x21fb(_0x2aa032,_0x15ed39);}class Logger{constructor(){const _0x1da9e6=_0x21fb;this['logger']=createLogger({'level':_0x1da9e6(0xeb),'format':combine(timestamp({'format':_0x1da9e6(0xf3)}),colorize(),customFormat),'transports':[new transports[(_0x1da9e6(0xf2))]({'filename':_0x1da9e6(0xea)})],'exceptionHandlers':[new transports[(_0x1da9e6(0xf2))]({'filename':'log/app.log'})],'rejectionHandlers':[new transports[(_0x1da9e6(0xf2))]({'filename':_0x1da9e6(0xea)})]});}['info'](_0x2a93ac){const _0x277d88=_0x21fb;this[_0x277d88(0xe7)][_0x277d88(0xee)](_0x2a93ac);}['warn'](_0xa7a57c){const _0x265de2=_0x21fb;this['logger'][_0x265de2(0xe1)](_0xa7a57c);}['error'](_0x287e95){const _0x5879bb=_0x21fb;this[_0x5879bb(0xe7)][_0x5879bb(0xe5)](_0x287e95);}['debug'](_0x13fd95){const _0x4e405e=_0x21fb;this[_0x4e405e(0xe7)][_0x4e405e(0xeb)](_0x13fd95);}['setLevel'](_0xa7570c){const _0x4b1c1=_0x21fb;this[_0x4b1c1(0xe7)][_0x4b1c1(0xf4)]=_0xa7570c;}[_0x13517a(0xf5)](){const _0x28f82d=_0x13517a;_0x4b89d6[_0x28f82d(0xe6)](_0x28f82d(0xea),0x0,_0x4e12a1=>{const _0x1c1fb1=_0x28f82d;_0x4e12a1?this[_0x1c1fb1(0xe7)][_0x1c1fb1(0xe5)]('Failed\x20to\x20clear\x20the\x20log\x20file:\x20'+_0x4e12a1[_0x1c1fb1(0xef)]):this['logger'][_0x1c1fb1(0xee)](_0x1c1fb1(0xe3));});}}const logger=new Logger();export default logger;
