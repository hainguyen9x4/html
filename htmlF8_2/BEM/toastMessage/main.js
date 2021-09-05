// viet ham toast- param la object
function toast({
    title="",
    type='info',
    message='',
    duration=3000
}){
const toast = document.querySelector('#toast');
if(toast){
    const div = document.createElement('div');
    const delay = (duration/1000).toFixed(2);
    div.classList.add("toast", `toast--${type}`);
    div.style.animation=`moveIn ease .3s, fadeOut linear 1s ${delay}s forwards`;

    //auto remove
    let idTimer = setTimeout(function(){
       toast.removeChild(div)
    },duration + 1000);
    //remove by close
    div.onclick=function(e){
        if(e.target.closest('.toast__close')){
            toast.removeChild(div)
            clearTimeout(idTimer);
        }
    }
    div.onmouseenter=function(){
        clearTimeout(idTimer);
        div.style.animationPlayState = 'paused';
    }
    div.onmouseleave=function(){
        div.style.animationPlayState = 'running';
        idTimer = setTimeout(function(){
            toast.removeChild(div)
         },duration + 1000);
    }
    //set icon
    var icon ={
        success: 'fas fa-check-square',
        info:'fas fa-info-circle',
        warn:'fas fa-exclamation-triangle',
        error:'fas fa-times'
    }
    div.innerHTML = `
        <div class="toast__icon">
            <i class="${icon[type]}"></i>
        </div>
        <div class="toast__content">
            <div class="toast__content__title">${title}</div>
            <div class="toast__content__mess">${message}</div>
        </div>
        <div class="toast__close">CLOSE</div>`;
    
    toast.appendChild(div);   
}
};

// event cua moi button, tuwong ung goi toi ham toast va truyen tham so tuong ung
document.querySelector('#show-success').addEventListener("click",function(){
    toast({
        type:'success',
        title:'Success',
        message:'Thanh cong roi',
        duration:3000
    });
});
document.querySelector('#show-warn').addEventListener("click",function(){
    toast({
        type:'warn',
        title:'Warning',
        message:'Canh bao',
        duration:3000
    });
});
document.querySelector('#show-error').addEventListener("click",function(){
    toast({
        type:'error',
        title:'Error',
        message:'Đã có lỗi xảy ra!',
        duration:3000
    });
});
document.querySelector('.btn--info').addEventListener("click",function(){
    toast({
        type:'info',
        title:'Information',
        message:'Thong tin da duoc cap nhat',
        duration:3000
    });
});