const _0x574c42=_0x442f;(function(_0x5ad3ad,_0x4c7bc2){const _0x48b25e=_0x442f,_0x42c280=_0x5ad3ad();while(!![]){try{const _0x53918b=-parseInt(_0x48b25e(0x194))/0x1+parseInt(_0x48b25e(0x16a))/0x2*(parseInt(_0x48b25e(0x1d6))/0x3)+parseInt(_0x48b25e(0x1b0))/0x4+parseInt(_0x48b25e(0x1e2))/0x5*(-parseInt(_0x48b25e(0x16d))/0x6)+parseInt(_0x48b25e(0x1fb))/0x7+parseInt(_0x48b25e(0x1a5))/0x8*(parseInt(_0x48b25e(0x172))/0x9)+parseInt(_0x48b25e(0x1fa))/0xa;if(_0x53918b===_0x4c7bc2)break;else _0x42c280['push'](_0x42c280['shift']());}catch(_0x262ad5){_0x42c280['push'](_0x42c280['shift']());}}}(_0x308b,0x3ef81));import{getFullnodeUrl,MgoClient,MgoHTTPTransport}from'@mgonetwork/mango.js/client';import{DEFAULT_ED25519_DERIVATION_PATH,Ed25519Keypair}from'@mgonetwork/mango.js/keypairs/ed25519';import{Helper}from'../utils/helper.js';import{bcs,MIST_PER_MGO,TransactionBlock}from'@mgonetwork/mango.js';import{API}from'./api.js';import{SIGNPACKAGE}from'../packages/sign-package.js';import{AMMPACKAGE}from'../packages/amm-package.js';import{COINS}from'../coin/coins.js';import{BEINGDEXPACKAGE}from'../packages/beingdex.js';import{accountList}from'../../accounts/accounts.js';import{proxyList}from'../../config/proxy_list.js';import{MANGOBRIDGEPACKAGE}from'../packages/mangobridge.js';import{BRIDGE}from'../chain/dest_chain.js';import{ethers}from'ethers';import{USDTMANGO}from'../abi/usdt_token_abi.js';function _0x308b(){const _0xf03d47=['digest','wait','GLOBALPAUSESTATUSID','https://task-api.testnet.mangonetwork.io/base/taskDetail','ethProvider','Successfully\x20Exchanging\x20','data','indexOf','results','BNB\x20Testnet','totalBalance','USDT','Try\x20Completing\x20Step\x20','282823XindNS','Failed\x20to\x20Daily\x20Sign\x20In,\x20Possible\x20already\x20Sign\x20In','now','\x20Accounts\x20But\x20Provide\x20','swap_exact_coinA_for_coinB','getPublicKey','status','ABI','https://task-api.testnet.mangonetwork.io/mgoUser/getMgoUser','MANGOETH','MODULE','devInspectTransactionBlock','Try\x20to\x20Swapping\x20','Successfully\x20Swapping\x20','Merging\x20','swap','\x20to\x20?\x20','152KgcSFT','https://bsc-testnet-rpc.publicnode.com','You\x20Have\x20','testnet','https://ethereum-sepolia-rpc.publicnode.com','getBalance','getExchangeTask','stringify','info','signAndExecuteTransactionBlock','approve','997572wrIVMj','toMgoAddress','balanceOf','sort','getSwapTask','encode','JsonRpcProvider','getAccountInfo','ADDRESS','allowance','executeEvmTx','Delaying\x20for\x20','::bridge::bridge_token','evmAddress','getCoins','Not\x20Enought\x20USDT\x20Balance,\x20Skipping','toFixed','balance','checkIn','Successfully\x20Bridge\x20USDT\x20Token\x20From\x20ETH\x20Sepolia\x20to\x20','reverse','SIGN','AMMCONFIG','POST','/tx/','bridge','Wallet','Please\x20Provide\x20ETHTOMANGOBRIDGERAWDATA\x20&\x20BSCTOMANGOBRIDGERAWDATA\x20on\x20config.js','\x20to\x20Mango\x20Network\x20','mergeCoin','MGO','504','msToTime','getPool','\x20BSCTOMANGOBRIDGERAWDATA','You\x20have\x20','serializeBigInt','\x20to\x20','48nJVvCb','Connect\x20to\x20Mango\x20test\x20network\x20and\x20sign\x20to\x20receive\x20Gas','Exchanging\x20','Successfully\x20Daily\x20Sign\x20In','::clob::','find','Getting\x20Discord\x20Task\x20Details..','https://mgoscan.com/txblock/','address','swapCalculate','Contract','Try\x20to\x20Bridge\x20','5uibBCj','fetch','CLOB','signature','Getting\x20Account\x20Balance...','label','fromPhrase','TYPE','evmBalance','GET','readTx','SYMBOL','Getting\x20User\x20Information..','getDiscordTask','::amm_script::','BRIDGE','sendTransaction','BRIDGEXECUTOR','Getting\x20Wallet\x20Information...','determineType','discordTask','formatEther','gas','floor','3994500BqzhYH','754152TlFlbf','splitCoins','MaxUint256','signPersonalMessage','bscProvider','acc','AIUSDTPOOL','\x20until\x20swap\x20balance\x20update','object','hash','addStep','Getting\x20Swap\x20Task\x20Details..','pure','Tx\x20Executed\x20Waiting\x20For\x20Block\x20Confirmation...','message','map','ETHTOMANGOBRIDGERAWDATA','swap_exact_coinB_for_coinA','CLOCK','client','ETH\x20Sepolia','BNB','wallet','code','AMMFACTORY','moveCall','Executing\x20Tx\x20...','Successfully\x20Get\x20Account\x20Information','::amm_router::compute_out','Tx\x20Executed\x20and\x20Confirmed\x20\x0a','toString','Requesting\x20MGO\x20Faucet','getMangoUser','mergeCoins','bscWallet','bridgeTask','returnValues','11434TwrLdC','https://sepolia.etherscan.io','msg','2560218lhQnmF','https://task-api.testnet.mangonetwork.io/base/getFaucet','Download\x20and\x20use\x20the\x20Beingdex\x20mobile\x20app','AMMSWAP','user','56556AKZnOH','bscBalance','length','BSCTOMANGOBRIDGERAWDATA','Connecting\x20to\x20mango\x20DAPPS...','sell','Token\x20Approved','slice','executeTx','Successfully\x20Bridge\x20Token\x20From\x20','Getting\x20Mango\x20Bridge\x20Task\x20Details..','\x20ETHTOMANGOBRIDGERAWDATA\x20&\x20','Sorry\x20this\x20bot\x20is\x20now\x20only\x20support\x20Seed\x20Pharse,\x20Please\x20use\x20Seed\x20Pharse\x20instead\x20of\x20Private\x20Key','token','Trying\x20to\x20Daily\x20Sign\x20In','delay','ETHMANGO','getAllBalances','coinObjectId','TX\x20DATA\x20','Tx\x20Executed\x20:\x20'];_0x308b=function(){return _0xf03d47;};return _0x308b();}import{ERC1967PROXY}from'../abi/erc1967_proxy.js';import{Config}from'../../config/config.js';import _0x28f984 from'../utils/logger.js';import{USDBSCMANGO}from'../abi/usdt_token_abi_bsc.js';import{ERC1967BSCPROXY}from'../abi/erc1967_proxy_bsc.js';function _0x442f(_0x1e3222,_0x58035d){const _0x308bb6=_0x308b();return _0x442f=function(_0x442fca,_0x956923){_0x442fca=_0x442fca-0x152;let _0x36b66e=_0x308bb6[_0x442fca];return _0x36b66e;},_0x442f(_0x1e3222,_0x58035d);}export class CoreService extends API{constructor(_0xc7561c){const _0x5e41fd=_0x442f;let _0x1d4eee;const _0x2e9c63=Helper[_0x5e41fd(0x1f5)](_0xc7561c);if(!_0x2e9c63)throw Error(_0x5e41fd(0x17e));if(Config[_0x5e41fd(0x155)]['length']==0x0||Config[_0x5e41fd(0x175)]['length']==0x0)throw Error(_0x5e41fd(0x1cb));if(Config['ETHTOMANGOBRIDGERAWDATA'][_0x5e41fd(0x174)]!=accountList[_0x5e41fd(0x174)]||Config[_0x5e41fd(0x175)][_0x5e41fd(0x174)]!=accountList[_0x5e41fd(0x174)])throw Error(_0x5e41fd(0x1d3)+accountList['length']+'\x20Accounts,\x20but\x20provide\x20'+Config[_0x5e41fd(0x155)]['length']+_0x5e41fd(0x17d)+Config[_0x5e41fd(0x175)][_0x5e41fd(0x174)]+_0x5e41fd(0x1d2));const _0x3973c7=accountList[_0x5e41fd(0x18e)](_0xc7561c);if(proxyList[_0x5e41fd(0x174)]!=accountList[_0x5e41fd(0x174)]&&proxyList[_0x5e41fd(0x174)]!=0x0)throw Error(_0x5e41fd(0x1a7)+accountList[_0x5e41fd(0x174)]+_0x5e41fd(0x197)+proxyList[_0x5e41fd(0x174)]);_0x1d4eee=proxyList[_0x3973c7],super(_0x1d4eee),this[_0x5e41fd(0x200)]=_0xc7561c,this[_0x5e41fd(0x158)]=new MgoClient({'transport':new MgoHTTPTransport({'url':getFullnodeUrl(_0x5e41fd(0x1a8))})}),this[_0x5e41fd(0x18b)]=new ethers['JsonRpcProvider'](_0x5e41fd(0x1a9),0xaa36a7),this[_0x5e41fd(0x1ff)]=new ethers[(_0x5e41fd(0x1b6))](_0x5e41fd(0x1a6),0x61);}async[_0x574c42(0x1b7)](){const _0x5ef45d=_0x574c42;try{await Helper['delay'](0x1f4,this[_0x5ef45d(0x200)],_0x5ef45d(0x1f4),this),this[_0x5ef45d(0x15b)]=Ed25519Keypair['deriveKeypair'](this[_0x5ef45d(0x200)],DEFAULT_ED25519_DERIVATION_PATH),this['evmWallet']=ethers[_0x5ef45d(0x1ca)][_0x5ef45d(0x1e8)](this[_0x5ef45d(0x200)],this[_0x5ef45d(0x18b)]),this['bscWallet']=ethers[_0x5ef45d(0x1ca)]['fromPhrase'](this[_0x5ef45d(0x200)],this[_0x5ef45d(0x1ff)]),this[_0x5ef45d(0x1bd)]=this['evmWallet'][_0x5ef45d(0x1de)],this['address']=this[_0x5ef45d(0x15b)][_0x5ef45d(0x199)]()[_0x5ef45d(0x1b1)](),await Helper[_0x5ef45d(0x181)](0x3e8,this[_0x5ef45d(0x200)],_0x5ef45d(0x160),this);}catch(_0x31dade){throw _0x31dade;}}async['connectMango'](){const _0x37338f=_0x574c42;try{await Helper[_0x37338f(0x181)](0x1f4,this[_0x37338f(0x200)],_0x37338f(0x176),this);const _0x3696f7=Math[_0x37338f(0x1f9)](Date[_0x37338f(0x196)]()/0x3e8),_0x4aba0b={'address':this[_0x37338f(0x1de)],'signTime':_0x3696f7,'signType':'Login'},_0x201210=JSON['stringify'](_0x4aba0b),_0x41fb77=new TextEncoder()[_0x37338f(0x1b5)](_0x201210),_0x278e6b=await this[_0x37338f(0x15b)][_0x37338f(0x1fe)](_0x41fb77),_0x5e2146=await this[_0x37338f(0x1e3)]('https://task-api.testnet.mangonetwork.io/mgoUser/loginMgoUserPublic','POST',{'signData':_0x278e6b[_0x37338f(0x1e5)],'address':this[_0x37338f(0x1de)],'signTime':_0x3696f7});if(_0x5e2146[_0x37338f(0x18d)][_0x37338f(0x15c)]==0x0)this['token']=_0x5e2146[_0x37338f(0x18d)][_0x37338f(0x18d)][_0x37338f(0x17f)],await Helper[_0x37338f(0x181)](0x1f4,this[_0x37338f(0x200)],_0x5e2146[_0x37338f(0x18d)]['msg'],this);else throw new Error(_0x5e2146[_0x37338f(0x18d)]['msg']);}catch(_0x163cbf){throw _0x163cbf;}}async[_0x574c42(0x165)](_0xfd0273=![]){const _0x3468e6=_0x574c42;try{_0xfd0273&&await Helper[_0x3468e6(0x181)](0x1f4,this[_0x3468e6(0x200)],_0x3468e6(0x1ee),this);const _0x485c29=await this[_0x3468e6(0x1e3)](_0x3468e6(0x19c),_0x3468e6(0x1eb),undefined,this['token']);if(_0x485c29[_0x3468e6(0x18d)][_0x3468e6(0x15c)]==0x0)this[_0x3468e6(0x171)]=_0x485c29[_0x3468e6(0x18d)][_0x3468e6(0x18d)],_0xfd0273&&await Helper[_0x3468e6(0x181)](0x1f4,this[_0x3468e6(0x200)],_0x485c29[_0x3468e6(0x18d)][_0x3468e6(0x16c)],this);else throw new Error(_0x485c29[_0x3468e6(0x18d)][_0x3468e6(0x16c)]);}catch(_0x1492fd){throw _0x1492fd;}}async[_0x574c42(0x1b4)](){const _0xd1d8e7=_0x574c42;try{await Helper['delay'](0x7d0,this[_0xd1d8e7(0x200)],_0xd1d8e7(0x206),this);const _0x2f87a1=await this['fetch'](_0xd1d8e7(0x18a),_0xd1d8e7(0x1c7),{'taskId':0x2,'type':0x0},this[_0xd1d8e7(0x17f)]);if(_0x2f87a1[_0xd1d8e7(0x18d)][_0xd1d8e7(0x15c)]==0x0)this['swapTask']=_0x2f87a1[_0xd1d8e7(0x18d)][_0xd1d8e7(0x18d)],await Helper[_0xd1d8e7(0x181)](0x1f4,this['acc'],_0x2f87a1['data']['msg'],this);else throw new Error(_0x2f87a1[_0xd1d8e7(0x18d)]['msg']);}catch(_0x402922){throw _0x402922;}}async[_0x574c42(0x1ab)](){const _0xbe2045=_0x574c42;try{await Helper[_0xbe2045(0x181)](0x7d0,this[_0xbe2045(0x200)],'Getting\x20BeingDex\x20Task\x20Details..',this);const _0x49085e=await this['fetch'](_0xbe2045(0x18a),_0xbe2045(0x1c7),{'taskId':0x5,'type':0x0},this[_0xbe2045(0x17f)]);if(_0x49085e[_0xbe2045(0x18d)][_0xbe2045(0x15c)]==0x0)this['exchangeTask']=_0x49085e[_0xbe2045(0x18d)]['data'],await Helper['delay'](0x1f4,this['acc'],_0x49085e['data'][_0xbe2045(0x16c)],this);else throw new Error(_0x49085e[_0xbe2045(0x18d)][_0xbe2045(0x16c)]);}catch(_0x449ef2){throw _0x449ef2;}}async[_0x574c42(0x1ef)](){const _0x1c5c84=_0x574c42;try{await Helper['delay'](0x7d0,this[_0x1c5c84(0x200)],_0x1c5c84(0x1dc),this);const _0x7b7c3d=await this[_0x1c5c84(0x1e3)](_0x1c5c84(0x18a),_0x1c5c84(0x1c7),{'taskId':0x3,'type':0x0},this['token']);if(_0x7b7c3d['data'][_0x1c5c84(0x15c)]==0x0)this[_0x1c5c84(0x1f6)]=_0x7b7c3d[_0x1c5c84(0x18d)]['data'],await Helper['delay'](0x1f4,this['acc'],_0x7b7c3d[_0x1c5c84(0x18d)][_0x1c5c84(0x16c)],this);else throw new Error(_0x7b7c3d[_0x1c5c84(0x18d)][_0x1c5c84(0x16c)]);}catch(_0xb90368){throw _0xb90368;}}async['getBridgeTask'](){const _0xf9f291=_0x574c42;try{await Helper['delay'](0x7d0,this[_0xf9f291(0x200)],_0xf9f291(0x17c),this);const _0x745a5c=await this[_0xf9f291(0x1e3)](_0xf9f291(0x18a),_0xf9f291(0x1c7),{'taskId':0x4,'type':0x0},this[_0xf9f291(0x17f)]);if(_0x745a5c[_0xf9f291(0x18d)]['code']==0x0)this[_0xf9f291(0x168)]=_0x745a5c[_0xf9f291(0x18d)]['data'],await Helper[_0xf9f291(0x181)](0x1f4,this[_0xf9f291(0x200)],_0x745a5c[_0xf9f291(0x18d)][_0xf9f291(0x16c)],this);else throw new Error(_0x745a5c[_0xf9f291(0x18d)][_0xf9f291(0x16c)]);}catch(_0x5be6f2){throw _0x5be6f2;}}async[_0x574c42(0x205)](_0x236a45,_0x5e469e,_0xe23cd7=!![]){const _0x36150b=_0x574c42;try{_0xe23cd7&&await Helper['delay'](0x7d0,this[_0x36150b(0x200)],_0x36150b(0x193)+_0x5e469e[_0x36150b(0x1e7)]+'...',this),await this[_0x36150b(0x1e3)]('https://task-api.testnet.mangonetwork.io/base/addStep','POST',{'taskId':_0x236a45,'stepId':_0x5e469e[_0x36150b(0x1b3)]},this['token']);}catch(_0x1f336b){throw _0x1f336b;}}async['getBalance'](_0x3859e8=![]){const _0x2444d4=_0x574c42;try{_0x3859e8&&await Helper[_0x2444d4(0x181)](0x1f4,this[_0x2444d4(0x200)],_0x2444d4(0x1e6),this);this['balance']=await this[_0x2444d4(0x158)][_0x2444d4(0x183)]({'owner':this[_0x2444d4(0x1de)]}),this[_0x2444d4(0x1c1)]=this[_0x2444d4(0x1c1)][_0x2444d4(0x154)](_0x362552=>{const _0x5ac3b5=_0x2444d4;return _0x362552['totalBalance']=parseFloat((Number(_0x362552[_0x5ac3b5(0x191)])/Number(MIST_PER_MGO))['toFixed'](0x5)),_0x362552;});const _0x286757=ethers[_0x2444d4(0x1f7)](await this[_0x2444d4(0x18b)][_0x2444d4(0x1aa)](this[_0x2444d4(0x1bd)])),_0x3d0f2c=ethers[_0x2444d4(0x1f7)](await this[_0x2444d4(0x1ff)]['getBalance'](this['evmAddress'])),_0x2f75f2=new ethers[(_0x2444d4(0x1e0))](USDTMANGO['CA'],USDTMANGO['ABI'],this[_0x2444d4(0x18b)]),_0x38ce90=ethers[_0x2444d4(0x1f7)](await _0x2f75f2['balanceOf'](this['evmAddress'])),_0x2d2db3=new ethers['Contract'](USDBSCMANGO['CA'],USDBSCMANGO[_0x2444d4(0x19b)],this['bscProvider']),_0x3c6388=ethers[_0x2444d4(0x1f7)](await _0x2d2db3[_0x2444d4(0x1b2)](this[_0x2444d4(0x1bd)]));this[_0x2444d4(0x1ea)]=[{'SYMBOL':'ETH','BALANCE':_0x286757},{'SYMBOL':_0x2444d4(0x192),'BALANCE':_0x38ce90}],this[_0x2444d4(0x173)]=[{'SYMBOL':_0x2444d4(0x15a),'BALANCE':_0x3d0f2c},{'SYMBOL':'USDT','BALANCE':_0x3c6388}],_0x3859e8&&await Helper[_0x2444d4(0x181)](0x3e8,this[_0x2444d4(0x200)],'Successfully\x20Get\x20Account\x20Balance',this);}catch(_0xeee26){throw _0xeee26;}}async['getFaucet'](){const _0x41e052=_0x574c42;try{await Helper[_0x41e052(0x181)](0x3e8,this[_0x41e052(0x200)],_0x41e052(0x164),this);const _0xddf987=await this['fetch'](_0x41e052(0x16e),_0x41e052(0x1c7),{'chain':'0','type':![]},this['token']);if(_0xddf987[_0x41e052(0x19a)]==0xc8)await Helper[_0x41e052(0x181)](0x3e8,this['acc'],_0xddf987['data'][_0x41e052(0x16c)],this),await this['getBalance']();else throw _0xddf987;await this[_0x41e052(0x205)](0x1,{'label':_0x41e052(0x1d7),'value':'Gas','extend':_0x41e052(0x16f),'sort':0x0},![]);}catch(_0x522e7d){_0x522e7d['msg']?await Helper['delay'](0xbb8,this[_0x41e052(0x200)],_0x522e7d[_0x41e052(0x18d)][_0x41e052(0x16c)],this):await Helper['delay'](0xbb8,this[_0x41e052(0x200)],_0x522e7d['data'][_0x41e052(0x16c)],this);}}async[_0x574c42(0x1c2)](){const _0x23626c=_0x574c42;try{await Helper[_0x23626c(0x181)](0x3e8,this[_0x23626c(0x200)],_0x23626c(0x180),this);const _0x52a507=new TransactionBlock();_0x52a507[_0x23626c(0x15e)]({'target':SIGNPACKAGE['ADDRESS']+'::sign::sign_in','arguments':[_0x52a507[_0x23626c(0x203)](SIGNPACKAGE[_0x23626c(0x19e)][_0x23626c(0x1c5)]['SIGNPOOL']),_0x52a507[_0x23626c(0x203)](SIGNPACKAGE[_0x23626c(0x19e)]['SIGN'][_0x23626c(0x157)])]}),await this[_0x23626c(0x17a)](_0x52a507),await Helper['delay'](0x3e8,this[_0x23626c(0x200)],_0x23626c(0x1d9),this);}catch(_0x18f2d9){await Helper[_0x23626c(0x181)](0x3e8,this[_0x23626c(0x200)],_0x23626c(0x195),this);}}async[_0x574c42(0x1a3)](_0x532d77,_0x29320a){const _0x1f18be=_0x574c42;try{const _0x5a4858=new TransactionBlock();let _0x530974=await this[_0x1f18be(0x158)][_0x1f18be(0x1be)]({'owner':this['address'],'coinType':_0x532d77[_0x1f18be(0x1e9)]});if(_0x530974[_0x1f18be(0x18d)]['length']==0x0)while(_0x530974['data'][_0x1f18be(0x174)]==0x0){_0x530974=await this[_0x1f18be(0x158)][_0x1f18be(0x1be)]({'owner':this['address'],'coinType':_0x532d77[_0x1f18be(0x1e9)]}),await this['getBalance'](),await Helper['delay'](0x2710,this[_0x1f18be(0x200)],_0x1f18be(0x1bb)+Helper['msToTime'](0x2710)+_0x1f18be(0x202),this);}_0x530974[_0x1f18be(0x18d)][_0x1f18be(0x174)]>0x1&&(await this[_0x1f18be(0x1cd)](_0x532d77),_0x530974=await this['client'][_0x1f18be(0x1be)]({'owner':this['address'],'coinType':_0x532d77[_0x1f18be(0x1e9)]}));let _0x4e8ccc=Number(0.1)*Number(MIST_PER_MGO),_0x40d275;_0x532d77==COINS[_0x1f18be(0x1ce)]?_0x40d275=_0x5a4858['splitCoins'](_0x5a4858[_0x1f18be(0x1f8)],[_0x5a4858[_0x1f18be(0x207)](_0x4e8ccc)]):(_0x4e8ccc=Number(_0x530974[_0x1f18be(0x18d)][0x0][_0x1f18be(0x1c1)]),_0x40d275=_0x5a4858[_0x1f18be(0x1fc)](_0x5a4858[_0x1f18be(0x203)](_0x530974[_0x1f18be(0x18d)][0x0][_0x1f18be(0x184)]),[_0x5a4858['pure'](_0x4e8ccc)]));await Helper[_0x1f18be(0x181)](0x3e8,this[_0x1f18be(0x200)],_0x1f18be(0x1a0)+(_0x532d77==COINS['MGO']?parseFloat((Number(_0x4e8ccc)/Number(MIST_PER_MGO))[_0x1f18be(0x163)]())[_0x1f18be(0x1c0)](0x2):parseFloat((Number(_0x530974[_0x1f18be(0x18d)][0x0][_0x1f18be(0x1c1)])/Number(MIST_PER_MGO))[_0x1f18be(0x163)]())[_0x1f18be(0x1c0)](0x5))+'\x20'+_0x532d77['SYMBOL']+_0x1f18be(0x1a4)+_0x29320a['SYMBOL'],this);const _0x392446=[_0x532d77,_0x29320a][_0x1f18be(0x1db)](_0x13a81c=>_0x13a81c==COINS[_0x1f18be(0x1ce)]),_0x2a8d9c=_0x532d77==COINS[_0x1f18be(0x1ce)]||!_0x392446&&_0x532d77==COINS[_0x1f18be(0x192)]?[_0x532d77[_0x1f18be(0x1e9)],_0x29320a['TYPE']]:[_0x532d77[_0x1f18be(0x1e9)],_0x29320a['TYPE']][_0x1f18be(0x1c4)](),_0x121798=await this[_0x1f18be(0x1d1)](_0x2a8d9c);let _0x38b906=await this['swapCalculate'](_0x2a8d9c,_0x121798,!!(_0x532d77==COINS[_0x1f18be(0x1ce)]||!_0x392446&&_0x532d77==COINS[_0x1f18be(0x192)]),_0x4e8ccc);_0x38b906=Math[_0x1f18be(0x1f9)](_0x38b906-_0x38b906*0xa/0x64),await Helper[_0x1f18be(0x181)](0x3e8,this['acc'],'Try\x20to\x20Swapping\x20'+parseFloat((Number(_0x4e8ccc)/Number(MIST_PER_MGO))['toString']())['toFixed'](0x2)+'\x20'+_0x532d77[_0x1f18be(0x1ed)]+_0x1f18be(0x1d5)+parseFloat((Number(_0x38b906)/Number(MIST_PER_MGO))[_0x1f18be(0x163)]())[_0x1f18be(0x1c0)](0x2)+'\x20'+_0x29320a[_0x1f18be(0x1ed)],this),_0x5a4858[_0x1f18be(0x15e)]({'target':AMMPACKAGE['ADDRESS']+_0x1f18be(0x1f0)+(_0x532d77==COINS[_0x1f18be(0x1ce)]||!_0x392446&&_0x532d77==COINS[_0x1f18be(0x192)]?_0x1f18be(0x198):_0x1f18be(0x156)),'typeArguments':_0x2a8d9c,'arguments':[_0x5a4858['object'](_0x121798),_0x5a4858[_0x1f18be(0x203)](AMMPACKAGE['MODULE'][_0x1f18be(0x1c6)][_0x1f18be(0x189)]),_0x40d275,_0x5a4858[_0x1f18be(0x207)](_0x4e8ccc),_0x5a4858['pure'](_0x38b906)]}),await this[_0x1f18be(0x17a)](_0x5a4858),await Helper[_0x1f18be(0x181)](0x3e8,this['acc'],_0x1f18be(0x1a1)+parseFloat((Number(_0x4e8ccc)/Number(MIST_PER_MGO))[_0x1f18be(0x163)]())[_0x1f18be(0x1c0)](0x2)+'\x20'+_0x532d77[_0x1f18be(0x1ed)]+_0x1f18be(0x1d5)+parseFloat((Number(_0x38b906)/Number(MIST_PER_MGO))[_0x1f18be(0x163)]())[_0x1f18be(0x1c0)](0x2)+'\x20'+_0x29320a[_0x1f18be(0x1ed)],this);}catch(_0x4341d6){throw _0x4341d6;}}async['exchange'](_0x96e192,_0x33d3d1){const _0x2dea3e=_0x574c42;try{await Helper['delay'](0x3e8,this[_0x2dea3e(0x200)],_0x2dea3e(0x1d8)+_0x96e192[_0x2dea3e(0x1ed)]+_0x2dea3e(0x1d5)+_0x33d3d1['SYMBOL'],this);const _0x2966ab=_0x96e192==COINS[_0x2dea3e(0x192)]?[_0x96e192[_0x2dea3e(0x1e9)],_0x33d3d1[_0x2dea3e(0x1e9)]][_0x2dea3e(0x1c4)]():[_0x96e192[_0x2dea3e(0x1e9)],_0x33d3d1[_0x2dea3e(0x1e9)]],_0x7089c=new TransactionBlock();let _0x6167d3=await this[_0x2dea3e(0x158)][_0x2dea3e(0x1be)]({'owner':this[_0x2dea3e(0x1de)],'coinType':_0x96e192[_0x2dea3e(0x1e9)]});if(_0x6167d3['data'][_0x2dea3e(0x174)]==0x0)while(_0x6167d3[_0x2dea3e(0x18d)][_0x2dea3e(0x174)]==0x0){_0x6167d3=await this[_0x2dea3e(0x158)][_0x2dea3e(0x1be)]({'owner':this['address'],'coinType':_0x96e192['TYPE']}),await this[_0x2dea3e(0x1aa)](),await Helper[_0x2dea3e(0x181)](0x2710,this[_0x2dea3e(0x200)],_0x2dea3e(0x1bb)+Helper[_0x2dea3e(0x1d0)](0x2710)+_0x2dea3e(0x202),this);}_0x6167d3[_0x2dea3e(0x18d)][_0x2dea3e(0x174)]>0x1&&(await this[_0x2dea3e(0x1cd)](_0x96e192),_0x6167d3=await this[_0x2dea3e(0x158)][_0x2dea3e(0x1be)]({'owner':this[_0x2dea3e(0x1de)],'coinType':_0x96e192[_0x2dea3e(0x1e9)]}));const _0x1a637a=Number(_0x6167d3[_0x2dea3e(0x18d)][0x0][_0x2dea3e(0x1c1)]);_0x7089c[_0x2dea3e(0x15e)]({'target':BEINGDEXPACKAGE['ADDRESS']+_0x2dea3e(0x1da)+(_0x96e192==COINS['USDT']?'market_buy':_0x2dea3e(0x177)),'typeArguments':_0x2966ab,'arguments':_0x96e192==COINS[_0x2dea3e(0x192)]?[_0x7089c[_0x2dea3e(0x203)](BEINGDEXPACKAGE[_0x2dea3e(0x19e)][_0x2dea3e(0x1e4)][_0x2dea3e(0x201)]),_0x7089c[_0x2dea3e(0x203)](_0x6167d3[_0x2dea3e(0x18d)][0x0]['coinObjectId']),_0x7089c[_0x2dea3e(0x207)](_0x1a637a)]:[_0x7089c[_0x2dea3e(0x203)](BEINGDEXPACKAGE[_0x2dea3e(0x19e)][_0x2dea3e(0x1e4)]['AIUSDTPOOL']),_0x7089c[_0x2dea3e(0x203)](_0x6167d3[_0x2dea3e(0x18d)][0x0][_0x2dea3e(0x184)]),_0x7089c[_0x2dea3e(0x207)](0x1),_0x7089c[_0x2dea3e(0x207)](_0x1a637a)]}),await this[_0x2dea3e(0x17a)](_0x7089c),await Helper[_0x2dea3e(0x181)](0x3e8,this[_0x2dea3e(0x200)],_0x2dea3e(0x18c)+parseFloat((Number(_0x1a637a)/Number(MIST_PER_MGO))[_0x2dea3e(0x163)]())[_0x2dea3e(0x1c0)](0x2)+'\x20'+_0x96e192['SYMBOL']+_0x2dea3e(0x1d5)+_0x33d3d1[_0x2dea3e(0x1ed)],this);}catch(_0x291cfe){throw _0x291cfe;}}async['mergeCoin'](_0x875245){const _0x1150bb=_0x574c42;try{const _0x4cfb92=await this[_0x1150bb(0x158)]['getCoins']({'owner':this[_0x1150bb(0x1de)],'coinType':_0x875245[_0x1150bb(0x1e9)]});if(_0x875245==COINS[_0x1150bb(0x1ce)]&&_0x4cfb92[_0x1150bb(0x18d)][_0x1150bb(0x174)]<0x3)return;if(_0x4cfb92[_0x1150bb(0x18d)][_0x1150bb(0x174)]<0x2)return;const _0x14a999=new TransactionBlock();let _0x3aa694,_0x371621;_0x875245==COINS[_0x1150bb(0x1ce)]?(_0x3aa694=_0x4cfb92[_0x1150bb(0x18d)][0x1]['coinObjectId'],_0x371621=_0x4cfb92[_0x1150bb(0x18d)]['slice'](0x2)[_0x1150bb(0x154)](_0xa34702=>_0xa34702[_0x1150bb(0x184)])):(_0x3aa694=_0x4cfb92[_0x1150bb(0x18d)][0x0][_0x1150bb(0x184)],_0x371621=_0x4cfb92[_0x1150bb(0x18d)][_0x1150bb(0x179)](0x1)['map'](_0x5afd70=>_0x5afd70['coinObjectId'])),await Helper[_0x1150bb(0x181)](0x3e8,this[_0x1150bb(0x200)],_0x1150bb(0x1a2)+_0x875245[_0x1150bb(0x1ed)],this),await _0x14a999[_0x1150bb(0x166)](_0x14a999[_0x1150bb(0x203)](_0x3aa694),_0x371621[_0x1150bb(0x154)](_0x177ba0=>_0x14a999[_0x1150bb(0x203)](_0x177ba0))),await this['executeTx'](_0x14a999),await this[_0x1150bb(0x1aa)]();}catch(_0x3a4905){throw _0x3a4905;}}async[_0x574c42(0x1c9)](_0x4d2d60){const _0xb07467=_0x574c42;try{if(_0x4d2d60==BRIDGE['MANGOBSC']||_0x4d2d60==BRIDGE[_0xb07467(0x19d)]){const _0x26a8fc=new TransactionBlock();let _0x10a1b5=await this[_0xb07467(0x158)][_0xb07467(0x1be)]({'owner':this['address'],'coinType':COINS[_0xb07467(0x192)][_0xb07467(0x1e9)]});if(_0x10a1b5[_0xb07467(0x18d)]['length']==0x0)while(coinToSwap[_0xb07467(0x18d)][_0xb07467(0x174)]==0x0){_0x10a1b5=await this[_0xb07467(0x158)][_0xb07467(0x1be)]({'owner':this['address'],'coinType':COINS[_0xb07467(0x192)][_0xb07467(0x1e9)]}),await this[_0xb07467(0x1aa)](),await Helper['delay'](0x2710,this[_0xb07467(0x200)],_0xb07467(0x1bb)+Helper[_0xb07467(0x1d0)](0x2710)+_0xb07467(0x202),this);}_0x10a1b5[_0xb07467(0x18d)][_0xb07467(0x174)]>0x1&&(await this[_0xb07467(0x1cd)](COINS[_0xb07467(0x192)]),_0x10a1b5=await this['client']['getCoins']({'owner':this['address'],'coinType':COINS['USDT'][_0xb07467(0x1e9)]}));let _0x13dc0d=Number(0.1)*Number(MIST_PER_MGO);const _0x393ccb=_0x26a8fc['splitCoins'](_0x26a8fc[_0xb07467(0x203)](_0x10a1b5[_0xb07467(0x18d)][0x0]['coinObjectId']),[_0x26a8fc[_0xb07467(0x207)](_0x13dc0d)]);await Helper[_0xb07467(0x181)](0x3e8,this['acc'],_0xb07467(0x1e1)+parseFloat((Number(_0x13dc0d)/Number(MIST_PER_MGO))[_0xb07467(0x163)]())[_0xb07467(0x1c0)](0x2)+'\x20'+COINS[_0xb07467(0x192)][_0xb07467(0x1ed)]+_0xb07467(0x1d5)+_0x4d2d60+'\x20',this),_0x26a8fc[_0xb07467(0x15e)]({'target':MANGOBRIDGEPACKAGE[_0xb07467(0x1b8)]+_0xb07467(0x1bc),'typeArguments':[COINS[_0xb07467(0x192)]['TYPE']],'arguments':[_0x26a8fc[_0xb07467(0x203)](MANGOBRIDGEPACKAGE[_0xb07467(0x19e)][_0xb07467(0x1f1)][_0xb07467(0x1f3)]),_0x393ccb,_0x26a8fc['pure'](this[_0xb07467(0x1bd)]),_0x26a8fc[_0xb07467(0x207)](_0x4d2d60),_0x26a8fc[_0xb07467(0x203)](MANGOBRIDGEPACKAGE[_0xb07467(0x19e)][_0xb07467(0x1f1)]['CLOCK'])]}),await this[_0xb07467(0x17a)](_0x26a8fc),await Helper[_0xb07467(0x181)](0x3e8,this[_0xb07467(0x200)],_0xb07467(0x1c3)+_0x4d2d60,this);}else{await Helper[_0xb07467(0x181)](0x3e8,this['acc'],'Try\x20to\x20Bridge\x20Token\x20From\x20'+(_0x4d2d60==BRIDGE[_0xb07467(0x182)]?_0xb07467(0x159):'BNB\x20Testnet')+'\x20to\x20Mango\x20Network\x20',this);let _0x149dc1,_0x49f463;if(_0x4d2d60==BRIDGE[_0xb07467(0x182)]){_0x149dc1=new ethers[(_0xb07467(0x1e0))](USDTMANGO['CA'],USDTMANGO[_0xb07467(0x19b)],this['evmWallet']),_0x49f463=await _0x149dc1[_0xb07467(0x1b9)](ERC1967PROXY['CA'],USDTMANGO['CA']);const _0x5f2c71=this[_0xb07467(0x1ea)][_0xb07467(0x1db)](_0x5103ea=>_0x5103ea[_0xb07467(0x1ed)]==_0xb07467(0x192));if(_0x5f2c71==0x0){await Helper[_0xb07467(0x181)](0xbb8,this[_0xb07467(0x200)],_0xb07467(0x1bf),this);return;}}else{_0x149dc1=new ethers[(_0xb07467(0x1e0))](USDBSCMANGO['CA'],USDBSCMANGO['ABI'],this[_0xb07467(0x167)]),_0x49f463=await _0x149dc1[_0xb07467(0x1b9)](ERC1967BSCPROXY['CA'],USDBSCMANGO['CA']);const _0x33621c=this[_0xb07467(0x1ea)]['find'](_0xddac8=>_0xddac8[_0xb07467(0x1ed)]=='USDT');if(_0x33621c==0x0){await Helper['delay'](0xbb8,this[_0xb07467(0x200)],'Not\x20Enought\x20USDT\x20Balance,\x20Skipping',this);return;}}if(_0x49f463==0x0){await Helper[_0xb07467(0x181)](0x3e8,this['acc'],'Approving\x20Token\x20Spend',this);const _0x14b302=await _0x149dc1[_0xb07467(0x1af)](_0x4d2d60==BRIDGE['ETHMANGO']?ERC1967PROXY['CA']:ERC1967BSCPROXY['CA'],ethers[_0xb07467(0x1fd)]);await _0x14b302[_0xb07467(0x188)](),await Helper[_0xb07467(0x181)](0x3e8,this[_0xb07467(0x200)],_0xb07467(0x178),this);}const _0x58606c=accountList[_0xb07467(0x18e)](this[_0xb07467(0x200)]),_0x59be7a=_0x4d2d60==BRIDGE[_0xb07467(0x182)]?Config[_0xb07467(0x155)][_0x58606c]:Config[_0xb07467(0x175)][_0x58606c],_0x4faa8b={'to':_0x4d2d60==BRIDGE[_0xb07467(0x182)]?ERC1967PROXY['CA']:ERC1967BSCPROXY['CA'],'from':this['evmAddress'],'data':_0x59be7a};await this[_0xb07467(0x1ba)](_0x4faa8b,_0x4d2d60),await Helper[_0xb07467(0x181)](0x3e8,this[_0xb07467(0x200)],_0xb07467(0x17b)+(_0x4d2d60==BRIDGE[_0xb07467(0x182)]?_0xb07467(0x159):_0xb07467(0x190))+_0xb07467(0x1cc),this);}}catch(_0x27a199){throw _0x27a199;}}async[_0x574c42(0x1df)](_0x21c0fe,_0x52bd40,_0x673cd2,_0x2233d7){const _0x50e448=_0x574c42,_0x4dfe30=new TransactionBlock();_0x4dfe30[_0x50e448(0x15e)]({'target':AMMPACKAGE['ADDRESS']+_0x50e448(0x161),'typeArguments':_0x21c0fe,'arguments':[_0x4dfe30[_0x50e448(0x203)](_0x52bd40),_0x4dfe30['pure'](_0x2233d7),_0x4dfe30[_0x50e448(0x207)](_0x673cd2)]});const _0x451fcd=await this[_0x50e448(0x1ec)](_0x4dfe30);return bcs['de'](_0x451fcd['results'][0x0]['returnValues'][0x0][0x1],Uint8Array['from'](_0x451fcd['results'][0x0]['returnValues'][0x0][0x0]));}async['getPool'](_0x3e7c75){const _0x2a00ce=_0x574c42,_0x4f4949=new TransactionBlock();_0x4f4949['moveCall']({'target':AMMPACKAGE[_0x2a00ce(0x1b8)]+'::amm_swap::get_pool_id','typeArguments':_0x3e7c75,'arguments':[_0x4f4949[_0x2a00ce(0x203)](AMMPACKAGE[_0x2a00ce(0x19e)][_0x2a00ce(0x170)][_0x2a00ce(0x15d)])]});const _0x3f395e=await this[_0x2a00ce(0x1ec)](_0x4f4949);return bcs['de'](_0x3f395e[_0x2a00ce(0x18f)][0x0]['returnValues'][0x0][0x1],Uint8Array['from'](_0x3f395e[_0x2a00ce(0x18f)][0x0][_0x2a00ce(0x169)][0x0][0x0]));}async['executeTx'](_0x193673){const _0x46faee=_0x574c42;try{await Helper[_0x46faee(0x181)](0x3e8,this[_0x46faee(0x200)],_0x46faee(0x15f),this);const _0x2fd627=await this[_0x46faee(0x158)][_0x46faee(0x1ae)]({'signer':this[_0x46faee(0x15b)],'transactionBlock':_0x193673});return await Helper['delay'](0xbb8,this[_0x46faee(0x200)],_0x46faee(0x186)+(_0x46faee(0x1dd)+_0x2fd627[_0x46faee(0x187)]),this),await this[_0x46faee(0x1aa)](),_0x2fd627;}catch(_0x1d7a5b){throw _0x1d7a5b;}}async[_0x574c42(0x1ec)](_0x1d70e2){const _0x295627=_0x574c42;try{const _0x25124c=await this[_0x295627(0x158)][_0x295627(0x19f)]({'sender':this[_0x295627(0x1de)],'transactionBlock':_0x1d70e2});return _0x25124c;}catch(_0x40112c){throw _0x40112c;}}async[_0x574c42(0x1ba)](_0x54843b,_0x4136be){const _0x48a442=_0x574c42;try{_0x28f984['info'](_0x48a442(0x185)+JSON['stringify'](Helper[_0x48a442(0x1d4)](_0x54843b))),await Helper[_0x48a442(0x181)](0x1f4,this[_0x48a442(0x200)],'Executing\x20TX...',this);const _0x6b5b70=_0x4136be==BRIDGE['ETHMANGO']?await this['evmWallet'][_0x48a442(0x1f2)](_0x54843b):await this[_0x48a442(0x167)][_0x48a442(0x1f2)](_0x54843b);await Helper['delay'](0x1f4,this[_0x48a442(0x200)],_0x48a442(0x152),this);const _0x1a52ef=await _0x6b5b70['wait']();_0x28f984[_0x48a442(0x1ad)]('Tx\x20Confirmed\x20and\x20Finalizing:\x20'+JSON[_0x48a442(0x1ac)](_0x1a52ef)),await Helper[_0x48a442(0x181)](0x1388,this['acc'],_0x48a442(0x162)+(_0x4136be==BRIDGE[_0x48a442(0x182)]?_0x48a442(0x16b):'https://testnet.bscscan.com')+_0x48a442(0x1c8)+_0x1a52ef[_0x48a442(0x204)],this),await this[_0x48a442(0x1aa)]();}catch(_0x45f70c){if(_0x45f70c[_0x48a442(0x153)]['includes'](_0x48a442(0x1cf)))await Helper[_0x48a442(0x181)](0x1388,this[_0x48a442(0x200)],_0x45f70c['message'],this);else throw _0x45f70c;}}}
