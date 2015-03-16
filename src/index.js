/* @flow */
var React = require('react');
var Arda = require('arda');
var StoneSkin = require('stone-skin');

var T = React.PropTypes;

var Component = React.createClass({
  propTypes: {
    message: T.string.isRequired
  },
  render: function(){
    return <div key='foo'>{1}</div>;
  }
});

var d = require('./defs')
class Main extends Arda.Context<d.Props, d.State, d.ComponentProps> {
  get component() { return Component; };
  initState(): d.State {
    return {foo: 'aa'};
  }
  expandComponentProps(): Promise<d.ComponentProps> {
    return Promise.resolve({foo: ''});
  }
}

window.addEventListener('DOMContentLoaded', () => {
  var router = new Arda.Router(Arda.DefaultLayout, document.body);
  router.pushContext(Main, {});
})
