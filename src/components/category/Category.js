import './category.scss';
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';

const Category=()=>{
    return(
        <div className="d-flex flex-wrap justify-content-around parent">
            <div className='child'>
                <img src={require('../../images/digijet.png')} className="category-item" />
                <br/>
                <span className="small">دیجی کالا جت</span>
            </div>
            <div className='child'>
                <img src={require('../../images/digistyle.png')} className="category-item" />
                <br/>
                <span className="small">دیجی استایل </span>
            </div>
            <div className='child'>
                <img src={require('../../images/digipay.png')} className="category-item" />
                <br/>
                <span className="small">دیجی پی </span>
            </div>
            <div className='child'>
                <img src={require('../../images/digimehr.png')} className="category-item" />
                <br/>
                <span className="small">دیجی کالا مهر </span>
            </div>
            <div className='child'>
                <img src={require('../../images/mamoriat.png')} className="category-item" />
                <br/>
                <span className="small">ماموریت ها </span>

            </div>
            <div className='child'>
                <img src={require('../../images/app.png')} className="category-item" />
                <br/>
                <span className="small">آپ شنبه </span>

            </div>
            <div className='child'>
                <img src={require('../../images/plus.png')} className="category-item" />
                <br/>
                <span className="small">دیجی پلاس </span>

            </div>
            <div className='child'>
                <img src={require('../../images/more.png')} className="category-item" />
                <br/>
                <span className="small">بیشتر </span>
            </div>
        </div>
    )
}

export default Category;