import { Fragment } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Profissionais () {
    return (
        <Fragment>
            <Navbar />
            <Header title="Profissionais" />
            <Footer />
        </Fragment>
    )
}