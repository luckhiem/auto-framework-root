const PageFactory = require('../pages/PageFactory');
const Config = require('../config.json');

const admin = {
  "username": "khiemltv@gmail.com",
  "password": "Khiemluc2903"
}

const user = [
  {
    firstName: "Mark",
    lastName: "Luc",
    email: 'abc@gmail.com',
    manager: "khiemltv@gmail.com"
  },
  {
    firstName: "Mark1",
    lastName: "Luc1",
    email: 'abc1@gmail.com',
    manager: "khiemltv@gmail.com"
  },
  {
    firstName: "Mark2",
    lastName: "Luc2",
    email: 'abc2@gmail.com',
    manager: "khiemltv@gmail.com"
  },
  {
    firstName: "Mark",
    lastName: "Luc",
    email: 'abc3@gmail.com',
    manager: "khiemltv@gmail.com"
  },
  {
    firstName: "Mark1",
    lastName: "Luc1",
    email: 'abc4@gmail.com',
    manager: "khiemltv@gmail.com"
  },
  {
    firstName: "Mark2",
    lastName: "Luc2",
    email: 'abc5@gmail.com',
    manager: "khiemltv@gmail.com"
  },
  {
    firstName: "Mark1",
    lastName: "Luc1",
    email: 'abc6@gmail.com',
    manager: "khiemltv@gmail.com"
  },
  {
    firstName: "Mark2",
    lastName: "Luc2",
    email: 'abc7@gmail.com',
    manager: "khiemltv@gmail.com"
  }
]

let page = PageFactory

describe('Adding People', () => {
  it('Adding People', () => {
    page.Login.open().doLogin(admin)
    page.PeopleAdd
      .acccessToAddPeoplePage().addNewPeople(user)
  });
});
