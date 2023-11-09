import React , {useContext} from 'react';
import { cardContext } from '../contextProvider/AddItemContextProvider';
import { FiTrash2 } from "react-icons/fi";
import { cutTitle } from '../helper/functions';
import styles from './CartProduct.module.css';

const CartProduct = ({data}) => {
    const { dispatch } = useContext(cardContext);
    return (
        <div className={styles.container}>
                <img src={data.image} alt='cartitem'/>
                <div>
                <h4>{cutTitle(data.title)}</h4> 
                <p>{data.price} $</p>
                </div>
                <div className={styles.quantity}>{data.quantity}</div>
            <div>
                <button  className={styles.pluseButton} onClick={()=>dispatch({type : "INCREASE" , payload : data})}>+</button>
                {data.quantity >1 ? <button className={styles.minusButton} onClick={()=>dispatch({type : "DECREASE" , payload : data})}>-</button> 
                : <button className={styles.trashButton} onClick={()=> dispatch({type: "REMOVE_ITEM" , payload:data})}><FiTrash2 /></button>}
            </div>
        </div>
    );
};

export default CartProduct;