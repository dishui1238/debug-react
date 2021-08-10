import * as React from "react";
import { Component } from "react";


/**
 * React setState之后执行了什么？
 * 1. 调用 enqueueSetState
  Component.prototype.setState = function(partialState, callback) {
    this.updater.enqueueSetState(this, partialState, callback, 'setState');
  };

  2.
 * 
 * 
 * 
 */

// setState在合成事件中，是异步执行（批量执行）
// 但是在setTimeout、或者原生事件中就是同步的
export default class SetStatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    // 原生事件的 onclik 调用的 setState
    document.getElementById("host").addEventListener(
      "click",
      // 即react-reconciler/src/ReactFiberWorkLoop.js batchedUpdates
      // () => ReactDOM.unstable_batchedUpdates(this.changeCount),
      this.changeCount,
      false
    );
  }

  // react 合成事件调用 setState
  changeCount = () => {
    const { count } = this.state;
    debugger;
    this.setState({ count: count + 1 }, () => {
      console.log("回调函数获取的 count:", this.state.count);
    });
    console.log("立即获取的count", this.state.count);
  };

  changeCountWithSetTimeout = () => {
    const { count } = this.state;
    setTimeout(() => {
      this.setState({ count: count + 1 });
      console.log("setTimeout中立即获取 count:", this.state.count);
    }, 0);
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h3>setState调试</h3>
        <p>count: {count}</p>
        <button onClick={this.changeCount}>react合成事件</button>
        <button onClick={this.changeCountWithSetTimeout}>
          合成事件 setTimeout click
        </button>
        <button id="host">原生onclick事件调用 setState</button>
      </div>
    );
  }
}
