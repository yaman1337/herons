const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click', () => {
    const a = document.getElementById('a').value;
    const b = document.getElementById('b').value;
    const c = document.getElementById('c').value;

    if(a <= 0 || b<= 0 || c<=0){
        alert('Sorry data is invalid!');
    }
    else {
        findArea(a,b,c);
    }
});

function findArea(a,b,c) {
    const s = (parseInt(a)+parseInt(b)+parseInt(c))/2;
    const area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    result.textContent = "The area is "+area;
}