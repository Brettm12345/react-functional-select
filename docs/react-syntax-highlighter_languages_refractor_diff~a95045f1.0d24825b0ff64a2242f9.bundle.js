(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{729:function(module,exports,__webpack_require__){"use strict";function diff(Prism){!function(Prism){Prism.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d+.*$/m]};var PREFIXES={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(PREFIXES).forEach((function(name){var prefix=PREFIXES[name],alias=[];/^\w+$/.test(name)||alias.push(/\w+/.exec(name)[0]),"diff"===name&&alias.push("bold"),Prism.languages.diff[name]={pattern:RegExp("^(?:["+prefix+"].*(?:\r\n?|\n|(?![\\s\\S])))+","m"),alias:alias}})),Object.defineProperty(Prism.languages.diff,"PREFIXES",{value:PREFIXES})}(Prism)}module.exports=diff,diff.displayName="diff",diff.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_diff~a95045f1.0d24825b0ff64a2242f9.bundle.js.map