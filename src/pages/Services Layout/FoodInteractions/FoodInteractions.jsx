import React from 'react'
import "./FoodInteractions.css"

const FoodInteractions = () => {
    return (
        <article className='food-interactions'>
            <header>
                <div>
                    <p>Discover</p>
                    <h1>FOOD Interactions</h1>
                    <p>Some active ingredients are negatively affected by
                        your food. Check forbidden food.</p>
                </div>
            </header>
            <div className="middle">
                <section>
                    <h6>ADD DRUGS TO CHECK FOR INTERACTIONS</h6>
                    <form action="">
                        <input list="brow" placeholder="Enter Drugs" />
                        <datalist id="brow">
                            <option value="Internet Explorer" />
                            <option value="Firefox" />
                            <option value="Chrome" />
                            <option value="Opera" />
                            <option value="Safari" />
                        </datalist>
                        <div>
                            <button type="submit">View Result</button>
                            <span>0</span>
                        </div>
                    </form>
                </section>
                <section>
                    <h6 className="text-center">HOW TO USE?</h6>
                    <ul>
                        <li>Write down any type on the drug.</li>
                        <li>Select the drug from the list.</li>
                        <li>
                            Let the <span>magic works!</span>
                        </li>
                    </ul>
                </section>
            </div>

            <div className="result">

            </div>
        </article>
    )
}

export default FoodInteractions