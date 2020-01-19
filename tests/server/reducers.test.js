const {registerNewBeeToDatabase, updateBeeDatabase, deleteBee} = require('../../server/reducers');

describe('BackEnd Reducers Test', () => {

  it('Bee Registration Reducers', () => {
    let initialState = {};
    let beeDetails = {'speed': 20, 'altitude': 40};
    let requestData = {'id': 123, ...beeDetails};
    let expectedStore = {123: {...beeDetails, 'honey': 0, 'nectar': 0, 'running': false}};
    expect(registerNewBeeToDatabase(initialState, requestData)).toEqual(expectedStore);
  });

  it('Bee Update Reducers', () => {
    let idToBeUpdated = 321;
    let initialState = {[idToBeUpdated]: {'running': false, 'speed': 40, 'nectar': 0, 'honey': 0}};
    let beeDetails = {'running': true, 'nectar': 80, 'speed': 40, 'honey': 0};
    let requestData = {'id': idToBeUpdated, ...beeDetails};
    let expectedStore = {[idToBeUpdated]: beeDetails};
    expect(updateBeeDatabase(initialState, requestData)).toEqual(expectedStore);
  });

  it('Bee Deletion Reducers', () => {
    let idToBeRemoved = 10;
    let initialState = {[idToBeRemoved]: {'speed': 20, 'altitude': 40}};
    let requestData = {'id': idToBeRemoved};
    let expectedStore = {};
    expect(deleteBee(initialState, requestData)).toEqual(expectedStore);
  });
});
