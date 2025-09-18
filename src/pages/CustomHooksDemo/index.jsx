import useToggle from "../../Hooks/useToggle";
import PostSection from "./component/PostSection";
import UseApi from "./component/UseApi";
import UserSection from "./component/UserSection";
import UseToggle from "./component/UseToggle";

import style from './CustomHooksDemo.module.scss'
function CustomHooksDemo() {
    const [isVisible, toggleVisible, setVisible] = useToggle(false);
    return (
            <div>
                <button onClick={toggleVisible}>toggle theme</button>
                <div className={`${style.wrap} ${isVisible ? style.black : style.white}`}>
                    <div className={style.use}>
                        <UseApi/>
                        <UseToggle/>
                    </div>
                    <div className={style.section}>
                        <PostSection/>
                        <UserSection/>
                    </div>
                </div>
            </div>
    );
}

export default CustomHooksDemo;