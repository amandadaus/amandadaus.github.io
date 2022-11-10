import './button.scss';

export interface buttonProps {
    buttonText: string;
}

function Button(props: buttonProps) {
    return (
        <div>
            <button className="add-to-cart">{props.buttonText}</button>
        </div>
    )

}

export default Button;