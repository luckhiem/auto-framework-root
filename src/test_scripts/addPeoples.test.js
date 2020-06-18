const PageFactory = require('../pages/PageFactory');
const CONFIG = require('../config')

let page = PageFactory


describe('Adding People', () => {

  before(function () {
    page.Login.open().doLogin(CONFIG.user.admin)
  });

  it('Adding People', () => {
    page.PeopleAdd
      .acccessToAddPeoplePage()
      .addNewPeoples(CONFIG.user.normalUser)
      .verifyPageAfterPeopleAdded(CONFIG.user.normalUser)
  });

  it('Adding People unsuccessfully', () => {
    page.PeopleAdd
      .acccessToAddPeoplePage()
      .addNewPeoples(CONFIG.user.normalUser)
      .verifyErrorMessageAfterPeopleAdded(CONFIG.user.normalUser)
  });
});
