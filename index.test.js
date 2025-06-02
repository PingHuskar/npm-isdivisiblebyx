import IsDiv, {
  IsDivisibleBy2,
  IsDivisibleBy3,
  IsDivisibleBy4,
  IsDivisibleBy5,
  IsDivisibleBy7,
} from "."

test('IsDivisibleBy2', () => {
  expect(IsDivisibleBy2(`0`)).toBeTruthy();
  expect(IsDivisibleBy2(`33`)).toBeFalsy();
  expect(IsDivisibleBy2(`36`)).toBeTruthy();
  expect(IsDivisibleBy2(`3626783427472374092384982309482903`)).toBeFalsy();
  expect(IsDivisibleBy2(`3626783427274389274342472374092384982309482903`)).toBeFalsy();
})

test(`IsDivisibleBy3`, () => {
    expect(IsDivisibleBy3(`36`)).toBeTruthy()
    expect(IsDivisibleBy3(`108`)).toBeTruthy()
    expect(IsDivisibleBy3(`15`)).toBeTruthy()
    expect(IsDivisibleBy3(`12`)).toBeTruthy()
    expect(IsDivisibleBy3(`9`)).toBeTruthy()
    expect(IsDivisibleBy3(`6`)).toBeTruthy()
    expect(IsDivisibleBy3(`3`)).toBeTruthy()
    expect(IsDivisibleBy3(`0`)).toBeTruthy()
    expect(IsDivisibleBy3(`37`)).toBeFalsy()
    expect(IsDivisibleBy3(`47024`)).toBeFalsy()
    expect(IsDivisibleBy3(`123`)).toBeTruthy()
});

test(`IsDivisibleBy4`, () => {
  expect(IsDivisibleBy4(`36`)).toBeTruthy();
  expect(IsDivisibleBy4(`0`)).toBeTruthy();
  expect(IsDivisibleBy4(`37`)).toBeFalsy();
  expect(IsDivisibleBy4(`123`)).toBeFalsy();
  expect(IsDivisibleBy4(`21638736246729347`)).toBeFalsy();
  expect(IsDivisibleBy4(`21638736246729396`)).toBeTruthy();
  expect(IsDivisibleBy4(`216387362467293962364523548712600`)).toBeTruthy();
});

test(`IsDivisibleBy5`, () => {
  expect(IsDivisibleBy5(`50000000000000000`)).toBeTruthy();
  expect(IsDivisibleBy5(`35`)).toBeTruthy();
  expect(IsDivisibleBy5(`36`)).toBeFalsy();
  expect(IsDivisibleBy5(`0`)).toBeTruthy();
  expect(IsDivisibleBy5(`37`)).toBeFalsy();
});

test(`IsDivisibleBy7`, () => {
  expect(IsDivisibleBy7(`7`)).toBeTruthy();
  expect(IsDivisibleBy7(`14`)).toBeTruthy();
  expect(IsDivisibleBy7(`28`)).toBeTruthy();
  expect(IsDivisibleBy7(`77`)).toBeTruthy();
  expect(IsDivisibleBy7(`5219`)).toBeFalsy();
  expect(IsDivisibleBy7(`7238723847`)).toBeFalsy();
});

test("IsDiv", () => {
  const D = new IsDiv("84000")
  expect(D.by2).toBeTruthy();
  expect(D.by3).toBeTruthy();
  expect(D.by4).toBeTruthy();
  expect(D.by5).toBeTruthy();
  expect(D.by7).toBeTruthy();
  expect(D.by10).toBeTruthy();
  const F = new IsDiv("8399")
  expect(F.by2).toBeFalsy();
  expect(F.by3).toBeFalsy();
  expect(F.by4).toBeFalsy();
  expect(F.by5).toBeFalsy();
  expect(F.by7).toBeFalsy();
  expect(F.by10).toBeFalsy();
})