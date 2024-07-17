import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<div className='container-fluid vh-100 d-flex align-content-center justify-content-center bg-light'>
    <div className="card mt-5 text-center shadow-lg" style={{width: " 18rem", height: "33rem"}}>
        <img src="https://t4.ftcdn.net/jpg/03/00/94/69/360_F_300946931_kSR84OqudEhsmBZH47HU6ud7aZIDMjEx.jpg"
             className="card-img-top" style={{width: "auto", height: "16rem"}} alt="..."/>
        <img
            className="avatar"
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="avatar"
        />
        <div className="card-body py-0">
            <h5 className="card-title">Ruma Khan</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
            <a href="#" className="btn btn-primary">Follow</a>
        </div>
    </div>
</div>);
