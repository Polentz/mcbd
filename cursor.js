const $ = document.querySelector.bind(document);
const $on = document.addEventListener.bind(document);

let xmouse, ymouse;
$on("mousemove", (e) => {
    xmouse = e.pageX;
    ymouse = e.pageY;
});

const ball = $("#cursor");
let x = void 0,
    y = void 0,
    dx = void 0,
    dy = void 0,
    tx = 0,
    ty = 0,
    key = -1;

const followMouse = () => {
    key = requestAnimationFrame(followMouse);

    if (!x || !y) {
        x = xmouse;
        y = ymouse;
    } else {
        dx = (xmouse - x) * 0.125;
        dy = (ymouse - y) * 0.125;
        if (Math.abs(dx) + Math.abs(dy) < 0.1) {
            x = xmouse;
            y = ymouse;
        } else {
            x += dx;
            y += dy;
        }
    }
    ball.style.left = x + "px";
    ball.style.top = y + "px";
};

window.addEventListener("load", (followMouse));