const idbyx = require('./index');

test('IsDivisibleBy2', () => {
  expect(idbyx.IsDivisibleBy2(`0`)).toBe(true);
  expect(idbyx.IsDivisibleBy2(`33`)).toBe(false);
  expect(idbyx.IsDivisibleBy2(`36`)).toBe(true);
  expect(idbyx.IsDivisibleBy2(`3626783427472374092384982309482903`)).toBe(false);
  expect(idbyx.IsDivisibleBy2(`3626783427274389274342472374092384982309482903`)).toBe(false);
})

test(`IsDivisibleBy3`, () => {
    expect(idbyx.IsDivisibleBy3(`36`)).toBe(true)
    expect(idbyx.IsDivisibleBy3(`108`)).toBe(true)
    expect(idbyx.IsDivisibleBy3(`15`)).toBe(true)
    expect(idbyx.IsDivisibleBy3(`12`)).toBe(true)
    expect(idbyx.IsDivisibleBy3(`9`)).toBe(true)
    expect(idbyx.IsDivisibleBy3(`6`)).toBe(true)
    expect(idbyx.IsDivisibleBy3(`3`)).toBe(true)
    expect(idbyx.IsDivisibleBy3(`0`)).toBe(true)
    expect(idbyx.IsDivisibleBy3(`37`)).toBe(false)
    expect(idbyx.IsDivisibleBy3(`47024`)).toBe(false)
    expect(idbyx.IsDivisibleBy3(`123`)).toBe(true)
});

test(`IsDivisibleBy4`, () => {
  expect(idbyx.IsDivisibleBy4(`36`)).toBe(true);
  expect(idbyx.IsDivisibleBy4(`0`)).toBe(true);
  expect(idbyx.IsDivisibleBy4(`37`)).toBe(false);
  expect(idbyx.IsDivisibleBy4(`123`)).toBe(false);
  expect(idbyx.IsDivisibleBy4(`21638736246729347`)).toBe(false);
  expect(idbyx.IsDivisibleBy4(`21638736246729396`)).toBe(true);
  expect(idbyx.IsDivisibleBy4(`216387362467293962364523548712600`)).toBe(true);
});

test(`IsDivisibleBy5`, () => {
  expect(idbyx.IsDivisibleBy5(`50000000000000000`)).toBe(true);
  expect(idbyx.IsDivisibleBy5(`35`)).toBe(true);
  expect(idbyx.IsDivisibleBy5(`36`)).toBe(false);
  expect(idbyx.IsDivisibleBy5(`0`)).toBe(true);
  expect(idbyx.IsDivisibleBy5(`37`)).toBe(false);
});

test(`IsDivisibleBy7`, () => {
  expect(idbyx.IsDivisibleBy7(`7`)).toBe(true);
  expect(idbyx.IsDivisibleBy7(`14`)).toBe(true);
  expect(idbyx.IsDivisibleBy7(`28`)).toBe(true);
  expect(idbyx.IsDivisibleBy7(`77`)).toBe(true);
  expect(idbyx.IsDivisibleBy7(`5219`)).toBe(false);
  expect(idbyx.IsDivisibleBy7(`7238723847`)).toBe(false);
});