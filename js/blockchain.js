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
    function sendPost(test) {
        let jsonMetadata = {
            app: 'creditchain/0.1',
            canonical: `https://creditchainio.github.io/`,
            app_account: 'creditchain',
            data: []
        }, author = username, title = 'EE list', permlink = constPermlik; 
        test.forEach((value) => {
            jsonMetadata.data.push(value);
        });
        jsonMetadata = JSON.stringify(jsonMetadata);
            //permlink = String(Math.floor(Math.random() * (10000 - 1 + 1)) + 1);

        golos.broadcast.comment(wif, '', 'post', author, permlink, title, '____', jsonMetadata, function(err, result) {
            if (!err) {
                let doc = document.createElement('div');
                doc.className = 'doc';
                doc.innerHTML = `<div><u>${result.operations[0][1].permlink}</div><div>done</div>`  
                document.getElementById('listDoc').appendChild(doc);

            } else console.log(err);
        });
    }
    document.getElementById('upload-blockchain').addEventListener('click',()=>{
/*        let first = document.getElementById('getFirst').value;
        let second = document.getElementById('getSecond').value;*/
        
        let array= [
                    { "id":1, 'binds':[2, 3], value: [100, 200], 'name': 'Нафтан' }, 
                    { "id":2, 'binds':[1, 3, 5], value: [50, 170, 80], 'name':'Белтелеком' }, 
                    { "id":3, 'binds':[2, 4, 5], value: [25, 45, 160], 'name':'КосмосТВ' }, 
                    { "id":4, 'binds':[1, 3, 4], value: [10, 60, 75], 'name':'Макдональдс' }, 
                    { "id":5, 'binds':[2, 5], value: [45, 87], 'name':'Литбел' }, 
                    { "id":6, 'binds':[1, 3, 5], value: [78, 83, 97], "name":'Асторикс' } 
                    ];
        //let elem={};elem[`${first}`]=second;
        //array.push(elem)
        //console.log(array);
        sendPost(array);
    })
    document.getElementById('blockchain').addEventListener('click',()=>{
        history();
    })