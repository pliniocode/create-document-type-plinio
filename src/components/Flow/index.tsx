import { BackButton, SFlowContainer, SaveButton } from "./styles"


export function Flow() {
    const url = "https://www.epaper.com/configuracoes/tipos-de-documentos/novo-tipo-de-documento"

    const links = url
        .slice(url.indexOf('.com'))
        .split('/')
        .slice(1, )

    // const home = url.slice(0, url.indexOf('.com'));

    return (
        <SFlowContainer>
            <nav>
            {links.map((link, index) => {
                if (link.length <= 0)
                return null

                const linkText = link
                    .split('-')
                    .map(str => str.charAt(0).toUpperCase() + str.slice(1))
                    .join(' ')
                const linkUrl = url.slice(0, url.indexOf(link) + link.length)
                const isLastLink = links[index + 1] != undefined ? false : true

                return (
                <div key={linkText}>
                    <a href={linkUrl}>{linkText}</a>
                    {!isLastLink && <span> &gt; </span>}
                </div>
                );
            })}
            </nav>
            
            <div className="btns-flow">
                <BackButton>Voltar</BackButton>
                <SaveButton type="submit" form="data-form">Salvar Documento</SaveButton>
            </div>
        </SFlowContainer>
    )
}

