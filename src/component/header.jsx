function Header ({title, type}) {
    return(
        <div className="heading" >
            <h2 className="title" >{title}</h2>
            <h2 className="type" > {type}</h2>
        </div>

    );

}

 export default Header;