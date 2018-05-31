export interface RegexComponent { 
  toRegexString: () => string;
  toRegex: () => RegExp;
}