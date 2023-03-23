
const btnstart=document.querySelector('.start');
const btnstop=document.querySelector('.stop');
const btnreset=document.querySelector('.reset');
const clock=document.querySelector('.clock');

let hrs=min=sec=ms=0,timer;

btnstart.addEventListener('click',()=>{
    btnstart.classList.add('start-active');
    btnstop.classList.remove('stop-active');
    clock.classList.add('clock-active');

    timer=setInterval(()=>{
        ms++;
        if(ms==100){
            sec++;
            ms=0;
        }
        else if(sec==60){
            min++;
            sec=0;
        }else if(min==60){
            hrs++;
            min=0;
        }
        display();
    },10);
});

btnstop.addEventListener('click',()=>{
    btnstart.classList.remove('start-active');
    btnstop.classList.add('stop-active');
    clock.classList.remove('clock-active');
    clearInterval(timer);
});

btnreset.addEventListener('click',()=>{
    hrs=min=sec=ms=0;
    btnstart.classList.remove('start-active');
    btnstop.classList.remove('stop-active');
    clock.classList.remove('clock-active');
    clearInterval(timer);
    display();
});

function display(){

    phr=hrs<10?"0"+hrs:hrs;
    psec=sec<10?"0"+sec:sec;
    pmin=min<10?"0"+min:min;
    pms=ms<10?"0"+ms:ms;

    phr=phr.toString();
    psec=psec.toString();
    pmin=pmin.toString();
    pms=pms.toString();

    document.querySelectorAll('.hrs')[0].innerText=phr[0];
    document.querySelectorAll('.hrs')[1].innerText=phr[1];
    document.querySelectorAll('.mins')[0].innerText=pmin[0];
    document.querySelectorAll('.mins')[1].innerText=pmin[1];
    document.querySelectorAll('.sec')[0].innerText=psec[0];
    document.querySelectorAll('.sec')[1].innerText=psec[1];
    document.querySelectorAll('.ms')[0].innerText=pms[0];
    document.querySelectorAll('.ms')[1].innerText=pms[1];
}