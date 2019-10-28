import Helper from '../../common/Helper'

const DESTINATION_OPEN_LOCATOR = '//input[@id="destination"]';
const SEARCH_BAR_LOCATOR = '//div[@id="search-bar"]'
const SEARCH_BUTTON_LOCATOR = '//button[@id="search-button"]'


class Homepage {
    navigate(URL) {
        browser.maximizeWindow()
        browser.url(URL);
        Helper.verifyPageState();
        browser.waitUntil(() => {
            return browser.getTitle() === "Get Skiing | Specialists in Group Ski Holidays";
        }, 10000, 'cannot access homepage');
    }

    openCountriesDropdown() {
        Helper.verifyElementExistence(SEARCH_BAR_LOCATOR)
        $(DESTINATION_OPEN_LOCATOR).click();
        browser.pause(1000)
    }

    selectResort(countries, resorts) {
        const DESTINATION_COUNTRIES_LOCATOR = `//div[@data-target="countries-resorts"]/div[@class="search-level-1"]//li[contains(a,"${countries}")]`
        const DESTINATION_RESORT_LOCATOR = `//div[@data-target="countries-resorts"]/div[@class="search-level-2"]//li[contains(a,"${countries}")]`
        const RESORT_ITEMS_LOCATOR = `//div[@data-target="countries-resorts"]/div[@class="search-level-2"]//li[contains(a,"${resorts}")]`
        Helper.verifyElementExistence(DESTINATION_COUNTRIES_LOCATOR)
        $(DESTINATION_COUNTRIES_LOCATOR).click();
        Helper.verifyElementExistence(DESTINATION_RESORT_LOCATOR)
        if (resorts != undefined || resorts != null) {
            Helper.verifyElementExistence(RESORT_ITEMS_LOCATOR)
            $(RESORT_ITEMS_LOCATOR).click();
            browser.waitUntil(() => {
                return $(RESORT_ITEMS_LOCATOR).getAttribute('class') === "selected";
            }, 10000, 'Resort does not select');
        }
    }

    search() {
        $(SEARCH_BUTTON_LOCATOR).click();
        Helper.verifyPageState()
        browser.waitUntil(() => {
            return $('.main_title').getText() === "SKI HOLIDAYS RESULTS";
        }, 10000, 'Search List page does not display');
    }
}
export default new Homepage();