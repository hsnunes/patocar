/** CONTANDO unidades com Js */
const countNumber = document.querySelectorAll('.count');
const speed = 200;

countNumber.forEach( c => {
    const animate = () => {
        const value = +c.getAttribute('data-number');
        const data = +c.innerText;


        const time = value / speed;
        if(data < value) {
            c.innerText = Math.ceil(data + time);
            setTimeout(animate, 1);
        } else {
            c.innerText = value;
        } 
   }
   animate();
});