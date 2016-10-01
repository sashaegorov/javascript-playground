import * as prototypes from  'src/patterns/prototypr'

describe('Prototype pattern', function () {
  var dummyPrototype;
  var childObject;

  beforeEach(function () {
     dummyPrototype = { hey: 'Hi!' };
     childObject = prototypes.Prototypr(dummyPrototype)
  });

  it('creates empty object', function () {
    expect(prototypes.Prototypr(dummyPrototype)).toEqual({})
  });

  it('created object has prototype\'s fields', function () {
    expect(childObject.hey).toEqual('Hi!')
  });

  it('prototype\'s fields are changeable', function () {
    expect(childObject.hey).toEqual('Hi!');
    // Change Prototype's field
    dummyPrototype.hey = 'Hello!';
    expect(childObject.hey).toEqual('Hello!')
  })
});
