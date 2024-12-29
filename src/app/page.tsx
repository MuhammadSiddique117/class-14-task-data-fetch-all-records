import Link from "next/link";
export default async function Home() {
  const url = await fetch('https://jsonplaceholder.typicode.com/comments')
  const response = await url.json()
  console.log(response);
  
  return (
     <div>
      {
        response.map((resource:any , index: number)=>(
          <div key={index}>
            <Link href={`${resource.id}`}>
            <h1 className="text-3xl">
            {resource.id} &nbsp; &nbsp;
            {resource.name}
            </h1>
            </Link>
          </div>
        ))
      }
     </div>
  );
}