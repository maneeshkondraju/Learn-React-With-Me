function Nav(){

    let navbar={
        backgroundColor:'green',
        height:'50px',
        width:'100%'
    }
    let brand={
        fontSize:'20px',
        fontWeight:'bold',
        color:'orange'
    }
    return(
        <>
        <nav style={navbar}>
            <h1 style={brand}>Navbar</h1>
        </nav>
        </>
    )
}
export default Nav;

