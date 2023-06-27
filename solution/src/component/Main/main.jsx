import './main.scss';
import { data } from '../../helper/data';

const Main = () => {

    return(
        <div className="card-container">
            {data.map((item) => {
                return(
                    <div className='cards'>
                        <h1>{item.title}</h1>
                        <img src={item.image} alt="" />
                    </div>
                )
            }
            )}
        </div>
    )
}

export default Main;
