import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import './ColorBox.css';

export default class ColorBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      copied: false
    };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  render() {
    const { name, background, moreUrl } = this.props;
    const { copied } = this.state;

    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background: background }} className='ColorBox'>
          <div
            style={{ background: background }}
            className={`copy-overlay ${copied && 'show'}`}
          ></div>
          <div className={`copy-msg ${copied && 'show'}`}>
            <h2>Copied!</h2>
            <p>{background}</p>
          </div>
          <div className='copy-container'></div>
          <div className='box-content'>
            <span>{name}</span>
          </div>
          <button className='copy-button'>Copy</button>
          <Link to={moreUrl} onClick={e => e.stopPropagation()}>
            <span className='see-more'>More</span>
          </Link>
        </div>
      </CopyToClipboard>
    );
  }
}
