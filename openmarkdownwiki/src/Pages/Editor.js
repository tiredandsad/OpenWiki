import React, {useState} from 'react';
import { DocumentRenderer } from '../Components/DocumentRenderer'
import { DocumentEditor } from '../Components/DocumentEditor'
import '../CSS/Editor.css'

function Editor(){

    const RunRender = () => {
        //This is where we need to put the code that re-renders the document after edits
        //I guess we need to run a document save then after the save happens we 
        //run the renderer?
    }

    return(
        <div className='container'>
            <div className='markdownContent'>
                <DocumentEditor />
            </div>
            <div className='renderedContent'>
                <DocumentRenderer />
            </div>
        </div>
    )
}