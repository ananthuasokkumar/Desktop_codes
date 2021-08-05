function navbar() {
    
    return `<div id="navbar">
                <h3><a href="home.html">Home</a></h3>
                <input type="text" placeholder="Enter Search" id="searchFood"/>
                <button id="search" onclick="searchButton()">search</button>
                <div class="options">
                    <h3><a href="latest.html">Latest Recipie</a></h3>
                    <h3><a href="recipie.html">Recipie of the Day</a></h3>
                    <h3><a href="#">Register</a></h3>
                    <h3><a href="#">Login</a></h3>
                </div>
            </div>
            <div id=data></div>`
    
}



export { navbar };