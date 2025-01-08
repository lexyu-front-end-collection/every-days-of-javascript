const container = document.querySelector(".container")
const gridBtn = document.getElementById("submit-grid")
const clearGridBtn = document.getElementById("clear-grid")
const gridWidth = document.getElementById("width-range")
const gridHeight = document.getElementById("height-range")
const colorBtn = document.getElementById("color-input")
const eraseBtn = document.getElementById("erase-btn")
const paintBtn = document.getElementById("paint-btn")
const widthValue = document.getElementById("width-value")
const heightValue = document.getElementById("height-value")
const clearPaintBtn = document.getElementById("clear-paint");

let events = {
    mouse: {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup",
    },
    touch: {
        down: "touchstart",
        move: "touchmove",
        up: "touchend",
    }
};


let deviceType = "";

let draw = false;
let erase = false;

const isTouchDevice = () => {
    try {
        document.createEvent("TouchEvent");
        deviceType = "touch";
        console.log("Device Type: Touch Device");
        return true;
    } catch (error) {
        deviceType = "mouse";
        console.log("Device Type: Mouse Device");

        return false;
    }
}

const isTouch = isTouchDevice();

/** Ver 1.
gridBtn.addEventListener("click", () => {
    console.log("=== Creating New Grid ===");
    console.log(`Grid Size: ${gridWidth.value} x ${gridHeight.value}`);
    container.innerHTML = "";
    let count = 0;
    for (let i = 0; i < gridHeight.value; i++) {
        count += 2;
        let div = document.createElement("div");
        div.classList.add("gridRow");

        for (let j = 0; j < gridWidth.value; j++) {
            count += 2;
            let col = document.createElement("div");
            col.classList.add("gridCol");
            col.setAttribute("id", `gridCol${count}`);

            col.addEventListener(events[deviceType].down, () => {
                console.log("Drawing Started");
                draw = true;
                if (erase) {
                    console.log("Erasing at position:", `gridCol${count}`);
                    col.style.backgroundColor = "transparent";
                } else {
                    console.log("Drawing with color:", colorBtn.value, "at position:", `gridCol${count}`);
                    col.style.backgroundColor = colorBtn.value;
                }
            });

            col.addEventListener(events[deviceType].move, (e) => {
                let elementId = document.elementFromPoint(
                    !isTouch ? e.clientX : e.touches[0].clientX,
                    !isTouch ? e.clientY : e.touches[0].clientY
                ).id;
                checker(elementId);
            })

            col.addEventListener(events[deviceType].up, () => {
                draw = false;
                console.log("Drawing Ended");
            });

            div.appendChild(col);
        }
        container.appendChild(div);
    }
    console.log("Grid Creation Completed");
})
 */

gridBtn.addEventListener("click", () => {
    console.log("=== Creating New Grid ===");
    console.log(`Grid Size: ${gridWidth.value} x ${gridHeight.value}`);

    container.innerHTML = "";
    for (let i = 0; i < gridHeight.value; i++) {
        let div = document.createElement("div");
        div.classList.add("gridRow");
        for (let j = 0; j < gridWidth.value; j++) {
            let col = document.createElement("div");
            col.classList.add("gridCol");
            div.appendChild(col);
        }
        container.appendChild(div);
    }
    console.log("Grid Creation Completed");

    container.addEventListener('mousedown', handleStart);
    container.addEventListener('mousemove', handleMove);
    container.addEventListener('mouseup', handleEnd);
    container.addEventListener('mouseleave', handleEnd);
    console.log("Event Listeners Added to Container");

    /** Ver 2.
        container.addEventListener('mousedown', (e) => {
        draw = true;
        const cell = e.target;
        if (cell.classList.contains('gridCol')) {
                if (erase) {
                    cell.style.backgroundColor = 'transparent';
                } else {
                    cell.style.backgroundColor = colorBtn.value;
                }
            }
        });

        container.addEventListener('mousemove', (e) => {
            if (!draw) return;
            const cell = e.target;
            if (cell.classList.contains('gridCol')) {
                if (erase) {
                    cell.style.backgroundColor = 'transparent';
                } else {
                    cell.style.backgroundColor = colorBtn.value;
                }
            }
        });

        container.addEventListener('mouseup', () => {
            draw = false;
        });

        container.addEventListener('mouseleave', () => {
            draw = false;
        });
     */

});

