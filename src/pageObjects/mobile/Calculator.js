
class Calculator {
    press(buttonName) {
        $(`~${buttonName}`).click();
    }
    result() {
        return $(`~Result`).getValue();
    }
}
export default new Calculator();