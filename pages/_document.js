import Document, { Html, Main, NextScript, Head } from "next/document";

class MyDocument extends Document{
    render(){ 
        return(
            <Html lang="en">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    <div id="notifications"></div>
                </body>
            </Html>
        )
    }
}

export default MyDocument