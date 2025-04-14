export const Button = (props) =>{}


export const Text = (props) =>{}


export const Box = (props) =>{


    return(
        <div className={`defult ${props.size}`}>
            This is a box with {props.size}
        </div>
    );
}
// <Box size="small" isRound={true}>Small box</Box>
// const Box = (props) => {
//   return <div className={`box ${props.size} ${props.isRound ? 'roundCorners':''} `}>{props.children}</div>;
// };

export const TotalItems = () =>{
    return(
        <>
            <Box size="large"></Box>
            <Box size="small"></Box>
            <Box size="mid"></Box>
        </>
    );

}