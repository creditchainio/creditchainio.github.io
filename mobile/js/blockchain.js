    let _from='test7', to='test1', agent='test3', masterWho = 'test3'
    const wif = '5JwrjAzTveuuG3Kkpwf9iGNe94voVgMT6SdkVHjpN4nvThLCVLY', username = 'test7'
    const constPermlik = '02-04-2018-1';

    golos.config.set('websocket', 'wss://ws.testnet.golos.io');
    golos.config.set('chain_id', '5876894a41e6361bde2e73278f07340f2eb8b41c2facd29099de9deef6cdb679');

    function history(){
        golos.api.getAccountHistory(username, 100, 100, function(err, result) {
            document.getElementById('table-hash').innerHTML='';
            result.forEach(value => {let ss = document.getElementById('table-hash').innerHTML= document.getElementById('table-hash').innerHTML + '<br><div class="border border-secondary text-center">ADDRESS: '+'<h3>'+value[1].trx_id+'</h3></div>'});
            //console.log(err, result);
        });
    }
    document.getElementById('blockchain').addEventListener('click',()=>{
        history();
    })