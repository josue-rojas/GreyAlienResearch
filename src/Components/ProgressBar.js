import React from 'react';
import '../Styles/ProgressBar.css';

export default class ProgressBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      progress: 0,
      progressTimer: null,
    }
  }

  componentDidMount(){
    let timer = setTimeout(
      ()=> this.setState({ progress: this.props.progress }),
      1);
    this.setState({ progressTimer: timer });
  }

  // handle progress bar changes
  componentWillReceiveProps(nextProps){
    if(nextProps.progress !== this.props.progress){
      clearTimeout(this.state.progressTimer);
      let timer = setTimeout(
        ()=> this.setState({ progress: nextProps.progress }),
        1);
      this.setState({ progressTimer: timer });
    }
  }

  componentWillUnmount(){
    clearTimeout(this.state.progressTimer);
  }

  render(){
    return(
      <div className={`progress-bar-border ${this.props.className || ''}`}>
        <div
          style={{width: `${this.state.progress}%`}}
          className='progress-bar'></div>
      </div>
    )
  }
}
