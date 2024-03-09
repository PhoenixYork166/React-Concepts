import classes from './Button.module.css';

function Button({value, handler}) {

    const specialOperations = value === 'C' || value === '+/-' || value === '%';
    const handlerOperations = value === "÷" || value === 'x' || value === '-' || value === '+';
    const zeroButton = value === '0';
    const dotButton = value === '.';
    const equalButton = value === '=';

    return (
        <div className={`${classes.buttons}`}>
            <button 
                onClick={()=>handler(value)}
                className={
                    specialOperations ? 
                        `${classes.specialStyle}` : handlerOperations ? `${classes.handlerStyle}` : zeroButton ? `${classes.zeroStyle}` : dotButton? `${classes.dotStyle}` : equalButton? `${classes.equalStyle}` : `${classes.buttonStyle}`
                }
            >
                {value}
            </button>
        </div>
    )
}

export default Button;