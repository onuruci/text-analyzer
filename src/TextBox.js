import React, {useState} from 'react';
import './main.css';


const EnglishStopWords = ["able","about","above","abroad","according","accordingly","across","actually","adj","after","afterwards","again","against","ago","ahead","ain't","all","allow","allows","almost","alone","along","alongside","already","also","although","always","am","amid","amidst","among","amongst","an","and","another","any","anybody","anyhow","anyone","anything","anyway","anyways","anywhere","apart","appear","appreciate","appropriate","are","aren't","around","as","a's","aside","ask","asking","associated","at","available","away","awfully","back","backward","backwards","be","became","because","become","becomes","becoming","been","before","beforehand","begin","behind","being","believe","below","beside","besides","best","better","between","beyond","both","brief","but","by","came","can","cannot","cant","can't","caption","cause","causes","certain","certainly","changes","clearly","c'mon","co","co.","com","come","comes","concerning","consequently","consider","considering","contain","containing","contains","corresponding","could","couldn't","course","c's","currently","dare","daren't","definitely","described","despite","did","didn't","different","directly","do","does","doesn't","doing","done","don't","down","downwards","during","each","edu","eg","eight","eighty","either","else","elsewhere","end","ending","enough","entirely","especially","et","etc","even","ever","evermore","every","everybody","everyone","everything","everywhere","ex","exactly","example","except","fairly","far","farther","few","fewer","fifth","first","five","followed","following","follows","for","forever","former","formerly","forth","forward","found","four","from","further","furthermore","get","gets","getting","given","gives","go","goes","going","gone","got","gotten","greetings","had","hadn't","half","happens","hardly","has","hasn't","have","haven't","having","he","he'd","he'll","hello","help","hence","her","here","hereafter","hereby","herein","here's","hereupon","hers","herself","he's","hi","him","himself","his","hither","hopefully","how","howbeit","however","hundred","i'd","ie","if","ignored","i'll","i'm","immediate","in","inasmuch","inc","inc.","indeed","indicate","indicated","indicates","inner","inside","insofar","instead","into","inward","is","isn't","it","it'd","it'll","its","it's","itself","i've","just","k","keep","keeps","kept","know","known","knows","last","lately","later","latter","latterly","least","less","lest","let","let's","like","liked","likely","likewise","little","look","looking","looks","low","lower","ltd","made","mainly","make","makes","many","may","maybe","mayn't","me","mean","meantime","meanwhile","merely","might","mightn't","mine","minus","miss","more","moreover","most","mostly","mr","mrs","much","must","mustn't","my","myself","name","namely","nd","near","nearly","necessary","need","needn't","needs","neither","never","neverf","neverless","nevertheless","new","next","nine","ninety","no","nobody","non","none","nonetheless","noone","no-one","nor","normally","not","nothing","notwithstanding","novel","now","nowhere","obviously","of","off","often","oh","ok","okay","old","on","once","one","ones","one's","only","onto","opposite","or","other","others","otherwise","ought","oughtn't","our","ours","ourselves","out","outside","over","overall","own","particular","particularly","past","per","perhaps","placed","please","plus","possible","presumably","probably","provided","provides","que","quite","qv","rather","rd","re","really","reasonably","recent","recently","regarding","regardless","regards","relatively","respectively","right","round","said","same","saw","say","saying","says","second","secondly","see","seeing","seem","seemed","seeming","seems","seen","self","selves","sensible","sent","serious","seriously","seven","several","shall","shan't","she","she'd","she'll","she's","should","shouldn't","since","six","so","some","somebody","someday","somehow","someone","something","sometime","sometimes","somewhat","somewhere","soon","sorry","specified","specify","specifying","still","sub","such","sup","sure","take","taken","taking","tell","tends","th","than","thank","thanks","thanx","that","that'll","thats","that's","that've","the","their","theirs","them","themselves","then","thence","there","thereafter","thereby","there'd","therefore","therein","there'll","there're","theres","there's","thereupon","there've","these","they","they'd","they'll","they're","they've","thing","things","think","third","thirty","this","thorough","thoroughly","those","though","three","through","throughout","thru","thus","till","to","together","too","took","toward","towards","tried","tries","truly","try","trying","t's","twice","two","un","under","underneath","undoing","unfortunately","unless","unlike","unlikely","until","unto","up","upon","upwards","us","use","used","useful","uses","using","usually","v","value","various","versus","very","via","viz","vs","want","wants","was","wasn't","way","we","we'd","welcome","well","we'll","went","were","we're","weren't","we've","what","whatever","what'll","what's","what've","when","whence","whenever","where","whereafter","whereas","whereby","wherein","where's","whereupon","wherever","whether","which","whichever","while","whilst","whither","who","who'd","whoever","whole","who'll","whom","whomever","who's","whose","why","will","willing","wish","with","within","without","wonder","won't","would","wouldn't","yes","yet","you","you'd","you'll","your","you're","yours","yourself","yourselves","you've","zero","a","how's","i","when's","why's","b","c","d","e","f","g","h","j","l","m","n","o","p","q","r","s","t","u","uucp","w","x","y","z","I","www","amount","bill","bottom","call","computer","con","couldnt","cry","de","describe","detail","due","eleven","empty","fifteen","fifty","fill","find","fire","forty","front","full","give","hasnt","herse","himse","interest","itse”","mill","move","myse”","part","put","show","side","sincere","sixty","system","ten","thick","thin","top","twelve","twenty","abst","accordance","act","added","adopted","affected","affecting","affects","ah","announce","anymore","apparently","approximately","aren","arent","arise","auth","beginning","beginnings","begins","biol","briefly","ca","date","ed","effect","et-al","ff","fix","gave","giving","heres","hes","hid","home","id","im","immediately","importance","important","index","information","invention","itd","keys","kg","km","largely","lets","line","'ll","means","mg","million","ml","mug","na","nay","necessarily","nos","noted","obtain","obtained","omitted","ord","owing","page","pages","poorly","possibly","potentially","pp","predominantly","present","previously","primarily","promptly","proud","quickly","ran","readily","ref","refs","related","research","resulted","resulting","results","run","sec","section","shed","shes","showed","shown","showns","shows","significant","significantly","similar","similarly","slightly","somethan","specifically","state","states","stop","strongly","substantially","successfully","sufficiently","suggest","thered","thereof","therere","thereto","theyd","theyre","thou","thoughh","thousand","throug","til","tip","ts","ups","usefully","usefulness","'ve","vol","vols","wed","whats","wheres","whim","whod","whos","widely","words","world","youd","youre"];
const TurkishStopWords = ["acaba","altmış","altı","ama","ancak","arada","aslında","ayrıca","bana","bazı","belki","ben","benden","beni","benim","beri","beş","bile","bin","bir","birçok","biri","birkaç","birkez","birşey","birşeyi","biz","bize","bizden","bizi","bizim","böyle","böylece","bu","buna","bunda","bundan","bunlar","bunları","bunların","bunu","bunun","burada","çok","çünkü","da","daha","dahi","de","defa","değil","diğer","diye","doksan","dokuz","dolayı","dolayısıyla","dört","edecek","eden","ederek","edilecek","ediliyor","edilmesi","ediyor","eğer","elli","en","etmesi","etti","ettiği","ettiğini","gibi","göre","halen","hangi","hatta","hem","henüz","hep","hepsi","her","herhangi","herkesin","hiç","hiçbir","için","iki","ile","ilgili","ise","işte","itibaren","itibariyle","kadar","karşın","katrilyon","kendi","kendilerine","kendini","kendisi","kendisine","kendisini","kez","ki","kim","kimden","kime","kimi","kimse","kırk","milyar","milyon","mu","mü","mı","nasıl","ne","neden","nedenle","nerde","nerede","nereye","niye","niçin","o","olan","olarak","oldu","olduğu","olduğunu","olduklarını","olmadı","olmadığı","olmak","olması","olmayan","olmaz","olsa","olsun","olup","olur","olursa","oluyor","on","ona","ondan","onlar","onlardan","onları","onların","onu","onun","otuz","oysa","öyle","pek","rağmen","sadece","sanki","sekiz","seksen","sen","senden","seni","senin","siz","sizden","sizi","sizin","şey","şeyden","şeyi","şeyler","şöyle","şu","şuna","şunda","şundan","şunları","şunu","tarafından","trilyon","tüm","üç","üzere","var","vardı","ve","veya","ya","yani","yapacak","yapılan","yapılması","yapıyor","yapmak","yaptı","yaptığı","yaptığını","yaptıkları","yedi","yerine","yetmiş","yine","yirmi","yoksa","yüz","zaten","altmýþ","altý","bazý","beþ","birþey","birþeyi","INSERmi","kýrk","mý","nasýl","onlari","onlarýn","yetmiþ","þey","þeyden","þeyi","þeyler","þu","þuna","þunda","þundan","þunu"];

