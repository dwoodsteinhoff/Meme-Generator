const memeForm = document.querySelector("#memeForm");
const imageInput = document.querySelector('input[name="image"]')
const topTextInput = document.querySelector('input[name="topText"]')
const bottomTextInput = document.querySelector('input[name="bottomText"]')
const newMeme = document.querySelector('#newMeme');

const containerForAllMemes= document.createElement('section');
    containerForAllMemes.setAttribute('class',`allMemes`);

newMeme.append(containerForAllMemes);

// function createDiv(){
//     document.createElement('div');
// }

memeForm.addEventListener('submit',function(event){
    event.preventDefault();
    
    const meme = makeMeme(topTextInput.value, bottomTextInput.value);

    const allMemesContainer = document.querySelector('.allMemes');
    allMemesContainer.prepend(meme);
    imageInput.value = '';
    topTextInput.value = '';
    bottomTextInput.value='';
})

let memeCounter = 0;
let deleteCounter =0;

function makeMeme(textTop,textBottom){

    const generatedMemeContainer = document.createElement('div');
    generatedMemeContainer.setAttribute('class',"newGeneratedMemeContainer");
    generatedMemeContainer.setAttribute('id',`newGeneratedMemeContainer${memeCounter}`);
    containerForAllMemes.appendChild(generatedMemeContainer);

    const generatedMeme = document.querySelector(`#newGeneratedMemeContainer${memeCounter}`);

    const memeImage = document.createElement('img');
    memeImage.setAttribute('class','memeImage')
    memeImage.setAttribute('src', `${imageInput.value}`)
    generatedMeme.appendChild(memeImage);

    const dMeme = deleteMeme();
    generatedMemeContainer.append(dMeme)
    
    const insideGeneratedMemeContainer = document.createElement('div');
    insideGeneratedMemeContainer.setAttribute('class',"newGeneratedMeme" );
    insideGeneratedMemeContainer.setAttribute('id',`newGeneratedMeme${memeCounter}` );
    generatedMeme.appendChild(insideGeneratedMemeContainer);

    const mainMeme = document.querySelector(`#newGeneratedMeme${memeCounter}`);

    const mainMemeTopText = document.createElement('p');
    mainMemeTopText.setAttribute('class','text');
    mainMemeTopText.setAttribute('id', 'tTextValue');
    mainMeme.appendChild(mainMemeTopText);

    const mainMemeBottomText = document.createElement('p');
    mainMemeBottomText.setAttribute('class','text');
    mainMemeBottomText.setAttribute('id', 'bTextValue');
    mainMeme.appendChild(mainMemeBottomText);

    mainMemeTopText.innerText = textTop;
    mainMemeBottomText.innerText = textBottom;

    memeCounter ++;

    return generatedMemeContainer;
}   

function deleteMeme(){
    const allMemesContainer = document.querySelector('.allMemes');
    const deleteButton = document.createElement('input');
    deleteButton.setAttribute('type', 'button');
    deleteButton.setAttribute('value', 'DELETE MEME');
    deleteButton.setAttribute('class', 'deleteMeme');
    deleteButton.setAttribute('id', `deleteButton${deleteCounter}`)
    allMemesContainer.prepend(deleteButton);
    deleteCounter ++;
    deleteButton.addEventListener('click', function(e){
        e.preventDefault();
        const deleteTheMeme = e.target.parentElement;
        deleteTheMeme.remove()
        deleteCounter -= 1;
        memeCounter -= 1;
    })

    return  deleteButton;
}

// memeCounter -= 1;
//     deleteCounter -= 1;

// function makeMeme(link,textTop, textBottom){

//     const generatedMemeContainer = document.createElement('div');
//     generatedMemeContainer.setAttribute('class',"newGeneratedMemeContainer");

//     const generatedMeme = document.querySelector('.newGeneratedMemeContainer');

//     const imageInsideGeneratedMemeContatiner = document.createElement('image')
//     imageInsideGeneratedMemeContatiner.setAttribute('class','memeImage');
//     imageInsideGeneratedMemeContatiner.setAttribute('src',`${link}`);

//     generatedMeme.appendChild(imageInsideGeneratedMemeContatiner);

//     const insideGeneratedMemeContainer = document.createElement('div');
//     insideGeneratedMemeContainer.setAttribute('class',"newGeneratedMeme" );
//     generatedMeme.appendChild(insideGeneratedMemeContainer);

//     const mainMeme = document.querySelector(".newGeneratedMeme");

//     const mainMemeTopText = document.createElement('p');
//     mainMemeTopText.setAttribute('class','text');
//     mainMemeTopText.setAttribute('id', 'tTextValue');
//     mainMeme.appendChild(mainMemeTopText);

//     const mainMemeBottomText = document.createElement('p');
//     mainMemeBottomText.setAttribute('class','text');
//     mainMemeBottomText.setAttribute('id', 'bTextValue');
//     mainMeme.appendChild(mainMemeBottomText);

//     mainMemeTopText.innerText = textTop;
//     mainMemeBottomText.innerText = textBottom;

// }