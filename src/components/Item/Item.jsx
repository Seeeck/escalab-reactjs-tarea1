import { useEffect, useState } from "react"
import styles from "./style.module.css"
import { IoCheckmarkSharp } from "react-icons/io5";
import ClpNumberFormat from "../../utils/ClpNumberFormat";
const Item = ({
    cart = {},
    setCart,
    item,
    total,
    setTotal
}) => {

    const [price, setPrice] = useState(0)
    const [inputValue, setInputValue] = useState("")
    const onChange = (e) => {

        if (e.target.value > 0 && e.target.value <= 100) {
            if (cart?.items?.some((itemCart, index) => {
                setInputValue(e.target.value)
                if (itemCart.id == item.id) {
                    let cartV = cart?.items
                    cartV[index].units = e.target.value
                    setCart({ ...cart, items: cartV })
                    setTotal((total - price) + item.price * e.target.value)
                    setPrice(item.price * e.target.value)
                    return true
                }
            })) {
            } else {
                setInputValue(e.target.value)
                setTotal((total - price) + item.price * e.target.value)
                setPrice(item.price * e.target.value)
                setCart({ ...cart, items: [...cart.items, { id: item.id, units: e.target.value }] })
            }
        }
        if (e.target.value.trim() == "") {
            setInputValue(e.target.value)
            setTotal((total - price) + 0)
            setPrice(0)
            setCart({ ...cart, items: cart?.items?.filter(itemCart => itemCart?.id !== item.id) })
        }
    }
    return (
        <>
            <div className={styles.item}>
                <div >
                    <div  className={styles.itemName}>


                        <IoCheckmarkSharp color="green" fontSize={"30px"} />
                        <h2 >
                            {item.name}
                        </h2>
                    </div>
                    <p>Precio por unidad: {ClpNumberFormat(item.price)}</p>
                </div>


                <div>
                    <h3>Cantidad:</h3>

                    <input type="number" value={inputValue} onChange={onChange} />
                    <h3>Precio total:{ClpNumberFormat(price)}</h3>
                </div>

            </div>
        </>
    )
}

export default Item