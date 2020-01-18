const {registerNewBeeToDatabase, updateBeeDatabase, deleteBee} = require('../server/reducers');

describe('Reducers Test', () => {
  let initialState;

  beforeEach(() => {
    initialState = {};
  });

  it('Bee Registration Reducers', () => {
    let beeDetails = {'speed': 20, 'altitude': 40};
    let requestData = {'id': 123, ...beeDetails};
    let expectedStore = {123: beeDetails};
    expect(registerNewBeeToDatabase(initialState, requestData)).toEqual(expectedStore);
  });

  it('Bee Update Reducers', () => {
    let beeDetails = {'speed': 40, 'altitude': 80};
    let requestData = {'id': 321, ...beeDetails};
    let expectedStore = {321: beeDetails};
    expect(updateBeeDatabase(initialState, requestData)).toEqual(expectedStore);
  });

  it('Bee Deletion Reducers', () => {
    let idToBeRemoved = 10;
    initialState = {[idToBeRemoved]: {'speed': 20, 'altitude': 40}};
    let requestData = {'id': idToBeRemoved};
    let expectedStore = {};
    expect(deleteBee(initialState, requestData)).toEqual(expectedStore);
  });
});
