import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: "Social Micro-Blog",
    description: "A Place to Share Your Ideas"     
}


const RootLayout = ({ children }) => {
  return (
    <html>
        <head>         
            <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png"/>
            <link rel="manifest" href="/assets/favicon/site.webmanifest"/>
            <link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
            <meta name="msapplication-TileColor" content="#2b5797"/>
            <meta name="theme-color" content="#ffffff"></meta>
        </head>

        <body>
            <Provider>
                <div className='main'>
                    <div className='gradient'></div>
                </div>

                <main className='app'> 
                <Nav />
                    { children }
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout