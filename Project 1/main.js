/**
 * Project Requirements:
 * - Change the background color by generating random rbg color by clicking a button
 * 
 */

// Steps
// 1. Create onload function
// 2. random color generator function

window.onload = ()=>{
    main();
}

function main(){
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');

    btn.addEventListener('click', ()=>{
        root.style.backgroundColor = randomColor();
    })
}

// Generator random color
function randomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}