var Queue = /** @class */ (function () {
    function Queue() {
        // задаване на generic тип на данните. Не е задължително да е Т, може да е всичко. T is from type
        this.data = [];
    }
    Queue.prototype.add = function (item) {
        this.data.push(item);
    };
    Queue.prototype.remove = function () {
        this.data.shift();
    };
    return Queue;
}());
// за преизползване на класа се задава тъпа на всяка инстанция <тип>
var stringQueue = new Queue();
stringQueue.add("Luis");
stringQueue.add("Andrey");
var numberQueue = new Queue();
numberQueue.add(3);
numberQueue.add(4);
