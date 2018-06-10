import RegexComponent from "./RegexComponent";
import Or from "./Or";

export default class Group extends RegexComponent {

  private name: string;
  private regex: RegexComponent;

  private groupNameValidator = /^[a-zA-Z][a-zA-Z0-9]*$/;    // Yo Dawg, I heard you like regexes in your regex framework, so I put a regex in the regex framework so you can validate the regex your regex framework creates

  nonCapturing: boolean = false;

  constructor(regex: RegexComponent, groupName?: string) {
    super();
    this.regex = regex;
    if (groupName) {
      if (!this.groupNameValidator.test(groupName))
        throw `Invalid group name \'${groupName}\'.\nA group name can contain letters and numbers but must start with a letter.`;
      this.name = groupName;
    }
    return this;
  }

  static nonCapturing(regex: RegexComponent) {
    const g = new Group(regex);
    g.nonCapturing = true;
    return g;
  }

  static or(...components: (RegexComponent | string)[]) {
    return new Or(...components);
  }

  toRegexString = () => {
    const quantifier = this.regexQuantifier ? this.regexQuantifier : '';
    if (this.nonCapturing) return `(?:${this.regex.toRegexString()})${quantifier}`;
    if (this.name) return `(?<${this.name}>${this.regex.toRegexString()})${quantifier}`;
    return `(${this.regex.toRegexString()})${quantifier}`;
  };

}