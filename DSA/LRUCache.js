class LRUCache {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }

  get(key) {
    const value = this.cache.get(key);
    if (value) {
      this.cache.delete(key);
      this.cache.set(key, value);
    }
    return value;
  }

  put(key, value) {
    this.cache.delete(key);
    if (this.cache.size === this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key, value);
  }

  getRecentlyUsed() {
    return Array.from(this.cache)[this.cache.size - 1];
  }

  getLeastUsed() {
    return this.cache.entries().next().value;
  }

  getAllEntries() {
    return Array.from(this.cache.entries());
  }

}

const lru = new LRUCache(4);

lru.put('store', 9);
lru.put('store', 8);
lru.put('red', 109);
lru.put('green', 107);
lru.put('blue', 108);
console.log(lru.get('red'));
lru.put('orange', 106);
console.log(lru.get('store'));
console.log(lru.getAllEntries());
console.log(lru.getRecentlyUsed()); 
console.log(lru.getLeastUsed());