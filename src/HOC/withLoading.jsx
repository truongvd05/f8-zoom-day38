import style from './withLoading.module.scss'

function withLoading(Components) {
    return function WithLoadingComponent({isLoading, ... props}) {
        if(isLoading) {
            return (
            <div className={style.container}>
                <span className={style.loader} style={{"--delay": "0s"}}>L</span>
                <span className={style.loader} style={{"--delay": "0.2s"}}>O</span>
                <span className={style.loader} style={{"--delay": "0.4s"}}>A</span>
                <span className={style.loader} style={{"--delay": "0.6s"}}>D</span>
                <span className={style.loader} style={{"--delay": "0.8s"}}>E</span>
                <span className={style.loader} style={{"--delay": "1s"}}>R</span>
            </div>
            )
        }
        return <Components {...props} />
    };
}

export default withLoading;