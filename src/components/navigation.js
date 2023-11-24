import React from "react";

export const Navigation = (props) => {
    return (
        <nav id="menu" className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button
                        type="button"
                        className="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1"
                    >
                        {" "}
                        <span className="sr-only">Toggle navigation</span>{" "}
                        <span className="icon-bar"></span>{" "}
                        <span className="icon-bar"></span>{" "}
                        <span className="icon-bar"></span>{" "}
                    </button>
                    <a className="navbar-brand page-scroll" href="#page-top">
                        MEDITACIJOS NEKTARAS
                    </a>{" "}
                </div>

                <div
                    className="collapse navbar-collapse"
                    id="bs-example-navbar-collapse-1"
                >
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="#features" className="page-scroll">
                                Savybės
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="page-scroll">
                                Apie Mus
                            </a>
                        </li>
                        {/*<li>*/}
                        {/*    <a href="#services" className="page-scroll">*/}
                        {/*        Services*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <a href="#portfolio" className="page-scroll">*/}
                        {/*        Gallery*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                        <li>
                            <a href="#testimonials" className="page-scroll">
                                Atsiliepimai
                            </a>
                        </li>
                        <li>
                            <a href="#team" className="page-scroll">
                                Komanda
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="page-scroll">
                                Kontaktai
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
