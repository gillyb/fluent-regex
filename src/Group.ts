import RegexComponent from "./RegexComponent";

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
        throw Error(`Invalid group name \'${groupName}\'.\nA group name can contain letters and numbers but must start with a letter.`);
      this.name = groupName;
    }
  }

  static nonCapturing(regex: RegexComponent) {
    const g = new Group(regex);
    g.nonCapturing = true;
    return g;
  }

  toRegexString = () => {
    if (this.nonCapturing) return `(?:${this.regex})`;
    if (this.name) return `(?<${this.name}>${this.regex})`;
    return `(${this.regex})${this.regexQuantifier ? this.regexQuantifier : ''}`;
  };

}