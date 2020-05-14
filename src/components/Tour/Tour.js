import React, { Component } from 'react';
import './Tour.scss';

export default class Tour extends Component {
  state = {
    showInfo: false,
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };
  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;

    return (
      <article className='tour'>
        <div className='img__container'>
          <img src={img} alt={name} />
          <span className='close__btn'>
            <i
              className='fa fa-window-close'
              onClick={() => {
                removeTour(id);
              }}
            />
          </span>
        </div>
        <div className='tour__info'>
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info
            <span onClick={this.handleInfo}>
              <i className='fa fa-caret-square-down' />
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}