// Ver 3. --------------------------------------------------->

function handleStart(e) {
    draw = true;
    const cell = e.target;
    if (cell.classList.contains('gridCol')) {
        const cellIndex = Array.from(cell.parentNode.children).indexOf(cell);
        const rowIndex = Array.from(cell.parentNode.parentNode.children).indexOf(cell.parentNode);
        console.log(`Drawing Started at Position: Row ${rowIndex}, Col ${cellIndex}`);

        if (erase) {
            console.log("Action: Erasing");
            cell.style.backgroundColor = 'transparent';
        } else {
            console.log(`Action: Drawing with color ${colorBtn.value}`);
            cell.style.backgroundColor = colorBtn.value;
        }
    }
}

function handleMove(e) {
    if (!draw) return;

    const cell = e.target;
    if (cell.classList.contains('gridCol')) {
        const cellIndex = Array.from(cell.parentNode.children).indexOf(cell);
        const rowIndex = Array.from(cell.parentNode.parentNode.children).indexOf(cell.parentNode);

        if (erase) {
            console.log(`Continuing Erase at Position: Row ${rowIndex}, Col ${cellIndex}`);
            cell.style.backgroundColor = 'transparent';
        } else {
            console.log(`Continuing Drawing at Position: Row ${rowIndex}, Col ${cellIndex}`);
            cell.style.backgroundColor = colorBtn.value;
        }
    }
}

function handleEnd() {
    if (draw) {
        console.log("Drawing/Erasing Ended");
        draw = false;
    }
}

// -----------------------------------------------------------------------

function checker(elementId) {
    let gridColumns = document.querySelectorAll(".gridCol");
    gridColumns.forEach((element) => {
        if (elementId == element.id) {
            if (draw && !erase) {
                element.style.backgroundColor = colorBtn.value;
                console.log("Drawing at position:", elementId);
            } else if (draw && erase) {
                console.log("Erasing at position:", elementId);
                element.style.backgroundColor = "transparent";
            }
        }
    });
}

clearGridBtn.addEventListener("click", () => {
    console.log("=== Clearing Grid ===");
    container.innerHTML = "";
    console.log("Grid Cleared");
})

clearPaintBtn.addEventListener("click", () => {
    console.log("=== Clearing All Paint ===");
    const gridColumns = document.querySelectorAll(".gridCol");
    gridColumns.forEach((col) => {
        col.style.backgroundColor = "transparent";
    });
    console.log("All Paint Cleared");
});

eraseBtn.addEventListener("click", () => {
    erase = true;
    console.log("Eraser Mode Activated");
})

paintBtn.addEventListener("click", () => {
    erase = false;
    console.log("Paint Mode Activated");
})

gridWidth.addEventListener("input", () => {
    console.log("Width Changed to:", gridWidth.value);
    widthValue.innerHTML = gridWidth.value < 9 ? `0${gridWidth.value}` : gridWidth.value;
})

gridHeight.addEventListener("input", () => {
    console.log("Height Changed to:", gridHeight.value);
    heightValue.innerHTML = gridHeight.value < 9 ? `0${gridHeight.value}` : gridHeight.value;
})

// -----------------------------------------------------------------------

window.onload = () => {
    console.log("=== Application Initialized ===");
    gridWidth.value = 0;
    gridHeight.value = 0;
    console.log("Initial Grid Size:", `${gridWidth.value} x ${gridHeight.value}`);
    console.log("Current Mode:", erase ? "Eraser" : "Paint");
    console.log("Initial Color:", colorBtn.value);
}