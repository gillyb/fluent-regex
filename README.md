# fluent-regex

This is a small, dependency-free library intended to help you construct regex statements in a fluent and typed way (instead of using cryptic symbols no one fully understands).  
Using Typescript is preferred when using this library since it can help you complete the "fluent-regex" syntax easily.  

Instead of typing something like this :  
```
const r = /(([a-zA-Z]{,3}|\d{,3})-)?\d{6}/g;
```
You can type this :
```
const r = new RegexSequence(
  new Group(
    new Or(
      RegexLiteral.anyLetter().upToAmount(3),
      RegexLiteral.anyDigit().upToAmount(3)
    ),
    new RegexLiteral('-')
  ).optional(),
  RegexLiteral.anyDigit().exactAmount(6)
);
```

# Installing  
```
npm install --save fluent-regex
```

# Running tests  
```
npm test
```

