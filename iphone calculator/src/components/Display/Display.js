import classes from './Display.module.css';

const Display = ( {screen} ) => {
    return(
            <div 
            className={`display ${classes.displayBox}`}
            >
              {screen}
            </div>
        
    )
}

export default Display;