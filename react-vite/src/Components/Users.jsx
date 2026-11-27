import react from 'react';


function Users(){
    let users = [
        {
            id:'js101',
            name:'sam',
            gender:'male',
            desgn:'react devloper'
        },
        {
            id:'js102',
            name:'ram',
            gender:'male',
            desgn:'full stack devloper'
        },
        {
            id:'js103',
            name:'jia',
            gender:'female',
            desgn:'mern stack devloper'
        },
        {
            id:'js104',
            name:'hari',
            gender:'male',
            desgn:'java full stack devloper'
        }
    ]
    return(
        <>
        <div>
            {
                Users.map((user)=> <Display key={user.id} user={user} />)
            }
            
        </div>
        </>
    )
}
export default Users;