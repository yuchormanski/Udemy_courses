class Queue<T> {
  // задаване на generic тип на данните. Не е задължително да е Т, може да е всичко. T is from type
  private data: T[] = [];

  add(item: T) {
    this.data.push(item);
  }

  remove() {
    this.data.shift();
  }
}

// за преизползване на класа се задава тъпа на всяка инстанция <тип>
const stringQueue = new Queue<string>();
stringQueue.add("Luis");
stringQueue.add("Andrey");

const numberQueue = new Queue<number>();
numberQueue.add(3);
numberQueue.add(4);
