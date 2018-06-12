import React from 'react';

/* function Welcome(props){
    return <h1>Hello {props.name}</h1>
} */

/* export const Welcome = ({name})=>(<h1>Hello {name}</h1>)  */// ctrl+shift+z

export class Welcome extends React.Component {
  render() {
    const { children } = this.props;
    return <h1>Hello, {children}!</h1>;
  }
}

export class Clock extends React.Component {
  /*  constructor(){
       super();
       this.state={
           time:new Date()}
   } */

  state = {
    time: new Date(),
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({
      time: new Date(),

    });
  }
  render() {
    return (<p>{this.state.time.toLocaleTimeString()}</p>);
  }
}

// ------------------------------------------------------------List----------
const data = [
  'item1',
  'item2',
  'item3',
  'item4',
];

export const List = () => (
  <ul>
    {data.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);


// export default Welcome;

/*

https://github.com/dogecodes/react-chat/tree/8c7b5763296f92500b292e035a97d0ccf428915e
https://dogecodes-react-chat.herokuapp.com/chat/5a8079e505dd85001e271b91


flex-direction

https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction

A Complete Guide to Flexbox | CSS-Tricks:

https://css-tricks.com/snippets/css/a-guide-to-flexbox/

В продолжение темы про CSS. В material-ui используется один их вариантов css-in-js под названием JSS:

https://material-ui-next.com/customization/css-in-js/

Что такое семантическое версионирование:

https://semver.org/lang/ru/

О стрелочных функциях:

https://learn.javascript.ru/es-function#%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8-%D1%81%D1%82%D1%80%D0%B5%D0%BB%D0%BA%D0%B8-%D0%BD%D0%B5-%D0%B8%D0%BC%D0%B5%D1%8E%D1%82-%D1%81%D0%B2%D0%BE%D0%B5%D0%B3%D0%BE-this

Мои плагины для VSCode:

advanced-new-file: https://github.com/patbenatar/vscode-advanced-new-file
vscode-theme-onedark: https://github.com/akamud/vscode-theme-onedark
vscode-chrome-debug: https://github.com/Microsoft/vscode-chrome-debug
editorconfig-vscode: https://github.com/editorconfig/editorconfig-vscode
vscode-eslint: https://github.com/Microsoft/vscode-eslint
import-cost: https://github.com/wix/import-cost
vscode-jest: https://github.com/jest-community/vscode-jest
NpmIntellisense: https://github.com/ChristianKohler/NpmIntellisense
PathIntellisense: https://github.com/ChristianKohler/PathIntellisense
prettier-vscode: https://github.com/prettier/prettier-vscode
vscode-svgviewer: https://github.com/cssho/vscode-svgviewer
vscode-icons: https://github.com/vscode-icons/vscode-icons
typescript-snapshots-plugin: https://github.com/asvetliakov/typescript-snapshots-plugin
test

*/
