const PassingDataOnEvent = () => {
    const add = (a: number, b: number) =>{
        alert(`${a} + ${b} = ${a+b}`);
    }
    return(
        <div id = "wd-passing-data-on-event">
            <button className = "btn btn-primary" id = "wd-pass-data-click" onClick = {() => add(2,3)}>Pass 2 and 3 to add()</button>
            <hr/>
        </div>
    );
}

export default PassingDataOnEvent;