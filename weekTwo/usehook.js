// example of a useState,
// its a varuable with getters and setters

//SET is the most important part

function counter(){


    const [count, setCount] = useState();



    return
        <div>
            <p>You clicked {count}</p>
            <button onClick={()=>setCount(count + 1)}>Click me</button>
        </div>
}

