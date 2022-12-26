import Item from "../Item/Item"
import { useState } from "react"
import items from "../../data/items"
import styles from "./style.module.css"
import ClpNumberFormat from "../../utils/ClpNumberFormat"
const ListItems = () => {
    const [cart, setCart] = useState({
        items: []
    })
    const [total, setTotal] = useState(0)


    return (
        <div className={styles.container}>
            <div className={styles.items}>
                {items.map(item => <Item
                    key={item.id}
                    item={item}
                    cart={cart}
                    setCart={setCart}
                    total={total}
                    setTotal={setTotal}
                />)}
                <div >
                    <h1>Total:{ ClpNumberFormat(total) }</h1>
                </div>
            </div>

        </div>
    )
}

export default ListItems