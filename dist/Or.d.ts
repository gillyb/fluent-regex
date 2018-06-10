import RegexComponent from "./RegexComponent";
export default class Or extends RegexComponent {
    private regexComponents;
    private groupName;
    constructor(...components: (RegexComponent | string)[]);
    withGroupName: (name: string) => this;
    toRegexString: () => string;
}