const getNextPrime = (prime) => {
    const primes = [7, 13, 29, 43, 73, 107, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199,
        211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293,
        307, 311, 313, 317, 331, 337, 347, 349, 353, 431, 521, 631, 761, 919,
        1103, 1327, 1597, 1931, 2333, 2801, 3371, 4049, 4861, 5839, 7013, 8419, 10103, 12143, 14591,
        17519, 21023, 25229, 30293, 36353, 43627, 52361, 62851, 75431, 90523, 108631, 130363, 156437,
        187751, 225307, 270371, 324449, 389357, 467237, 560689, 672827, 807403, 968897, 1162687, 1395263,
        1674319, 2009191, 2411033, 2893249, 3471899, 4166287, 4999559, 5999471, 7199369, 9270769, 14000839]
    
        for(let i = 0; i < primes.length; i++)
        {
            if(primes[i] > prime)
            {
                return primes[i];
            }
        }
};


class WordObject {
    constructor(wordName, count) {
        this.word = wordName;
        this.count = count;
    }
}


class HashTable{
    constructor() {
        this.length = 37;
        this.table = new Array(37);
        this.size = 0;
    }

    hash(element) {
        //return element.length % this.length;
        let res = 0;
        for(let i =0; i< element.length; i++)
        {
            res += element.charCodeAt(i);
        }
        res *= element.length;
        return res % this.length;
    }

