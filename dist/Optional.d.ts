import RegexComponent from "./RegexComponent";
export default class Optional extends RegexComponent {
    private innerRegex;
    constructor(regex: RegexComponent);
    toRegexString: () => string;
}
