function handleclick()
{
    console.log("button was clicked");
}
function handleover(){
    console.log("no para was cloiked");
}
function handledblclick(){
    console.log("you clicked twice");
}
export default function Button(){   
    return (
        <div>
            <button onClick={handleclick}>Click me!!</button>
            <p onMouseOver={handleover}>Hello Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias unde quis architecto error laudantium ratione maxime voluptates ad, est ducimus incidunt deleniti cupiditate ipsum veritatis provident tempora, perferendis fugit non!</p>
            <h1 onDoubleClick={handledblclick}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam molestiae debitis, nulla, numquam accusantium pariatur soluta ipsum unde expedita minima, voluptates incidunt. Cumque praesentium ullam explicabo reprehenderit eligendi itaque.</h1>
        </div>
    );
}