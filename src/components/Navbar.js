import React from 'react'

const Navbar=({libraryStatus,setLibraryStatus})=> {
    return (
        <nav>
            <h1>Local Music</h1>
            <button onClick={()=>setLibraryStatus(!libraryStatus)}>
                Songs Library
            </button>
        </nav>
    )
}

export default Navbar
