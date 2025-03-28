// const elText = document.querySelector('.text');

// function updateTime() {
//   let d = new Date();
//   elText.innerHTML = d.getHours() + "." + d.getMinutes() + ":" + d.getSeconds();
// }


// setInterval(updateTime, 1000);


// updateTime();


const elText = document.querySelector('.text');

function updateTime() {
    let d = new Date();
    elText.innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}

function vaqt() {
    const startDate = new Date("March 26, 2025 18:45:20");
    const now = new Date();
    const timeDiff = startDate - now;



    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    elText.innerHTML = `${days}  :    ${hours}  :   ${minutes}    : ${seconds} `;
}

setInterval(vaqt, 1000);
vaqt();  