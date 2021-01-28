/* 
swap base url: 'https://swapi.dev/api/'

initial query people?search=luke'

*/

function SwapiModel(){
    this.apiBaseUrl = 'https://swapi.dev/api/';

    this.init = function(){
        const result = this.query('https://swapi.dev/api/people?search=luke');
        return result;
    }
    
    this.query = async function(url){
        const req = await fetch(url);
        const res = await req.json();
        return res;
    }

    return this;
}

export default SwapiModel;