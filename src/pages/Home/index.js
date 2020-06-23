import React, {useState, useEffect} from 'react';
import qs from 'qs';

// import { Wrapper, Card, Templates, Form, Button } from '../../styles/global';
// import logo from '../../assets/logo.svg';
import memeguy from '../../assets/memeguy.png';

export default function Home() {
    const [templates, setTemplates] = useState([]);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [boxes, setBoxes] = useState([]);
    const [generatedMeme, setGeneratedMeme] = useState(null);

    useEffect(() => {
        (async() => {
            const resp = await fetch('https://api.imgflip.com/get_memes');
            const { data: {memes} } = await resp.json();
            setTemplates(memes);
        })();
    }, [])

    const handleInputChange = (index) => (e) => {
        const newValues = boxes;
        newValues[index] = e.target.value;
        setBoxes(newValues);
    }

    async function handleSubmit(e){
        e.preventDefault();

        const params = qs.stringify({
            template_id: selectedTemplate.id,
            username: 'vikayel543',
            password: 'vikayel543',
            boxes: boxes.map(text => ({ text }))
        });

        const resp = await fetch(`https://api.imgflip.com/caption_image?${params}`);
        const { data: { url }} = await resp.json();
        setGeneratedMeme(url);
    }

    function handleSelectTemplate(template) {
        setSelectedTemplate(template);
        setBoxes([]);
    }

    function handleReset(){
        setSelectedTemplate(null);
        setBoxes([]);
        setGeneratedMeme(null);
    }

    return(
        <div className="Wrapper">
            <img src={memeguy} alt="MemeGuy" width="180"/>
            <h1>The Meme Guy</h1>

            <div className="Card">

                {generatedMeme && (
                    <>
                        <img src={generatedMeme} alt="Generated meme"/>
                        <button className="Button" type="button" onClick={handleReset}>
                            Criar outro meme
                        </button>
                    </>
                )}

                {!generatedMeme && (
                    <>
                    <h2>Selecione um template</h2>
                    <div className="Templates">
                        {templates.map(template => (
                            <button 
                            key={template.id}
                            type="button"
                            onClick={() => handleSelectTemplate(template)}
                            className={template.id === selectedTemplate?.id ? 'selected': ''}
                            >
                                <img src={template.url} alt={template.name}/>
                            </button>
                        ))}
                    </div>
                    
                    {selectedTemplate && (<>
                        <h2>Textos</h2>
                    <form className="Form" onSubmit={handleSubmit}>
                       {(new Array(selectedTemplate.box_count).fill('').map((_,index) =>(
            
                           <input
                           key={String(Math.random())} 
                           type="text" 
                           placeholder={`Texto #${index + 1}`}
                           onChange={handleInputChange(index)}
                           />
                       
                       )))}
    
                        <div className="Button" type="submit">
                            Ready !
                        </div>
                    </form>
                    </>
                    )}
                </>
                )}

            </div>

        </div>
    )
}