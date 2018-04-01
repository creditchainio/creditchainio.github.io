    let _from='test7', to='test1', agent='test3', masterWho = 'test3'
    const wif = '5J1kGxcN1fhSSwBBJDFKDD8pExrBT7idSs7fr3Am4AFpah7srzU', username = 'test8'
    const constPermlik = '53zu6x-01-04-2018';
    let addressTag ='';
    golos.config.set('websocket', 'wss://ws.testnet.golos.io');
    golos.config.set('chain_id', '5876894a41e6361bde2e73278f07340f2eb8b41c2facd29099de9deef6cdb679');
    let prev = 0;
    function history(){
        golos.api.getContentReplies(username, constPermlik, function(err, result) {
            document.getElementById('table-hash').innerHTML='';
            result.forEach(value => {addressTag = value.permlink; let ss = document.getElementById('table-hash').innerHTML= document.getElementById('table-hash').innerHTML + '<br><div class="border border-secondary text-center">Address id:<h3>'+addressTag+'</h3></div>'});
            //console.log(err, result);
        });
    }
    setInterval(()=>{
          golos.api.getContentReplies(username, constPermlik, function(err, result) {
            /*document.getElementById('table-hash').innerHTML='';
            result.forEach(value => {addressTag = value.permlink; let ss = document.getElementById('table-hash').innerHTML= document.getElementById('table-hash').innerHTML + '<br><div class="border border-secondary text-center">Address id:<h3>'+addressTag+'</h3></div>'});*/
            //console.log(err, result);/ 
            if(prev>0 && prev != result.length) {
             alert('new transaction');
             history();   
            } 
            prev = result.length;
        });
    },5000)
    document.getElementById('blockchain').addEventListener('click',()=>{
        history();
    })