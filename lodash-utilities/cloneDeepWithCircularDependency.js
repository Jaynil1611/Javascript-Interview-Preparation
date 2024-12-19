/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
 * Using WeakMap here since keys of weakmap should be objects &
 * the keys are garbage collected easily when not referenced outside of weakmap
 *
 */

function isFunction(value) {
  return typeof value === "function";
}

function isPrimitive(value) {
  return value !== Object(value);
}

function isObject(value) {
  return typeof value === "object";
}

function cloneDeepWithCircularDependency(value, cache = new WeakMap()) {
  if (cache.has(value)) {
    return cache.get(value);
  }
  if (isPrimitive(value) || isFunction(value)) {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map((element) =>
      cloneDeepWithCircularDependency(element, cache)
    );
  }
  const result = {};
  cache.set(value, result);
  Object.entries(value).forEach(([key, value]) => {
    result[key] = cloneDeepWithCircularDependency(value, cache);
  });
  return result;
}

function A() {}
function B() {}
let a = new A();
let b = new B();
a.b = b;
b.a = a;

const c = cloneDeepWithCircularDependency(a);
console.log("a" in c.b.a.b);
console.log(c)
