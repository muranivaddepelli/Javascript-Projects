function updateclock(){
    const time=new Date();
    let hours=time.getHours();
    const meridian=hours>=12?"PM":"AM";
    hours=hours%12 || 12;
    hours=hours.toString().padStart(2,0);
    const minutes=time.getMinutes().toString().padStart(2,0);
    const seconds=time.getSeconds().toString().padStart(2,0);
    const result=`${hours}:${minutes}:${seconds} ${meridian}`;
    document.getElementById("clock").textContent=result;
}
updateclock();
setInterval(updateclock,1000);