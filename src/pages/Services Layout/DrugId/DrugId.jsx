import React from 'react'
import "./DrugId.css"

const DrugId = () => {
    return (
        <article className='drug-id'>
            <header>
                <div>
                    <p>Discover</p>
                    <h1>Drug i.d.</h1>
                    <p>Some active ingredients are negatively affected by
                        your food. Check forbidden food.</p>
                </div>
            </header>
            <div className="middle">
                <section className="form-cont">
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab"
                            role="tablist">
                            <button className="nav-link active"
                                id="nav-home-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-home" type="button"
                                role="tab" aria-controls="nav-home"
                                aria-selected="true">Description</button>
                            <button className="nav-link" id="nav-profile-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-profile" type="button"
                                role="tab" aria-controls="nav-profile"
                                aria-selected="false">Image</button>

                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active mt-3"
                            id="nav-home" role="tabpanel"
                            aria-labelledby="nav-home-tab">
                            <h6>Pill Imprint</h6>
                            <form>
                                <input type="text"
                                    placeholder="Enter Pill Imprint" />
                                <div className="d-flex mb-4 gap-3 gap-lg-4">
                                    <section
                                        className="color-cont position-relative">
                                        <h6>Color</h6>
                                        <select className="form-select"
                                            aria-label="Default select example">
                                            <option selected>Select
                                                Color</option>
                                            <option value="red">Red</option>
                                            <option
                                                value="green">Green</option>
                                            <option
                                                value="blue">Blue</option>
                                        </select>
                                        <span className="color"></span>
                                    </section>
                                    <section
                                        className="shape-cont position-relative">
                                        <h6>Shape</h6>
                                        <select className="form-select"
                                            aria-label="Default select example">
                                            <option selected>Select
                                                Shape</option>
                                            <option
                                                value="rounded">Rounded</option>
                                        </select>
                                        <span className="color"></span>
                                    </section>
                                </div>
                                <div>
                                    <button type="submit">View
                                        Result</button>
                                    <span className="results">0</span>
                                </div>
                            </form>
                        </div>

                        <div className="tab-pane fade mt-3" id="nav-profile"
                            role="tabpanel"
                            aria-labelledby="nav-profile-tab">
                            <form>
                                <div>
                                    <label className='upload' htmlFor="file">
                                        Upload Image
                                    </label>
                                    <input type="file" id="file" name="file"
                                        accept="image/*"
                                        style={{ display: "none" }} />
                                </div>

                                <div className="position-relative mt-5">
                                    <hr />
                                    <span className="or">Or</span>
                                    <div id="drop_zone"
                                    // onDrop="dropHandler(event);"
                                    // ondragover="dragOverHandler(event);"
                                    >
                                        <p className="drag-zone">Drag one or
                                            more files to this <i>drop
                                                zone</i>.</p>
                                    </div>
                                </div>

                                <div>
                                    <button type="submit">View
                                        Result</button>
                                    <span className="results">0</span>
                                </div>
                            </form>
                        </div>

                    </div>
                </section>
                <section className="guide">
                    <h6 className="text-center">HOW TO USE ?</h6>
                    <ul>
                        <li>Write down any typing on the drug.</li>
                        <li>Select the drug from the list.</li>
                        <li>Let the <span>magic works!</span></li>
                    </ul>
                </section>
            </div>
            <div className="result">

            </div>
        </article>
    )
}

export default DrugId