    add(value, count) {
        let hash = this.hash(value);
        if(this.size / this.length > 0.6) {
            this.rehash();
        }
        while(this.table[hash])
        {
            if(this.table[hash].word === value)
            {
                this.table[hash].count++;
                return;
            }
            else{
                hash++;
                hash = hash % this.length;
            }
        }
        this.table[hash] = new WordObject(value, count);
        this.size++;
        return;
    }

    contains(value) {
        let hash = this.hash(value);
        while(this.table[hash])
        {
            if(this.table[hash].word === value) {
                return true;
            }
            else {
                hash++;
                hash = hash % this.length;
            }
        }
        return false;
    }

    rehash() {
        let newLength = getNextPrime(this.length);
        let newTable = new Array(newLength);
        let temp = this.table;
        let len = this.length;
        this.table = newTable;
        this.length = newLength;
        this.size = 0;

        for(let i = 0; i < len+2; i++)
        {
            if(temp[i]){
                this.add(temp[i].word, temp[i].count);
            }
        }
        console.log("REHASH FINISHED");
        
    }

    toArray() {
        let array = [];
        for(let i = 0; i < this.length; i++)
        {
            if(this.table[i])
            {
                array.push(this.table[i]);
            }
        }
        return array;
    }
};


const detectLanguage = (HashTable) => {
    let turCount = 0, engCount = 0;
    let len = TurkishStopWords.length;
    for(let i=0; i < len; i++)
    {
        if(HashTable.contains(TurkishStopWords[i])) {
            console.log(TurkishStopWords[i]);
            turCount++;
            if(turCount >= 5) return 'tur';
        }
    }
    len = EnglishStopWords.length;
    for(let i = 0; i < len ; i++)
    {
        if(HashTable.contains(EnglishStopWords[i])) {
            console.log(EnglishStopWords[i]);
            engCount++;
            if(engCount >= 5) return 'en';
        }
    }
    if(turCount > engCount) return 'tur';
    else if(engCount > turCount){
        return 'en';
    }
    else {
        return 'not detected';
    }
};


