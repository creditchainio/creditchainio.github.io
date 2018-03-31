let username = 'test7';
    const constPermlik = '01-04-2018';
    golos.config.set('websocket', 'wss://ws.testnet.golos.io');
    golos.config.set('chain_id', '5876894a41e6361bde2e73278f07340f2eb8b41c2facd29099de9deef6cdb679');

    function history(){
        golos.api.getAccountHistory(username, 100, 100, function(err, result) {
            document.getElementById('table-hash').innerHTML='';
            result.forEach(value => {let ss = document.getElementById('table-hash').innerHTML= document.getElementById('table-hash').innerHTML + '<br><div class="border border-secondary text-center">ADDRESS: '+'<h3>'+value[1].trx_id+'</h3></div>'});
            //console.log(err, result);
        });
    }
    function sendPost(test) {
        let jsonMetadata = {
            app: 'creditchain/0.1',
            canonical: `https://creditchainio.github.io/`,
            app_account: 'creditchain',
            data: []
        }, author = username, title = 'EE list', permlink = constPermlik; 
        test.forEach((value) => {
            jsonMetadata.data.push(window.btoa(window.btoa(value)));
        });
        jsonMetadata = JSON.stringify(jsonMetadata);
            //permlink = String(Math.floor(Math.random() * (10000 - 1 + 1)) + 1);

        golos.broadcast.comment(wif, '', 'post', author, permlink, title, '____', jsonMetadata, function(err, result) {
            if (!err) {
                alert('OK')

            } else alert('CHECK CONNECTION TO THE INTERNET');
        });
    }
    document.getElementById('upload-blockchain').addEventListener('click',()=>{
/*        let first = document.getElementById('getFirst').value;
        let second = document.getElementById('getSecond').value;*/
        
        let array= [{naftan:[100,200,300,400]}, {belaz:[500,600,700,800]}, {maz:[900,1000,1100,1200]}];
        //let elem={};elem[`${first}`]=second;
        //array.push(elem)
        //console.log(array);
        sendPost(array);
    })
    document.getElementById('blockchain').addEventListener('click',()=>{
        history();
    })