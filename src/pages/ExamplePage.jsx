import { React, Component } from "../CONST";

class ClassComponent extends Component {
  render() {
    return <div className="class border">{this.props.name}</div>;
  }
}

function FunctionComponent({ name }) {
  return (
    <div className="function border">
      {name}
      <button onClick={() => console.log("omg")}>click</button>
    </div>
  );
}

function Example() {
  return (
    <div className="box border">
      <p>p 标签</p>
      <a href="https://kaikeba.com/">a标签</a>
      <FunctionComponent name="函数组件" />
      <ClassComponent name="class组件" />
    </div>
  );
}

export default Example;
