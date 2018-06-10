import RegexComponent from "./RegexComponent";
import RegexLiteral from "./RegexLiteral";

export default class Or extends RegexComponent {

  private regexComponents: RegexComponent[];
  private groupName: string;

  constructor(...components: (RegexComponent | string)[]) {
    super();
    this.regexComponents = components.map(r => {
      if (typeof r === 'string')
        return new RegexLiteral(r)
      return r;
    });
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