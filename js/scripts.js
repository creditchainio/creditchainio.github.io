$(document).ready(function(){
    $('#blockchain').on('click',()=>{
        $('#table-hash').css('display','block');
        $('#graphSVG').css('display','none');
        $('.graph').css('height','auto');
        $(this).addClass('active');
        $('.btn-companies').removeClass('active');
        document.getElementsByClassName('list-companies')[0].style.display = 'none';
        document.getElementsByClassName('list-documents')[0].style.display = 'block';  
    });

    $('#companies').on('click',()=>{
        $('#graphSVG').css('display','block');
        $('.graph').css('height','100vh');
        console.log($('.graph').css('width'));
        console.log($('.graph').css('height'));
        resizeSVG();
        
        $('#table-hash').css('display','none');
        $(this).addClass('active');
        $('.btn-documents').removeClass('active');
        document.getElementsByClassName('list-companies')[0].style.display = 'block';
        document.getElementsByClassName('list-documents')[0].style.display = 'none';
    });
    
    function resizeSVG(){
        $('svg').width($('.graph').width());
        $('svg').height($('.graph').height());
    }
    
    //Процедурное рисование
    var centerX = Math.round( $('svg').width()*2);
    var centerY = Math.round($('svg').height()*2.5);
    var N = 6;
    var M = 6;
    var R = 300;
    var r = 40;
    var cmp = [];
    var lines = [];
    var objects = [];
    
    document.getElementById('download-blockchain').addEventListener('click',()=>{
        golos.api.getContent(username, constPermlik, function(err, result) {
          //console.log(err, result);
          if (!err){
            objects = JSON.parse(result.json_metadata).data;
            console.log(objects);
            initialize(N,R);
            drawChain(cmp,lines);
          }
          else console.error(err);
        });
        
    });
    
    
    function initialize(N,R){
        var fi = 0;
        var dfi = 2*Math.PI/N; 
        var bind;
        for(var i=0;i<N;i++){
            var Company = new Object();
            Company.ID = objects[i].id;
            Company.x = centerX + R*Math.cos(fi);
            Company.y = centerY + R*Math.sin(fi);
            Company.R = r;
            Company.binds = objects[i].binds;
            Company.name = objects[i].name;
            fi+=dfi;
            cmp.push(Company);
            console.log(Company);
        }
        /*cmp[0].binds = [1,2];
        cmp[1].binds = [2];
        cmp[2].binds = [3];
        cmp[3].binds = [4];
        cmp[4].binds = [5];
        cmp[5].binds = [0];*/
        
        for(var i=0; i<N;i++){
            for(var j=0;j<cmp[i].binds.length;j++){
                var Line = new Object();
                Line.from = i;
                Line.to = cmp[i].binds[j];
                Line.ID = Line.from+'-'+Line.to;
                Line.val = objects[i].value[j];
                lines.push(Line);
            }
        }
    }
      
    function drawChain(cmp,lines){
        drawLines(lines,cmp);
        drawNodes(cmp);
    }
    
    function drawLines(lines,cmp){
        for(var i=0; i<lines.length; i++){
            drawLine(lines[i],cmp);
        }
    }
    
    function drawNodes(cmp){
        for(var i=0; i<N; i++){
            drawCirc(cmp[i]);
        }
    }
    
    function findCmp(cmp,ID){
        for(var i=0; i<N; i++){
            if(cmp[i].ID==ID){
                return i;
            }
        }
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
        var tex = document.createElementNS('http://www.w3.org/2000/svg','text');
        tex.setAttribute('font-size','30px');
        tex.setAttribute('x',Company.x - 10);
        tex.setAttribute('y',Company.y + 5);
        tex.innerHTML = Company.ID;
        $('svg').append(tex);
    }
        
    function drawLine(Line, cmp){
        var from = findCmp(cmp,Line.from);
        var to = findCmp(cmp,Line.to);
        var line = document.createElementNS('http://www.w3.org/2000/svg','line');
        line.setAttribute('id',Line.ID);
        line.setAttribute('x1',cmp[from].x);
        line.setAttribute('y1',cmp[from].y);
        line.setAttribute('x2',cmp[to].x);
        line.setAttribute('y2',cmp[to].y);
        line.setAttribute('class','bind');
        line.setAttribute('stroke','#5a9578');
        line.setAttribute('stroke-width',5);
        $('svg').append(line);
        var tex = document.createElementNS('http://www.w3.org/2000/svg','text');
        tex.setAttribute('x',(cmp[from].x + cmp[to].x)/2 -20);
        tex.setAttribute('y',(cmp[from].y + cmp[to].y)/2 - 15);
        tex.innerHTML = Line.val;
        tex.setAttribute('font-size',30);
        $('svg').append(tex);
    }
    
});