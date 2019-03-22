import React from 'react';

export default class Tooltop extends React.Component {
  render(){
    return(
      <div className='tooltip'>
        <span>{this.props.message}</span>
      </div>
    )
  }

}
