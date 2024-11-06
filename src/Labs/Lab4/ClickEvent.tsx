const ClickEvent = () => {
    const hello = () => {
        alert("Hello World!");
    }
    const lifeIs = (good: string) => {
        alert(`Life is ${good}`)
    }
    return(
        <div className="wd-click-event">
            <h2>Click Event</h2>
            <button id ="wd-hello-world-click" onClick = {hello}>Hello World!</button>
            <button id = "wd-life-is-good-click" onClick = {()=>lifeIs("Good!")}>Life is Good!</button>
            <button id = "wd-life-is-great-click" onClick = {() =>{hello(); lifeIs("Great!")}}>Life is Great!</button>
            <hr/>
        </div>
    );
}

export default ClickEvent;