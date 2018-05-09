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
    time: new Date()
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({
      time: new Date()

    });
  }
  render() {
    return (<p>{this.state.time.toLocaleTimeString()}</p>);
  }
}

//------------------------------------------------------------List----------
const data = [
  'item1',
  'item2',
  'item3',
  'item4',
]

export const List = () => (
  <ul>
    {data.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
)



//export default Welcome;
