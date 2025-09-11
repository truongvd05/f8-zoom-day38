import { useState } from "react";
import Modal from "./Modal";

import style from './ModalDemo.module.scss'
import ModalBasic from "./components/ModalBasic";
import ModalAndAnimation from "./components/ModalAndAnimation";
import ModalisCloseOverlay from "./components/ModalisCloseOverlay";
import ModalisCloseEsc from "./components/ModalisCloseEsc";
import ModalCustom from "./components/ModalCustom";
import ModalCallback from "./components/ModalCallback";

function ModalDemo() {
    return (
        <div className={style.container}>
            <ModalBasic/>
            <ModalAndAnimation/>
            <ModalisCloseOverlay/>
            <ModalisCloseEsc/>
            <ModalCustom/>
            <ModalCallback/>
        </div>
    )
}

export default ModalDemo;