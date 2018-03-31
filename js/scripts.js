$(document).ready(function(){
    
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
    
    
    //drawing
    
    $('svg').width($('.graph').width());
    $('svg').height($('.wrapper').innerHeight());
    
    var centerX = $('svg').width()/2;
    var centerY = $('svg').height()/2;
    var N = 7;
    var R = 300;
    var r = 40;
    var cmp = [];
    
    initialize(N,R);
    drawChain(cmp);
    
    
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
            (i!=N-1)? bind = i+1 : bind = 0;
            Company.binds = [bind,2];
            fi+=dfi;
            cmp.push(Company);
        }
    }
      
    function drawChain(cmp){
        drawLines(cmp);
        drawNodes(cmp);
    }
    
    function drawLines(cmp){
        for(var i=0; i<N; i++){
            for(var j=0;j<cmp[i].binds.length;j++){
                var targetCmp = findCmp(cmp,cmp[i].binds[j]);
                drawLine(cmp[i],cmp[targetCmp]);
            }
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
    
    function drawLine(Company1,Company2){
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
    }
    
    //
//    $('.node').hover(function(){
//        var id = this.getAttribute('id');
//        var thisNode = findCmp(id);
//        console.log(thisNode);
//        //пройти по binds
//        //найти все круги-цели (int)
//        //найти линии по id
//        
//    });
    
    //$('[id$="-"]')
    
//    document.getElementsByClassName('.bind').addEventListener('hover',function(){
//        this.style.opacity = 0;    
//    });
});