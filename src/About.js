import React from 'react'
import {Helmet} from "react-helmet";
export default function About() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About</title>
                <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
                <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
                <meta property="og:site_name" content="Paractice" />
                <meta property="og:title" content="About" />
                <meta property="og:description" content="This is about page" />
                <meta property="og:image" itemprop="image" content="https://www.incrediblesnaps.com/wp-content/uploads/2013/08/25-beautiful-love-birds-pictures-3.jpg" />
                <meta property="og:type" content="website" />
                <meta property="og:updated_time" content="1440432930" />
            </Helmet>
            Thsi is about component
        </div>
    )
}
