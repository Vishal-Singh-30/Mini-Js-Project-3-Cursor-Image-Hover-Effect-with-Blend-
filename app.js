// setting the effect for first box 
let boxes = document.querySelectorAll(".box");
let cursors = document.querySelectorAll(".cursor");

console.log(boxes);
console.log();
console.log(cursors);

boxes.forEach((box)=>{
    let cursor = box.childNodes[3];
    box.addEventListener("mousemove", (dets) => {
        cursor.style.left = dets.clientX + "px";
        cursor.style.top = dets.clintY + "px";
    
    });
    
    box.addEventListener("mouseenter", () => {
        cursor.style.opacity = 1;
    });
    
    box.addEventListener("mouseleave", () => {
        cursor.style.opacity = 0;
    });
    
})




