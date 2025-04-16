import Box from "./components/Box";
import Button from "./components/Button";
import Text from "./components/Text";
// this is the whole conponent
export const MyAwesomeComponent = () =>{
    function makeFunOfYou(){
        alert("HAHAHA, You really though that was free RAM. I have your ip now.");
    }
    return(
        <Box size="boxLarge">
            <Text size="mediumText" color="red">Click this button to download FREE RAM</Text>
            <Button color="lightgreen" function={() => makeFunOfYou()} >Download</Button>
        </Box>
    );

}
