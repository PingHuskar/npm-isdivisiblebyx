# isdivisiblebyx

A lightweight JavaScript library for checking if numbers are divisible by 2, 3, 4, 5, 7, or 10. Supports **arbitrarily large numbers** using string representation.

[![npm version](https://img.shields.io/npm/v/isdivisiblebyx.svg)](https://www.npmjs.com/package/isdivisiblebyx)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- ✅ Check divisibility by 2, 3, 4, 5, 7, and 10
- ✅ Support for arbitrarily large numbers (beyond JavaScript's `Number.MAX_SAFE_INTEGER`)
- ✅ ES Module support
- ✅ TypeScript type definitions included
- ✅ Fluent API with class-based approach
- ✅ Individual function exports for tree-shaking

## Installation

```bash
npm install isdivisiblebyx
```

## Usage

### Class-based API (Recommended)

```javascript
import IsDiv from 'isdivisiblebyx';

const num = new IsDiv("84000");

console.log(num.by2);  // true
console.log(num.by3);  // true
console.log(num.by4);  // true
console.log(num.by5);  // true
console.log(num.by7);  // true
console.log(num.by10); // true

// Chain with set() method
const checker = new IsDiv();
console.log(checker.set("36").by2);  // true
console.log(checker.set("37").by3);  // false
```

### Individual Functions

```javascript
import {
  IsDivisibleBy2,
  IsDivisibleBy3,
  IsDivisibleBy4,
  IsDivisibleBy5,
  IsDivisibleBy7,
  IsDivisibleBy10,
} from 'isdivisiblebyx';

// Works with very large numbers as strings
console.log(IsDivisibleBy2("3626783427472374092384982309482904")); // true
console.log(IsDivisibleBy3("123456789012345678901234567890"));     // true
console.log(IsDivisibleBy5("50000000000000000"));                  // true
console.log(IsDivisibleBy7("7238723847238723849"));                // Check divisibility by 7
```

## API Reference

### `IsDiv` Class

#### Constructor

```javascript
new IsDiv(num?: string | number)
```

Creates a new IsDiv instance with the specified number (defaults to "0").

#### Methods

| Method     | Description                                       |
| ---------- | ------------------------------------------------- |
| `set(num)` | Sets a new number and returns `this` for chaining |

#### Properties (Getters)

| Property | Type      | Description                                     |
| -------- | --------- | ----------------------------------------------- |
| `by2`    | `boolean` | Returns `true` if the number is divisible by 2  |
| `by3`    | `boolean` | Returns `true` if the number is divisible by 3  |
| `by4`    | `boolean` | Returns `true` if the number is divisible by 4  |
| `by5`    | `boolean` | Returns `true` if the number is divisible by 5  |
| `by7`    | `boolean` | Returns `true` if the number is divisible by 7  |
| `by10`   | `boolean` | Returns `true` if the number is divisible by 10 |

### Individual Functions

All functions accept a string representation of a number and return a boolean.

| Function                       | Description                        |
| ------------------------------ | ---------------------------------- |
| `IsDivisibleBy2(num: string)`  | Checks if `num` is divisible by 2  |
| `IsDivisibleBy3(num: string)`  | Checks if `num` is divisible by 3  |
| `IsDivisibleBy4(num: string)`  | Checks if `num` is divisible by 4  |
| `IsDivisibleBy5(num: string)`  | Checks if `num` is divisible by 5  |
| `IsDivisibleBy7(num: string)`  | Checks if `num` is divisible by 7  |
| `IsDivisibleBy10(num: string)` | Checks if `num` is divisible by 10 |

## Why Use String Numbers?

JavaScript's `Number` type can only safely represent integers up to `Number.MAX_SAFE_INTEGER` (9,007,199,254,740,991). This library uses string representations to handle arbitrarily large numbers without precision loss.

```javascript
// This works correctly with very large numbers!
IsDivisibleBy3("999999999999999999999999999999999999999999"); // true
```

## Testing

```bash
npm test
```

Run tests with coverage:

```bash
npm run cv
```

## License

[MIT](LICENSE) © Chadin Chaipornpisuth

## Repository

[GitHub](https://github.com/PingHuskar/npm-isdivisiblebyx)
