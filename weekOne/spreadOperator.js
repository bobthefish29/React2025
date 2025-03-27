let tempObject = {
    funk : "time",
    funny : false,
    objectTw0: {
        temp : "space"
    }

}

let tempObjecttw0 = {
    funk : "fish",
    objectTw0: {
        temp : "space"
    }

}



let combined = {...tempObject, ...tempObjecttw0}

// in this example, combined will be the same but "funk" will be "fish", combined will also have the funny key


const color = ["black", "red"];

const all = ["red", "pink",...color];
// here is will take all the colors and make it [red, pink, black, red] NOT [red, pink, [black,red]]