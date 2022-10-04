import React, {useState} from 'react';
import style from './Quantity.module.scss'


const Quantity = ({cartQuantityStyle = false, buttonPadding = '0 25px'}) => {
    const [quantityValue, setQuantityValue] = useState(1);


    const plusQuantityValue = () => {
        setQuantityValue((prev) => prev + 1);
    };

    const minusQuantityValue = () => {
        if (quantityValue > 1) {
            setQuantityValue((prev) => prev - 1);
        }
    };

    const validateInput = (field: any) => {
        if (field === "0") {
            return;
        }
        setQuantityValue((prev: any) => (/\d+/.test(field) ? field : prev));
    };

    return (
        <div className={style.quantity}>
            <button style={{'padding': buttonPadding}} onClick={minusQuantityValue}>-</button>
            <input
                type="number"
                className={cartQuantityStyle ? style.cart_quantity_field : style.quantity_field}
                min={1}
                value={quantityValue}
                onChange={(e) => validateInput(e.target.value)}
            />
            <button style={{'padding': buttonPadding}} onClick={plusQuantityValue}>+</button>
        </div>
    );
};

export default Quantity;
