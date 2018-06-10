import RegexComponent from "./RegexComponent";
import Or from "./Or";
export default class Group extends RegexComponent {
    private name;
    private regex;
    private groupNameValidator;
    nonCapturing: boolean;
    constructor(regex: RegexComponent, groupName?: string);
    static nonCapturing(regex: RegexComponent): Group;
    static or(...components: (RegexComponent | string)[]): Or;
    toRegexString: () => string;
}
