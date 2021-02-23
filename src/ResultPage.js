import React, {useState} from 'react';
import './main.css';

const ResultPage = ({result}) => {
    return(
        <div className='results'>
            <h3>Word Count: <h2 className="result">{ result['wordCount'] }</h2></h3>
            <h3>Number of Letters: <h2 className="result">{ result['numberOfLetters']}</h2> </h3>
            <h3>Longest Word: <h2 className="result">{result['longestWord']}</h2></h3>
            <h3>Average Word Length: <h2 className="result">{result['averageLength']}</h2></h3>
            <h3>Reading Duration as Seconds: <h2 className="result">{result['readingDuration']}</h2></h3>
            <h3>Median Word Length: <h2 className="result">{result['medianWordLength']}</h2></h3>
            <h3>Median Word <h2 className="result">{result['medianWord']}</h2></h3>
            <h3>Top 5 Common Words: <h2 className="result">{result['commonWords']}</h2></h3>
            <h3>Language: <h2 className="result">{result['language']}</h2></h3>
        </div>
    );
}

export default ResultPage;