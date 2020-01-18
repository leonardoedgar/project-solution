const {registerBee, updateBee, deleteBee, REGISTER_BEE_CHANNEL, UPDATE_BEE_CHANNEL,
  DELETE_BEE_CHANNEL} = require('../server/actions');

describe('Action Creators Test', () => {
  it('Bee Registration Action Creators', () => {
      let content = {'id': 123, 'speed': 100, 'altitude': 200};
      let expectedAction = {
        type: REGISTER_BEE_CHANNEL,
        content: content
      };
      expect(registerBee(content)).toEqual(expectedAction);
  });

  it('Bee Update Action Creators', () => {
    let content = {'id': 20, 'speed': 10, 'altitude': 25};
    let expectedAction = {
      type: UPDATE_BEE_CHANNEL,
      content: content
    };
    expect(updateBee(content)).toEqual(expectedAction);
  });

  it('Bee Delete Action Creators', () => {
    let content = {'id': 321};
    let expectedAction = {
      type: DELETE_BEE_CHANNEL,
      content: content
    };
    expect(deleteBee(content)).toEqual(expectedAction);
  });
});
