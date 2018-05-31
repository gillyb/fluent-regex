import { RegexComponent } from "./RegexComponent";
import { RegexLiteral } from "./RegexLiteral";

export default class Optional implements RegexComponent {

  private innerRegex: RegexComponent;

  constructor(regex: RegexComponent) {
    this.innerRegex = regex;
  }

  toRegexString = () => {
    return this.innerRegex.toRegexString() + '?';
  };
  toRegex = () => {
    return new RegExp(this.innerRegex.toRegexString() + '?');
  };

}