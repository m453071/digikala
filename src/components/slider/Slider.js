import Image1 from '../../images/3.jpg';
import Image2 from '../../images/2.jpg';
import Image3 from '../../images/4.jpg';
import { Carousel } from 'react-bootstrap';
import { useState } from 'react';

const Slider=()=> {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <Carousel activeIndex={index}  onSelect={handleSelect}>
            <Carousel.Item>
            <img
                className="d-block w-100" style={{ objectFit:'cover' }}
                src={Image1}
                alt="First slide"
                height="250px"
                
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100" style={{ objectFit:'cover' }}
                src={Image2}
                alt="Second slide"
                height="250px"
            />
    
            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100" style={{ objectFit:'cover' }}
                src={Image3}
                alt="Third slide"
                height="250px"
            />
    
            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
  }
  
export default Slider;