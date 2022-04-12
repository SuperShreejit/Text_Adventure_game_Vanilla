const subtitle = document.getElementById('subtitle');
const textElement = document.getElementById('text');
const optionsBtns = document.getElementById('options-container');
const controlsContainer = document.getElementById('controls-container');
const startBtn = document.getElementById('start-btn');

let state = {}, textNodeIndex;

// storyevents dataobject
import {textNodes} from './res/story.js';

startBtn.addEventListener('click', startGame);

function startGame(){
  state = {};
  textNodeIndex = 1;
  subtitle.textContent = "Choose your path.";
  controlsContainer.classList.add('hide');
  showTextNode(textNodeIndex);
}

// displays next text event
function showTextNode(textNodeIndex){
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
  textElement.innerText = textNode.text;
  textElement.classList.remove('hide');
  optionsBtns.classList.remove('hide');
  clearPreviousOptions();
  displayOptions(textNode);
}

// clears previous options
function clearPreviousOptions(){
  while (optionsBtns.firstChild) {
    optionsBtns.removeChild(optionsBtns.firstChild);
  }
}

// displays the options available
function displayOptions(textNode) {
  textNode.options.forEach((option) => {
    if (validateOptions(option)) {
      const button = document.createElement("button");
      button.classList.add("btn");
      button.innerText = option.text;
      button.addEventListener("click", () => selectOption(option));
      optionsBtns.appendChild(button);
    }
  });
}

// a check done to see if option available or satisfies requirement to print
function validateOptions(option){
  if(option.requiredState == null ) return true;
  else {
    if (option.requiredState(state)) return true;
    else return false; 
  }
}

//when selected an option, it changes state(if present) and forwards the event
function selectOption(option){
  const nextTextNodeID = option.nextText;
  if(option.setState){
    state = Object.assign(state, option.setState);
  }
  const isEndGame = checkforEndGame(nextTextNodeID);
  if(isEndGame) endGame(option);
  else showTextNode(nextTextNodeID);
}

function checkforEndGame(TextNodeId) {
  if(TextNodeId > 10) return true;
  else return false;
}

function endGame(option) {
  subtitle.innerText = "PRESS START TO PLAY";
  textElement.innerText = option.text;
  clearPreviousOptions();
  controlsContainer.classList.remove('hide');
}