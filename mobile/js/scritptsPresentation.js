document.getElementById('btn-control').addEventListener('click',function(){
        var btn = document.getElementById('btn-control'); 
        if(btn.getAttribute('data-frame')==0){
            click0();
            return;
        }
        if(btn.getAttribute('data-frame')==1){
            click1();
            return;
        }
        if(btn.getAttribute('data-frame')==2){
            click2();
            return;
        }
        if(btn.getAttribute('data-frame')==3){
            click3();
            return;
        }
        if(btn.getAttribute('data-frame')==4){
            click4();
            return;
        }
        if(btn.getAttribute('data-frame')==5){
            click5();
            return;
        }
        if(btn.getAttribute('data-frame')==6){
            click6();
            return;
        }
        if(btn.getAttribute('data-frame')==7){
            click7();
            return;
        }
        if(btn.getAttribute('data-frame')==8){
            click8();
            return;
        }
    });
    
    function click0(){
        $('#line1').css('stroke','red');
        $('#line2').css('stroke','red');
        $('#line3').css('stroke','red');
        $('circle:nth-of-type(1)').css('stroke','red');
        $('circle:nth-of-type(4)').css('stroke','red');
        $('circle:nth-of-type(5)').css('stroke','red');
        document.getElementById('btn-control').setAttribute('data-frame',1);
    }
    function click1(){
        stockStyle();
        document.getElementById('btn-control').setAttribute('data-frame',2);
    }
    function click2(){
        $('.str0').css('stroke','red');
        $('#line3').css('stroke','#339966');
        document.getElementById('btn-control').setAttribute('data-frame',3);
    }
    function click3(){
        stockStyle();
        Array.from(document.getElementsByClassName('str4')).forEach(function(item){
            if(item.id != 'text_3'){
                item.style.fill = 'red';
                item.innerHTML+='-100';
            }    
        });
        document.getElementById('btn-control').setAttribute('data-frame',4);
    }
    function click4(){
        stockStyle();
        Array.from(document.getElementsByClassName('str4')).forEach(function(item){
            if(item.id != 'text_3'){
                console.log('minus');
                item.innerHTML = Number(item.innerHTML.substring(0,3)) - 100;
            }   
        });
        document.getElementById('btn-control').setAttribute('data-frame',5);
    }
    function click5(){
        $('#line1').css('stroke','red');
        $('#line2').css('stroke','red');
        document.getElementById('btn-control').setAttribute('data-frame',6);
    }
    function click6(){
        stockStyle();
        $('#line1').css('stroke','none');
        $('#line2').css('stroke','none');
        $('#text_1').remove();
        $('#text_4').remove();
        $('circle:nth-of-type(5)').css('stroke','red');
        document.getElementById('btn-control').setAttribute('data-frame',7);
    }
    function click7(){
        stockStyle();
        $('#line1').css('stroke','none');
        $('#line2').css('stroke','none');
        $('#text1').remove();
        $('circle:nth-of-type(5)').remove();
        document.getElementById('btn-control').setAttribute('data-frame',8);
    }
    function click8(){
        Array.from(document.getElementsByClassName('str4')).forEach(function(item){
            item.style.fill = 'red';
            item.innerHTML+='-200';  
        });
        document.getElementById('btn-control').setAttribute('data-frame',9);
    }
                                
    function stockStyle(){
        var stockStroke = '#339966';
        $('.str0').css('stroke',stockStroke);
        $('.str4').css('fill','black');
    }