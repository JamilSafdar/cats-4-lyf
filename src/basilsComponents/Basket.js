const Basket = ({basket}) =>{
    return(

        <div className = "basketWrapper">
            <div className = "paymentWrapper">
                <h2>This is a h2</h2>
                <p>Your total is: £</p>
                {basket.map((cat, index) => {
                    return(
                        <div className = "catsIN">
                            {cat.name}
                        </div>
                    )
                })
                    
                }
                
            </div>
        </div>
    );
}

export default Basket