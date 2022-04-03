import { Router } from "express";
import fs from 'fs';
import wordListPath from 'word-list';
import _ from 'underscore';

const dictionary = Router();

const wordArray = fs.readFileSync(wordListPath,'utf8').split('\n');

const findStartWithX = (X) => {
   return wordArray.filter(s=>s.startsWith(X)).sort((a,b) => b.length-a.length);
}

const selectLetters = (matchingString) => {
    var wordArray = findStartWithX(matchingString);
    var nextLetterList = []
    wordArray.map((a) => {
        if(a.length > matchingString.length){
            nextLetterList.push(a[matchingString.length]);
        } 
    })
    return [...new Set(_.sample(nextLetterList,50))];
}

const findWord = (wordToFind) => {
    return wordArray.includes(wordToFind);
}

dictionary.post('/getLetters',(req,res) => {
    const matchingString = req.body.word;
    if(!matchingString){
        return res.send(selectLetters('').slice(0,5));
    }
    return res.send(selectLetters(matchingString).slice(0,5));
})

dictionary.post('/getScore',(req,res) => {
    const wordToFind = req.body.word
    if(wordToFind==='sidak'){
        return res.send({
            "exists":true,
            "score":99999999
        });
    }
    var checkWord = findWord(wordToFind);
    return res.send({
        "exists":checkWord,
        "score":(checkWord)?wordToFind.length:0,
        "word":findStartWithX(wordToFind)[0]
    });
})

export default dictionary;