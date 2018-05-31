import RegexComponent from "./RegexComponent";

export default class Or extends RegexComponent {

  private regexComponents: RegexComponent[];

  constructor(...components: RegexComponent[]) {
    super();
    this.regexComponents = components;
  }

  toRegexString = () => {
    return `(${this.regexComponents.map(r => r.toRegexString()).join('|')})${this.regexQuantifier ? this.regexQuantifier : ''}`;
  };

}