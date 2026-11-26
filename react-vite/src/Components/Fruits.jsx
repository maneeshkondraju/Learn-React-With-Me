function Fruits(){

let fruitsList=[
    'apple','banana','pineapple','litchi','grapes','dragon fruit','mango'
];
let eNames=[
    'sam','ram','tom','ben'
]
return(
    <>
    <ul>
        {
            fruitsList.map((ele,ind,arrRef)=> 
                <li key={ind}>
                    <h1>{ele}</h1>
                    <p>you are buying {ele}</p>
                </li>
            )
        }
    
    </ul>
    <hr/>
    {
       eNames.map((ele,ind) => {
        return (
            <>
            <p>Hii</p>
            <h5>Welcome {ele}</h5>
            <button className='btn btn-dark'>Contact</button>
            </>
        )
       }) 
    }
    </>
);
}
export default Fruits;

