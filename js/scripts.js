$(document).ready(function(){
    $('#blockchain').on('click',()=>{
        $('#table-hash').css('display','block');
        $('#graphSVG').css('display','none');
    });

    $('#companies').on('click',()=>{
        $('#graphSVG').css('display','block');
        $('#table-hash').css('display','none');
    })

    $('.btn-companies').click(function(){
        this.classList.add('active');
        $('.btn-documents').removeClass('active');
        document.getElementsByClassName('list-companies')[0].style.display = 'block';
        document.getElementsByClassName('list-documents')[0].style.display = 'none';
        
    });
    $('.btn-documents').click(function(){
        this.classList.add('active');
        $('.btn-companies').removeClass('active');
        document.getElementsByClassName('list-companies')[0].style.display = 'none';
        document.getElementsByClassName('list-documents')[0].style.display = 'block';        
    });
    
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
        /*$('#text1').css('fill','red');
        $('#text1').css('stroke','red');
        $('#text2').css('fill','red');
        $('#text2').css('stroke','red');
        $('#text5').css('fill','red');
        $('#text5').css('stroke','red');*/
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
        //$('#text_1').css('display','none');
        //$('#text_4').css('display','none');
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
        //Array.from(document.getElementsByClassName('str0')).forEach(function(item){
        //    item.setAttribute('stroke',stockStroke);
        //});
    }
    
    //drawing
    
    /*$('svg').width($('.graph').width());
    $('svg').height($('.graph').height());
    
    var centerX = $('svg').width()/2;
    var centerY = $('svg').height()/2;
    var N = 6;
    var M = 6;
    var R = 300;
    var r = 40;
    var cmp = [];
    var lines = [];
    var targets = [1,2,3,4,5,0];
    
    initialize(N,R);
    drawChain(cmp,lines);
    
    function initialize(N,R){
        var fi = 0;
        var dfi = 2*Math.PI/N; 
        var bind;
        for(var i=0;i<N;i++){
            var Company = new Object();
            Company.ID = i;
            Company.x = centerX + R*Math.cos(fi);
            Company.y = centerY + R*Math.sin(fi);
            Company.R = r;
//            (i!=N-1)? bind = i+1 : bind = 0;
//            Company.binds = [bind,2];
            fi+=dfi;
            cmp.push(Company);
        }
        for(var i=0; i<M;i++){
            var Line = new Object();
            Line.from = i;
            Line.to = targets[i];
            Line.ID = Line.from+'-'+Line.to;
            lines.push(Line);
        }
        
    }
      
    function drawChain(cmp,lines){
        //console.log(lines);
        drawLines(lines);
        drawNodes(cmp);
    }
    
    function drawLines(lines){
        for(var i=0; i<M; i++){
            var from = findCmp(cmp,lines[i].from);
            var to = findCmp(cmp,lines[i].to);
            //console.log(from+' '+to);
            drawLine(lines[i]);
            //for(var j=0;j<cmp[i].binds.length;j++){
            //    var targetCmp = findCmp(cmp,cmp[i].binds[j]);
            //    drawLine(cmp[i],cmp[targetCmp]);
            //}
        }
    }
    
    function drawNodes(cmp){
        for(var i=0; i<N; i++){
            drawCirc(cmp[i]);
        }
        
    }
    
    function findCmp(cmp,ID){
        var index = 0;
        for(var i=0; i<N; i++){
            console.log(cmp[i].ID+' == '+ ID);
            if(cmp[i].ID==ID){
                index = i;
                break;
            }
        }
        
        return index;
    }
    
    function drawCirc(Company){
        var circ = document.createElementNS('http://www.w3.org/2000/svg','circle');
        circ.setAttribute('id', Company.ID);
        circ.setAttribute('class','node');
        circ.setAttribute('cx',Company.x);
        circ.setAttribute('cy',Company.y);
        circ.setAttribute('r',Company.R);
        circ.setAttribute('fill','#f4f4f4');
        circ.setAttribute('stroke','#5a9578');
        circ.setAttribute('stroke-width',5);
        $('svg').append(circ);
    }
    
    /*function drawLine1(Company1,Company2){
        var line = document.createElementNS('http://www.w3.org/2000/svg','line');
        line.setAttribute('id',Company1.ID+'-'+Company2.ID);
        line.setAttribute('x1',Company1.x);
        line.setAttribute('y1',Company1.y);
        line.setAttribute('x2',Company2.x);
        line.setAttribute('y2',Company2.y);
        line.setAttribute('class','bind');
        line.setAttribute('stroke','#5a9578');
        line.setAttribute('stroke-width',5);
        $('svg').append(line);
    }*/
    
    /*function drawLine(line){
        //drawLine1(findCmp(line.from),findCmp(line.to));
        var line = document.createElementNS('http://www.w3.org/2000/svg','line');
        line.setAttribute('id',line.ID);
        line.setAttribute('x1',findCmp(cmp,line.from).x);
        line.setAttribute('y1',findCmp(cmp,line.from).y);
        line.setAttribute('x2',findCmp(cmp,line.to).x);
        line.setAttribute('y2',findCmp(cmp,line.to).y);
        line.setAttribute('class','bind');
        line.setAttribute('stroke','#5a9578');
        line.setAttribute('stroke-width',5);
        $('svg').append(line);
    }*/
});