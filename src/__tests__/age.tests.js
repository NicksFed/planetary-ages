import Person from '../age';
import Planet from '../planet';
describe('Age', () => {

test("Should correctly construct a person with a past, current, and future age", () => { 
const person = new Person(31, 28, 33);
  expect(person.currentAge).toEqual(31);
  expect(person.pastAge).toEqual(28);
  expect(person.futureAge).toEqual(33);
  });
  
test("Should correctly construct Mercury and tell you how old you are on Mercury", () => {
  const person = new Person(31, 28, 33);
  const Mer = new Planet("Mer", .24);
  const merAge = Mer.checkType(person);
  expect(Mer.name).toEqual("Mer");
  expect(merAge).toBeGreaterThanOrEqual(129)
  });

  test("Should correctly construct Venus and tell you how old you are on Venus", () => {
    const person = new Person(31, 28, 33);
    const Ven = new Planet("Ven", .62);
    const venAge = Ven.checkType(person);
    expect(Ven.name).toEqual("Ven");
    expect(venAge).toBeGreaterThanOrEqual(50)
  });

  test("Should correctly construct Mars and tell you how old you are on Mars", () => {
    const person = new Person(31, 28, 33);
    const Mar = new Planet("Mar", 1.88);
    const marAge = Mar.checkType(person);
    expect(Mar.name).toEqual("Mar");
    expect(marAge).toBeGreaterThanOrEqual(16)
});

  test("Should correctly construct Mars and tell you how old you are on Mars", () => {
    const person = new Person(31, 28, 33);
    const Jup = new Planet("Jup", 11.86);
    const jupAge = Jup.checkType(person);
    expect(Jup.name).toEqual("Jup");
    expect(jupAge).toBeGreaterThanOrEqual(2)
  });

});