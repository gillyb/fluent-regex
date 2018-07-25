import RegexComponent from './RegexComponent';
import RegexLiteral from './RegexLiteral';

export default class RegexSequence extends RegexComponent {

  private regexComponents: RegexComponent[];
  private beginning = false;
  private end = false;

  constructor(...components: (RegexComponent | string)[]) {
    super();
    this.regexComponents = components.map(r => {
      if (typeof r === 'string')
        return new RegexLiteral(r);
      return r;
    })
  }

  startsWith = () => {
    this.beginning = true;
    return this;
  };
  endsWith = () => {
    this.end = true;
    return this;
  };

  toRegexString = () => {
    const startsWith = this.beginning ? '^' : '';
    const endsWith = this.end ? '$' : '';
    const finalRegex = this.regexComponents.map(r => r.toRegexString()).join('');
    if (!this.regexQuantifier)
      return `${startsWith}${finalRegex}${endsWith}`;
    return `${startsWith}(${finalRegex})${this.regexQuantifier}${endsWith}`;
  };

}