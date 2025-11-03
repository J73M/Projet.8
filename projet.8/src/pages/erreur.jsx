export default function ErrorPage(){
return(
    <>
        <main className="error-page">
        <div className="content-container">
            <h1 className="error-code">404</h1>
            <p className="error-text">Oups! La page que <br className="mobile-break" />vous demandez n'existe pas.</p>
            <a href="/" className="error-link">Retourner sur la page d'accueil</a>
        </div>
        </main>
    </>
)
}