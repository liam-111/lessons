let bollPosition = 2
function cup(n) {
    console.log("cup", n);
    if (bollPosition == n) alert("cool u find it");
    else alert("No man not your day");
    bollPosition = Math.round(Math.random())+1;
    console.log(bollPosition);
}
