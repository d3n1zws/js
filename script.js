let boxes = document.querySelectorAll(".first");
let area1 = document.querySelector(".rectangle.pink-bg");

let draggedbox;

boxes.forEach(box => {
    box.ondragstart = function() {
        draggedbox = box;
    };
});

area1.ondragover = function(event) {
    event.preventDefault();
};

area1.ondrop = function(event) {
    event.preventDefault();
    area1.append(draggedbox);
};

boxes = document.querySelectorAll(".second");
let area2 = document.querySelector(".rectangle.purple-bg");


boxes.forEach(box => {
    box.ondragstart = function() {
        draggedbox = box;
    };
});

area2.ondragover = function(event) {
    event.preventDefault();
};

area2.ondrop = function(event) {
    event.preventDefault();
    area2.append(draggedbox);
};

boxes = document.querySelectorAll(".third");
let area3 = document.querySelector(".rectangle.blue-bg");

boxes.forEach(box => {
    box.ondragstart = function() {
        draggedbox = box;
    };
});

area3.ondragover = function(event) {
    event.preventDefault();
};

area3.ondrop = function(event) {
    event.preventDefault();
    area3.append(draggedbox);
};
