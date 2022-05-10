import './item.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Item ({item}) {
    return (
      
      <div className="card">
        <div className="header">{item.title}</div>

        <div className="content">
          <div className="img-container">
            <img className="imagen" src={item.image} alt="imagen" />
          </div>
          <Link to={'/item/' + item?.id} className='detalle-item'>
            
          <button type="button" class="btn btn-secondary boton" >Descripción</button>
 
            
          </Link>
        </div>

        <div className="footer">{item.precio}</div>
      </div>
    );
}

export default Item