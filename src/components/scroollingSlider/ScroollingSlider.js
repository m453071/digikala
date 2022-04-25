import { MoreHorizOutlined, MoreRounded } from '@mui/icons-material';
import { Button } from '@mui/material';
import { Badge } from 'react-bootstrap';
import './scroolingSlider.scss';
const ScroollingSlider=()=>{
        return(
            <>
            <div className="scrolling-wrapper">
                <div className="card" style={{backgroundColor:"transparent"}}>
                    <p>logo</p>
                    <br/>
                    <img src={require('../../images/General.png')} />
                    <br/>
                    <Button variant="contained" color="success">
                    Success
                    </Button>
                </div>
                <div className="card">
                    <div className="d-flex flex-column">
                        <div className='img-card'>
                            <img src={require('../../images/slider/1.jpg')} className="object-cover w-100 h-100" />
                        </div>
                        <div className='d-flex p-2 justify-content-between flex-growth-1 align-items-center text-mute'>
                            <Badge bg="danger">15%</Badge>
                            <span>145000 تومان</span>
                        </div>
                        <div className='m-auto p-2'>
                            <Badge text='light'>145000 تومان</Badge>
                        </div>
                    </div>
                </div> <div className="card">
                    <div className="d-flex flex-column">
                        <div className='img-card'>
                            <img src={require('../../images/slider/1.jpg')} className="object-cover w-100 h-100" />
                        </div>
                        <div className='d-flex p-2 justify-content-between flex-growth-1 align-items-center text-mute'>
                            <Badge bg="danger">15%</Badge>
                            <span>145000 تومان</span>
                        </div>
                        <div className='m-auto p-2'>
                            <Badge text='light'>145000 تومان</Badge>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="d-flex flex-column">
                        <div className='img-card'>
                            <img src={require('../../images/slider/2.jpg')} className="object-cover w-100 h-100" />
                        </div>
                        <div className='d-flex p-2 justify-content-between flex-growth-1 align-items-center text-mute'>
                            <Badge bg="danger">15%</Badge>
                            <span>145000 تومان</span>
                        </div>
                        <div className='m-auto p-2'>
                            <Badge text='light'>145000 تومان</Badge>
                        </div>
                    </div>
                </div> 
                <div className="card">
                    <div className="d-flex flex-column">
                        <div className='img-card'>
                            <img src={require('../../images/slider/3.jpg')} className="object-cover w-100 h-100" />
                        </div>
                        <div className='d-flex p-2 justify-content-between flex-growth-1 align-items-center text-mute'>
                            <Badge bg="danger">15%</Badge>
                            <span>145000 تومان</span>
                        </div>
                        <div className='m-auto p-2'>
                            <Badge text='light'>145000 تومان</Badge>
                        </div>
                    </div>
                </div> 
                <div className="card">
                    <div className="d-flex flex-column">
                        <div className='img-card'>
                            <img src={require('../../images/slider/4.jpg')} className="object-cover w-100 h-100" />
                        </div>
                        <div className='d-flex p-2 justify-content-between flex-growth-1 align-items-center text-mute'>
                            <Badge bg="danger">15%</Badge>
                            <span>145000 تومان</span>
                        </div>
                        <div className='m-auto p-2'>
                            <Badge text='light'>145000 تومان</Badge>
                        </div>
                    </div>
                </div> 
                <div className="card">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <div >
                            <MoreHorizOutlined  height="36px"></MoreHorizOutlined>
                        </div>
                        
                        <div>
                           بیشتر
                        </div>
                    </div>
                </div>
               
            </div>

            <div className='row bg-light m-5 p-3 shadow-sm rounded'>
                <div className='col-12 col-lg-3 d-flex align-items-center justify-content-between'>
                        <span>شگفت انگیز سوپرمارکتی</span>
                        <Badge bg="success" >تا 32% تخفیف</Badge>
                </div>
                <div className='col-12 col-lg-9'>
                    <div className='d-flex align-items-center justify-content-center'>
                        <div className='item-sugess d-flex align-items-center justify-content-center rounded-circle'>
                            <img src={require('../../images/digijet.png')} width="30px" />
                        </div> 
                        <div className='item-sugess d-flex align-items-center justify-content-center rounded-circle'>
                            <img src={require('../../images/digijet.png')} width="30px" />
                        </div> 
                        <div className='item-sugess d-flex align-items-center justify-content-center rounded-circle'>
                            <img src={require('../../images/digijet.png')} width="30px" />
                        </div> 
                        <div className='item-sugess d-flex align-items-center justify-content-center rounded-circle'>
                            <img src={require('../../images/digijet.png')} width="30px" />
                        </div>
                        
                    </div>
                </div>
            </div>
            </>
        );
}

export default ScroollingSlider;