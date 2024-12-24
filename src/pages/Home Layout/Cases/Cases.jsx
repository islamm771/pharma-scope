import React from 'react'
import "./Cases.css"
import ArticleCard from '../../../components/ArticleCard/ArticleCard'
import { Outlet } from 'react-router-dom'
const Cases = () => {
    return (
        <>
            <div className="heading text-center">
                <p className="mb-2"><b>Latest News</b></p>
                <h3>Pharmaceutical <span>Articles</span></h3>
                <span>March3 ,2024 |By Pharma Scope</span>
            </div>

            <div className="container">
                <main className="main-cases row pt-5 pb-5">
                    <div className="col-lg-8">
                        <header className="mb-5 position-relative">
                            <div className="description">
                                <button>Pharmacology</button>
                                <p className="mb-3 title">
                                    A person died in Egypt as a result of receiving Hitler's
                                    injection
                                </p>
                                <p className="about-desc">
                                    A person died in Egypt as a result of receiving what is known as
                                    the Hitler injection, an injection used to quickly treat colds
                                    and influenza. These are used...
                                </p>
                            </div>
                        </header>
                        <ArticleCard img={"/img/article-01.png"} />
                        <ArticleCard img={"/img/article-02.png"} />
                        <ArticleCard img={"/img/article-03.png"} />
                    </div>
                    <aside className="col-lg-4"></aside>
                </main>
            </div>

        </>
    )
}

export default Cases