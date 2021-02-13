const Square = props => {

    return (
        <div style={{height: '100px', width: '100px', border: '4px black solid'}} onClick={props.onClick}>
            <h1 style={{fontSize: '80px', fontWeight: 'bolder', color: 'black', margin: '0'}}>{props.value}</h1>
        </div>
    );
}
export default Square