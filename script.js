const drag_item = document.querySelectorAll('.drag-item');
const drag_list = document.querySelectorAll('.drag-item-list');

let selectItem;

// item
drag_item.forEach((item) => {
    item.addEventListener('dragstart', onDragStart);
});

// list
drag_list.forEach((list) =>{
    list.addEventListener('dragover', onDragOver);
    list.addEventListener('dragenter', onDragEnter);
    list.addEventListener('drop', onDrop);
});
function onDragStart(){
    selectItem = this;
}
function onDrop(){
    this.append(selectItem);
    selectItem = null;
}
function onDragEnter(e){
    e.preventDefault();
}
function onDragOver(e){
    e.preventDefault();
}