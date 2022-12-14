import './ItemList.css'
import { Item } from '../Item/Item';

export const ItemList = ({items, otraPropiedad}) => {
    return (
        <div className='products'>
        <div className='listado'>item list</div>
            {
                items.map(producto => (
                    <Item key={producto.id} item={producto} />
                ))
            }
        </div>
    );
}