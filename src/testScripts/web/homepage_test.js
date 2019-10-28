import Homepage from "../../pageObjects/web/Homepage";
import Config from '../../config.json';
import Data from '../../../resource/data.json'

before(() => {
  Homepage.navigate(Config.url)
})

describe('Get Skiing', () => {
  it('Get Skiing', () => {
    Homepage.openCountriesDropdown()
    for(let i in Data){
      Homepage.selectResort(Data[i].country, Data[i].resort)
    }
    Homepage.search();
    console.log(1)
  });
});
