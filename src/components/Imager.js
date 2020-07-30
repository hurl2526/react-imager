import React, { Component } from 'react';

let imager = [
  { image: '/images/pic1.jpeg', id: '1' },
  { image: '/images/pic2.jpeg', id: '2' },
  { image: '/images/pic3.jpeg', id: '3' },
  { image: '/images/pic4.jpeg', id: '4' },
  { image: '/images/pic5.jpeg', id: '5' },
  { image: '/images/pic6.png', id: '6' },
  { image: '/images/pic7.jpeg', id: '7' },
  { image: '/images/pic8.jpeg', id: '8' },
  { image: '/images/pic9.jpeg', id: '9' },
  { image: '/images/pic10.png', id: '10' },
  { image: '/images/pic11.jpeg', id: '11' },
  { image: '/images/pic12.jpeg', id: '12' },
];
class Imager extends Component {
  state = {
    imager,
    image: '/images/pic1.jpeg',
    id: '1',
  };
  handleClickMe = (sentImage, sentID) => {
    // const updateImager = this.state.imager.filter((item)=>item.id === id);

    this.setState({ image: sentImage, id: sentID });
  };

  render() {
    return (
      <div
        style={{
          marginTop: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <div
          className='mainPic'
          style={{backgroundColor:'yellow'}}
        >
          <img
            key={this.state.id}
            style={{ height: '40em', display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '75%'}}
            className='bigImage'
            src={this.state.image}
            alt='...'
          />
        </div>
        <div className='randomArrows'></div>
        <div key='14' className='thumbs'>
        <div style={{ display: 'grid',
                gridGap: '50px 100px',
                gridTemplateColumns: 'auto auto auto',
                padding: '10px',listStyle: 'none' }}>
          {this.state.imager.map((thing, idx) => {
            const { id, image } = thing;
            return (
                <div
                  //key={blog.objectId} if not destructuring
                  key={id}
                >
                  <img
                    style={{ width: '8em', height: '8em' }}
                    className='img'
                    src={image}
                    alt='...'
                    onClick={() => {
                      this.handleClickMe(thing.image, thing.id);
                    }}
                  />
                </div>
            );
          })}
          </div>
        </div>
      </div>
    );
  }
}

export default Imager;
