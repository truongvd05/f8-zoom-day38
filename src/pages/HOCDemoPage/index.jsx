import { useState } from "react";
import ProductList from "../../HOC/components/ProductList";
import UserProfile from "../../HOC/components/UserProfile";

import style from './HOCDemopage.module.scss'

function HOCDemoPage() {
    const [userLoading, isUserLoading] = useState(false);
    const [productLoading, isProductLoading] = useState(false);
    return(
        <div className={style.container}>
            <div className={style.wrap}>
                <button onClick={() => isUserLoading(!userLoading)}>toggle loading UserProfile</button>
                <button onClick={() => isProductLoading(!productLoading)}>toggle loading ProductList</button>
            </div>
            <UserProfile isLoading={userLoading}/>
            <ProductList isLoading={productLoading}/>
        </div>
    )
}

export default HOCDemoPage;