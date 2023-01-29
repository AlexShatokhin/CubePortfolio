document.addEventListener("DOMContentLoaded", () =>{
    const position = { x: 0, y: 0 }

    interact('.cube')
    .draggable({
        inertia: true,
        listeners: {
            start (event) {
            console.log(event.dx, event.target)
            },
            move (event) {
            position.x += event.dx
            position.y += event.dy
        
            event.target.style.transform =
                `rotateY(${position.x}deg) rotateX(${-position.y}deg)`
            },
        }
    })
})