// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
export enum RegexFlags {
  GLOBAL = 'g',       /** Find all matches rather than stopping after the first */
  IGNORE_CASE = 'i',  /** Ignore case. If 'u' flag is also enabled, use unicode case folding */
  MULTILINE = 'm',    /** Treat beginning and end characters (^ and $) as working over multiple lines */
  UNICODE = 'u',      /** Treat pattern as a sequence of unicode code points */
  STICKY = 'y'        /** matches only from the index indicated by the 'lastIndex' property of this regular expression in the target string */
}