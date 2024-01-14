
//Remember PascalCasing
function Message()
{
    //JSX - Javascript XML

    const name = 'Leigh-Ann'
    if (name)
        return <h1> Hello World , my name is {name}</h1>
    return <h1> Hello  </h1>;
    
    //You can pass a function to the return
   // return <h1> Hello {getName()} </h1>
}


export default Message;