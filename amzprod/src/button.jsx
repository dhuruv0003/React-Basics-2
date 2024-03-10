function dosomething()
{
    console.log("button was clicked");
}
function donothing(){
    console.log("no para was clocked");
}
export default function Button(){   
    return (
        <div>
            <button onClick={dosomething}>Click me!!</button>
            <p onClick={donothing}>Hello</p>
        </div>
    );
}