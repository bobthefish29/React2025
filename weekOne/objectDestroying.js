let tempObject = {
    funk : "time",
    objectTw0: {
        temp : "space"
    }

}

// this is how its done
let { funk } = tempObject

// or you could do it like 
tempObject.funk

// they both give "time"


// you can also do 
let { temp } = tempObject.objectTw0

// this would be "space"

