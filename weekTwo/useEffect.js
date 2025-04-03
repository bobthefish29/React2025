function example(){
    const [count, setCount] = useState(0);


    useEffect(()=>{

        document.title = "You clicked ${ count }"


    })
}


// this runs on the render, every render
useEffect(()=>{});

// this will run when the first mount
useEffect(()=>{} , []);

// this will run when the property changers, so when the values changes
useEffect(()=>{} , [someStateValue, prompt.name]);

//this will run when the component is distroyed, or eneded
useEffect(()=>{

    return () => {
        someSubscription.unsub();
    }
}, [someStateValue, props.name]);