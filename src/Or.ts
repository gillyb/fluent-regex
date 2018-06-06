import RegexComponent from "./RegexComponent";

export default class Or extends RegexComponent {

  private regexComponents: RegexComponent[];
  private groupName: string;

  constructor(...components: RegexComponent[]) {
    super();
    this.regexComponents = components;
  }

  withGroupName = (name: string) => {
    this.groupName = name;
    return this;
  }

  toRegexString = () => {
    const name = this.groupName ? `?<${this.groupName}>` : '';
    return `(${name}${this.regexComponents.map(r => r.toRegexString()).join('|')})${this.regexQuantifier ? this.regexQuantifier : ''}`;
  };

}