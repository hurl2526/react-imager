import React, { Component } from 'react';

let imager = [
  { image: '/images/pic1.jpeg', id: '0' },
  { image: '/images/pic2.jpeg', id: '1' },
  { image: '/images/pic3.jpeg', id: '2' },
  { image: '/images/pic4.jpeg', id: '3' },
  { image: '/images/pic5.jpeg', id: '4' },
  { image: '/images/pic6.png', id: '5' },
  { image: '/images/pic7.jpeg', id: '6' },
  { image: '/images/pic8.jpeg', id: '7' },
  { image: '/images/pic9.jpeg', id: '8' },
  { image: '/images/pic10.png', id: '9' },
  { image: '/images/pic11.jpeg', id: '10' },
  { image: '/images/pic12.jpeg', id: '11' },
];
class Imager extends Component {
  state = {
    imager,
    id: 3,
  };
  handleClickMe = (sentIdx) => {
    // const updateImager = this.state.imager.filter((item)=>item.id === id);

    this.setState({id: sentIdx });
  };
  handleClickRight = (sentID) => {
    this.setState({
      id: sentID === 11 ? this.state.id = 0 :   sentID+1
    });
  };
  handleClickRandom = (sentID) => {
    this.setState({
        id : sentID
  })
}

  handleClickLeft = (sentID) => {
    // const left = this.state.imager.filter((item)=>item.id === (sentID-1));
    // console.log(left)
    // this.setState({id:left.id});
    // console.log(this.state)
    this.setState({
      // image: `/images/pic${sentID.toNumber.toString}`,
      id: sentID === 0 ? this.state.id = 11 :   sentID-1
    });
    console.log(this.state);
  };
  render() {
    return (
      <div
        style={{
          marginTop: '100px',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <h1>IMAGER</h1>
        <div className='mainPic'>
          <img
            key={this.state.id}
            style={{
              height: '40em',
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '100%',
            }}
            className='bigImage'
            src={this.state.imager[this.state.id].image}
            

            alt='...'
          />
        </div>

        <div
          className='randomArrows'
          style={{
            marginTop: '2em',
            marginBottom: '2em',
            width: '55%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <button
            className='ui primary button'
            style={{ margin: '10px 15px', marginRight: '50%' }}
            // onClick={this.handleClickMe}
            onClick={() => {
              this.handleClickRandom(Math.ceil(Math.random()*11));
            }}
          >
            Random
          </button>
          <button
            className='ui primary button'
            style={{ margin: '10px 15px' }}
            // onClick={this.handleClickMe}
            onClick={() => {
              this.handleClickLeft(this.state.id);
            }}
          >
            Left
          </button>
          <button
            className='ui primary button'
            style={{ margin: '10px 15px' }}
            // onClick={this.handleClickMe}
            onClick={() => {
              this.handleClickRight((this.state.id)
              );
            }}
          >
            Right
          </button>
        </div>

        <div key='14' className='thumbs'>
          <div
            style={{
              display: 'grid',
              gridGap: '50px 100px',
              gridTemplateColumns: 'auto auto auto auto',
              padding: '10px',
              listStyle: 'none',
            }}
          >
            {this.state.imager.map((thing, idx) => {
              const {image } = thing;
              return (
                <div
                  //key={blog.objectId} if not destructuring
                  key={idx}
                >
                  <img
                    style={{ width: '8em', height: '8em' }}
                    className='img'
                    src={image}
                    alt='...'
                    onClick={() => {
                      this.handleClickMe(idx);
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
