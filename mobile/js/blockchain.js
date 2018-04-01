let _from='test7', to='test1', agent='test3', masterWho = 'test3'
    const wif = '5JwrjAzTveuuG3Kkpwf9iGNe94voVgMT6SdkVHjpN4nvThLCVLY', username = 'test7'
    const constPermlik = '02-04-2018-2';
    let prev =0;
    golos.config.set('websocket', 'wss://ws.testnet.golos.io');
    golos.config.set('chain_id', '5876894a41e6361bde2e73278f07340f2eb8b41c2facd29099de9deef6cdb679');

    function history(){
        golos.api.getContentReplies(username, constPermlik, function(err, result) {
            /*document.getElementById('table-hash').innerHTML='';
            result.forEach(value => {addressTag = value.permlink; let ss = document.getElementById('table-hash').innerHTML= document.getElementById('table-hash').innerHTML + '<br><div class="border border-secondary text-center">Address id:<h3>'+addressTag+'</h3></div>'});*/
            //console.log(err, result);/ 
            console.log(err, result.length, prev);
            
            prev>0 && prev != result.length ? alert('new transaction') : '';
            prev = result.length;
        });
    }

    setInterval(()=>{
        history();
    },5000);