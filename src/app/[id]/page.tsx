const DynamicResource = async (props:any) => {
    const url = await fetch(`https://jsonplaceholder.typicode.com/comments/${props.params.id}`)
    const response = await url.json()
    console.log(response);

    return (
        <div>
            <h1 className="text-3xl">
                {props.params.id} <br /> <br />
                {response.email} <br /> <br />
                {response.body}
            </h1>
        </div>
    )
}
export default DynamicResource;