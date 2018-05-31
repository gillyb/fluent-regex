import { RegexComponent } from "./RegexComponent";

export default class Or implements RegexComponent {

  private regexComponents: RegexComponent[];

  constructor(...components: RegexComponent[]) {
    this.regexComponents = components;
  }

  toRegexString = () => {
    return `(${this.regexComponents.map(r => r.toRegexString()).join('|')})`;
  };

  toRegex = () => {
    return new RegExp(this.toRegexString());
  };

}