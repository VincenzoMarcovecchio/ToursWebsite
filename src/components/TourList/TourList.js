import React, { Component } from 'react';
import './tourList.scss';
import Tour from '../Tour/Tour';
import { tourData } from '../../TourData';
export default class TourList extends Component {
  state = {
    tours: tourData,
  };

  removeTour = (id) => {
    const { tours } = this.state;
    const soretedTours = tours.filter((tour) => tour.id !== id);
    this.setState({
      tours: soretedTours,
    });
  };
  render() {
    const { tours } = this.state;
    return (
      <>
        <h2>Some of the best tours we provide</h2>

        <section className='tourList'>
          {tours.map((tour) => {
            return (
              <Tour removeTour={this.removeTour} key={tour.id} tour={tour} />
            );
          })}
        </section>
        <section className='flexible'>
          <h2>keep things flexible</h2>
          <p>
            Use Reserve Now & Pay Later to secure the activities you don’t want
            to miss without being locked in.
          </p>
        </section>
      </>
    );
  }
}
