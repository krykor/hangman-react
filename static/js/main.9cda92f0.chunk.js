(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e){e.exports=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]},12:function(e,t,n){e.exports=n(23)},17:function(e,t,n){},19:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(9),i=n.n(r),c=(n(17),n(1)),u=n(2),o=n(4),l=n(3),h=n(5),p=(n(19),n(11)),d=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"statusMessage",value:function(){var e=this.props.puzzle,t=e.status,n=e.remainingGuesses,a=e.word;return"playing"===t?"Guesses left: ".concat(n):"failed"===t?'Nice try! The word was "'.concat(a.join(""),'".'):"Great work! You guessed the word."}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("p",null,this.statusMessage()))}}]),t}(a.Component),f=n(6),m=n.n(f),v=n(7),k=function(){var e=Object(v.a)(m.a.mark(function e(t){var n,a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("//puzzle.mead.io/puzzle?wordCount=".concat(t));case 2:if(200!==(n=e.sent).status){e.next=10;break}return e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a.puzzle);case 10:throw new Error("Unable to get puzzle");case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),b=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"startGame",value:function(){var e=Object(v.a)(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k("2");case 2:t=e.sent,this.props.getWord(t.toLowerCase().split(""));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.startGame()}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("button",{className:"button",onClick:this.startGame.bind(this)},"Reset game"))}}]),t}(a.Component),w=function(e){var t=e.puzzleState;return s.a.createElement("div",{className:"puzzle"},t&&t.map(function(e,t){return s.a.createElement("div",{className:"word",key:t+"div"},e.split("").map(function(e,t){return s.a.createElement("span",{key:t},e)}))}))},y=n(10),j=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(o.a)(this,Object(l.a)(t).call(this,e))).letterClick=function(e){n.setState({charakters:e})},n.state={letters:[],charakters:""},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({letters:y}),document.addEventListener("click",function(){e.state.charakters&&e.props.chooseLetter(e.state.charakters)})}},{key:"componentDidUpdate",value:function(e){this.props.reset!==e.reset&&this.setState({charakters:""})}},{key:"render",value:function(){var e=this,t=this.state.letters;return s.a.createElement("div",{className:"letters"},t.map(function(t,n){return s.a.createElement("span",{key:"letter-".concat(n),onClick:function(){return e.letterClick(t)}},t)}))}}]),t}(a.Component),z=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(o.a)(this,Object(l.a)(t).call(this,e))).chooseLetter=function(e){n.makeGuess(e),n.setState({reset:!1})},n.state={},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"getWord",value:function(e){this.setState({word:e,remainingGuesses:5,guessedLetters:[],puzzleState:"",status:"playing",reset:!0}),this.puzzle()}},{key:"calculateStatus",value:function(){var e=this,t=this.state.word.every(function(t){return e.state.guessedLetters.includes(t)||" "===t});0===this.state.remainingGuesses?this.setState({status:"failed"}):t?this.setState({status:"finished"}):this.setState({status:"playing"})}},{key:"makeGuess",value:function(e){e=e.toLowerCase();var t=!this.state.guessedLetters.includes(e),n=!this.state.word.includes(e);"playing"===this.state.status&&(t&&this.setState({guessedLetters:Object(p.a)(this.state.guessedLetters).concat([e])}),t&&n&&this.setState({remainingGuesses:this.state.remainingGuesses-1}),this.puzzle(),this.calculateStatus())}},{key:"puzzle",value:function(){var e=this,t="";this.state.word.forEach(function(n){e.state.guessedLetters.includes(n)||" "===n?t+=n:t+="*"}),this.setState({puzzleState:t.split(" ")})}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("keypress",function(t){var n=String.fromCharCode(t.charCode);e.makeGuess(n)})}},{key:"render",value:function(){var e=this,t=this.state.puzzleState;return s.a.createElement("div",{className:"App"},s.a.createElement(w,{puzzleState:t}),s.a.createElement(j,{chooseLetter:function(t){return e.chooseLetter(t)},reset:this.state.reset}),s.a.createElement(d,{puzzle:this.state}),s.a.createElement(b,{getWord:function(t){return e.getWord(t)}}))}}]),t}(a.Component),g=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(z,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,2,1]]]);
//# sourceMappingURL=main.9cda92f0.chunk.js.map