function Article(props){
    return (<>
        <article>
            <PlusMinus section="article" handle={props.handle}/>  {/* pass a props of handle onto the article comp */}
            <div className="section">Name of section: Article:{props.data.article}</div>
            <Data data={props.data}/>  {/* data is passed in thru props */}
        </article>
    </>);
}