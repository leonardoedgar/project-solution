const {TOGGLE_MODAL_CHANNEL, CLEAR_INPUT_FORMS_CHANNEL, UPDATE_INPUT_FORMS_CHANNEL,
  TOGGLE_SORT_DATABASE_CHANNEL, toggleModal, clearInputForms, updateInputForm,
  toggleSortDatabase} = require('../../src/actions');

describe('FrontEnd Action Creators Test', () => {
  it('Toggle Modal Window Action Creator', () => {
    let content = 'defaultModal';
    let expectedAction = {
      type: TOGGLE_MODAL_CHANNEL,
      modalStateKey: content
    };
    expect(toggleModal(content)).toEqual(expectedAction);
  });

  it('Clear Input Forms Action Creator', () => {
    let expectedAction = {
      type: CLEAR_INPUT_FORMS_CHANNEL,
    };
    expect(clearInputForms()).toEqual(expectedAction);
  });

  it('Update Input Forms Action Creator', () => {
    let content = true, beeAttribute = 'running';
    let expectedAction = {
      type: UPDATE_INPUT_FORMS_CHANNEL,
      beeAttribute: beeAttribute,
      content: content
    };
    expect(updateInputForm(beeAttribute, content)).toEqual(expectedAction);
  });

  it('Sort Database Action Creator', () => {
    let expectedAction = {
      type: TOGGLE_SORT_DATABASE_CHANNEL
    };
    expect(toggleSortDatabase()).toEqual(expectedAction);
  });
});