function TextBox({result, setResult}) {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    }
    

    const addToWords = (word, allWords) => {
        let len = allWords.length;
        for(let i=0; i < len; i++)
        {
            if(word === allWords[i].word)
            {
                allWords[i].count++;
                return;
            }
        }
        allWords.push(new WordObject(word, 1));
        return;
    }

    const merge = (leftArray, rightArray) => {
        let resultArray = [],i=0, j=0;
        while(i < leftArray.length && j < rightArray.length)
        {
            if(leftArray[i].word.length < rightArray[j].word.length)
            {
                resultArray.push(leftArray[i]);
                i++;
            }
            else {
                resultArray.push(rightArray[j]);
                j++;
            }
        };
        for(; i < leftArray.length; i++)
        {
            resultArray.push(leftArray[i]);
        }
        for(; j < rightArray.length; j++)
        {
            resultArray.push(rightArray[j]);
        }
        return resultArray;
    };

    const mergeSort = (array) => {
        if(array.length <= 1)
        {
            return array;
        }
        let mid = Math.floor(array.length/2);
        let leftArray = array.slice(0,mid);
        let rightArray = array.slice(mid);
        leftArray = mergeSort(leftArray);
        rightArray = mergeSort(rightArray);

        return merge(leftArray, rightArray);
    };

    const getMax = (heap) => {
        let len = heap.length;
        if(len < 1) return ['', []];
        let result = heap[0];
        let temp;
        if(len == 1)
        {
            heap = [];
            return [result, []];
        }
        heap[0] = heap[heap.length-1];
        heap = heap.slice(0, len-1);
        len = heap.length;
        let i = 0;
        while(2*i+1 < len)
        {
            if(2*i+2 < len)
            {
                if(heap[2*i+1].count > heap[2*i+2].count)
                {
                    if(heap[2*i+1].count > heap[i].count)
                    {
                        temp = heap[2*i+1];
                        heap[2*i+1] = heap[i];
                        heap[i] = temp;
                        i = 2*i+1;
                    }
                    else break;
                }
                else
                {
                    if(heap[2*i+2].count > heap[i].count)
                    {
                        temp= heap[2*i+2];
                        heap[2*i+2] = heap[i];
                        heap[i] = temp;
                        i = 2*i+2;
                    }
                    else break;
                }
            }
            else
            {
                if(heap[2*i+1].count > heap[i].count)
                {
                    temp = heap[2*i+1];
                    heap[2*i+1] = heap[i];
                    heap[i] = temp;
                    i = 2*i+1;
                }
                else break;
            }
        }
        return [result, heap];
    };

    const buildHeap = (array) => {
        let len = array.length;
        if(len <= 1) return array;

        let index = Math.floor(len/2) - 1;
        let temp;
        for(; index >= 0; index--)
        {
            let i = index;
            while(2*i+1 < len)
            {
                if(2*i+2 < len)
                {
                    if(array[2*i+1].count > array[2*i+2].count)
                    {
                        if(array[2*i+1].count > array[i].count)
                        {
                            temp = array[2*i+1];
                            array[2*i+1] = array[i];
                            array[i] = temp;
                            i = 2*i+1;
                        }
                        else break;
                    }
                    else
                    {
                        if(array[2*i+2].count > array[i].count)
                        {
                            temp= array[2*i+2];
                            array[2*i+2] = array[i];
                            array[i] = temp;
                            i = 2*i+2;
                        }
                        else break;
                    }
                }
                else
                {
                    if(array[2*i+1].count > array[i].count)
                    {
                        temp = array[2*i+1];
                        array[2*i+1] = array[i];
                        array[i] = temp;
                        i = 2*i+1;
                    }
                    else break;
                }
            }
        }
        return array;
    };

    const handleClick = () => {
        let len = text.length;
        let wordCount = 0, word, longestWord='', allWordLengths=0, numberOfLetters=0, topWords='', tempWord='', language='';
        let allWords = [], tempArray = [];
        let orderByCommon = [], orderByLength = []; 
        let i=0, j=0, languageDetected = false;

        let hs = new HashTable;

        if(len <= 1) return;

        for(let i=0; i < len ; i++)
        {
            switch(text.charAt(i))
            {
                case ' ':
                    word = text.slice(j, i);
                    if(word !== '' && word !== ' ')
                    {
                        if(word.length > longestWord.length)
                        {
                            longestWord = word;
                        }
                        allWordLengths += word.length;
                        addToWords(word, allWords);
                        hs.add(word, 1);
                        wordCount++;
                    }
                    j = i+1;
                    break;
                case ',':
                    word = text.slice(j, i);
                    if(word !== '' && word !== ' ')
                    {
                        if(word.length > longestWord.length)
                        {
                            longestWord = word;
                        }
                        allWordLengths += word.length;
                        addToWords(word, allWords);
                        hs.add(word, 1);
                        wordCount++;
                    }
                    j = i+1;
                    break;
                case '.':
                    word = text.slice(j, i);
                    if(word !== '' && word !== ' ')
                    {
                        if(word.length > longestWord.length)
                        {
                            longestWord = word;
                        }
                        allWordLengths += word.length;
                        addToWords(word, allWords);
                        hs.add(word, 1);
                        wordCount++;
                    }
                    j = i+1;
                    numberOfLetters++;
                    break;
                case '!':
                    word = text.slice(j, i);
                    if(word !== '' && word !== ' ')
                    {
                        if(word.length > longestWord.length)
                        {
                            longestWord = word;
                        }
                        allWordLengths += word.length;
                        addToWords(word, allWords);
                        hs.add(word, 1);
                        wordCount++;
                    }
                    j = i+1;
                    numberOfLetters++;
                    break;
                case '?':
                    word = text.slice(j, i);
                    if(word !== '' && word !== ' ')
                    {
                        if(word.length > longestWord.length)
                        {
                            longestWord = word;
                        }
                        allWordLengths += word.length;
                        addToWords(word, allWords);
                        hs.add(word, 1);
                        wordCount++;
                    }
                    j = i+1;
                    numberOfLetters++;
                    break;
                default:
                    break;
                
            }
            if(i === len-1)
            {
                word = text.slice(j, i+1);
                if(word !== '' && word !== ' ')
                {
                    if(word.length > longestWord.length)
                    {
                        longestWord = word;
                    }
                    allWordLengths += word.length;
                    addToWords(word, allWords);
                    hs.add(word, 1);
                    wordCount++;
                }
                j = i+1;
            }
        };

        language = detectLanguage(hs);
/*
        if(!languageDetected)
        {
            let eLen = EnglishStopWords.length;
            for(let e = 0; e < eLen; e++)
            {
                if(hs.contains(EnglishStopWords[i]))
                {
                    language = 'en';
                    languageDetected = true;
                    break;
                }
            }
        }

        if(!languageDetected)
        {
            let eLen = TurkishStopWords.length;
            for(let e = 0; e < eLen; e++)
            {
                if(hs.contains(TurkishStopWords[i]))
                {
                    language = 'tur';
                    languageDetected = true;
                    break;
                }
            }
        }

        if(!languageDetected)
        {
            language = '';
        }
*/

        let wordsArray = hs.toArray();

        orderByLength = wordsArray;
        orderByCommon = wordsArray;

        orderByLength = mergeSort(orderByLength);

        orderByCommon = buildHeap(orderByCommon);

        /*
        console.log("WORDS ARRAY");
        console.log(hs);
        console.log(wordsArray);
        console.log(allWords);*/


        tempArray = getMax(orderByCommon);
        tempWord = tempArray[0];
        orderByCommon = tempArray[1];
        topWords += tempWord.word;
        for(let c = 0; c < 4; c++)
        {
            tempArray = getMax(orderByCommon);
            tempWord = tempArray[0];
            orderByCommon = tempArray[1];
            if(tempWord.word === '' || !tempWord) break;
            topWords += ', '+tempWord.word;
        }

        setText('');
        setResult({
            'wordCount': wordCount,
            'numberOfLetters' : numberOfLetters,
            'longestWord' : longestWord,
            'averageLength' : (allWordLengths / wordCount).toFixed(2),
            'readingDuration': (wordCount * 0.25),
            'medianWordLength': orderByLength[Math.floor(orderByLength.length / 2)].word.length,
            'medianWord': orderByLength[Math.floor(orderByLength.length / 2)].word,
            'commonWords': topWords,
            'language': language,
        });
    }

    return(
        <div>
            <textarea className="textInput" onChange={handleChange} type="text" value={text} placeholder="Enter your text here"/>
            <br/>
            <button className="analyzeButton" onClick={handleClick}>Analyze</button>
        </div>
    )
}

export default TextBox;