const {toggleModal, updateInputForm} = require('../../src/reducers');

describe('FrontEnd Reducers Test', () => {

  it('Toggle Modal Window Reducers', () => {
    let modalStateKey = 'registrationModalOpen';
    let initialState = {'modalWindow': {
      [modalStateKey]: true
      }};
    let expectedStore = {'modalWindow': {[modalStateKey]: false}};
    expect(toggleModal(initialState, modalStateKey)).toEqual(expectedStore);
  });

  it('Update Input Form Reducers', () => {
    let beeAttribute = 'running', oldContent = false;
    let initialState = {'inputForms': {[beeAttribute]: oldContent}};
    let expectedStore = {...initialState, 'inputForms': {[beeAttribute]: !oldContent}};
    expect(updateInputForm(initialState, beeAttribute, !oldContent)).toEqual(expectedStore);
  });
});
