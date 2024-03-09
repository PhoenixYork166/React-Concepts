import classes from './Display.module.css';

const Display = ( {screen} ) => {
    return(
            <textarea 
            className={`display ${classes.displayBox}`}
            value={screen}
            />        
    )
}

export default Display;