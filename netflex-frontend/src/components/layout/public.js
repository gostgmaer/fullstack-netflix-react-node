
const Publiclayout = ({ Children }) => {
    return (
        <div>
            <div> <header></header>
                <main>
                    {Children}
                </main>
                
                </div>
            <footer></footer>

        </div>
    )
}

export default Publiclayout