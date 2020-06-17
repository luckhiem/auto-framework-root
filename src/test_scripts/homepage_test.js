const PageFactory = require('../pages/PageFactory');
const Config = require('../config.json');

const user = {
  "username": "khiemltv@gmail.com",
  "password": "Khiemluc2903"
}
let page = PageFactory

describe('Adding People', () => {
  it('Adding People', () => {
    page.Login
      .open()
      .doLogin(user)
    page.PeopleAdd
      .acccessToAddPeoplePage()
  });
});
