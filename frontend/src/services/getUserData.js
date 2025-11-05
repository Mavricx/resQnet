export default async function getData(url){
    let data= await fetch(url);
    return data.json();
}