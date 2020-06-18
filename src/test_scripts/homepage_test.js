const PageFactory = require('../pages/PageFactory');

const admin = {
  "username": "khiemltv@gmail.com",
  "password": "Khiemluc2903"
}

const user = [
  {
    firstName: 'Mark',
    lastName: 'Luc',
    email: 'korea@gmail.com',
    manager: 'Khiem Luc'
  },
  {
    firstName: 'Mark1',
    lastName: 'Luc1',
    email: 'korea1@gmail.com',
    manager: 'Khiem Luc'
  },
]

let page = PageFactory

describe('Adding People', () => {
  it('Adding People', () => {
    page.Login.open().doLogin(admin)
    page.PeopleAdd
      .acccessToAddPeoplePage()
      .addNewPeoples(user)
      .verifyPageAfterPeopleAdded(user)
  });
});
