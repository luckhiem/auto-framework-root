const _timeout = 10000;

class Helper {
    verifyElementExistence(selector) {
        const returnElement = $(selector).waitForExist(_timeout, false, "Element does not exist")
        return returnElement === true
    }
    verifyElementEnable(selector) {
        const returnElement = $(selector).waitForEnabled(_timeout, false, "Element was disabled")
        return returnElement === true
    }
    verifyPageState() {
        browser.waitUntil(() => {
            return browser.execute(() => {
                return document.readyState === 'complete'
            })
        }, 10000, "Page load timeout")
    }
}
export default new Helper();