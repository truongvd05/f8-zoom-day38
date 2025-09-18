import useToggle from "../../../../Hooks/useToggle";

import style from './UseToggle.module.scss'

function UseToggle() {
  const [isVisible, toggleVisible, setVisible] = useToggle(false);
  return (
    <div className={style.container}>
      <button onClick={toggleVisible}>
        {isVisible ? 'Hide' : 'Show'} Content
      </button>
      <button onClick={() => setVisible(true)}>Force Show</button>
      
      {isVisible && <div>This content can be toggled!</div>}
    </div>
  );
}

export default UseToggle;