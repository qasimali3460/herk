import React from 'react'
import {Helmet} from "react-helmet";

export default function Contact() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact</title>
                <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
                <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
                <meta property="og:site_name" content="Paractice" />
                <meta property="og:title" content="Contact" />
                <meta property="og:description" content="This is contact page" />
                <meta property="og:image" itemprop="image" content="https://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-14-640x360.jpg" />
                <meta property="og:type" content="website" />
                <meta property="og:updated_time" content="1440432930" />
            </Helmet>
            This is Contact Page
        </div>
    )
}
