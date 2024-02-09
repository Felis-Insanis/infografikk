import Papa from 'papaparse';

export async function getData(src) {
    const data = Papa.parse(await fetchCsv(src), {header: true, dynamicTyping: true}).data;
    console.log(data);
    return data;
}

export async function fetchCsv(src) {
    const response = await fetch(src);
    const reader = response.body.getReader();
    const result = await reader.read();
    const decoder = new TextDecoder('utf-8');
    const csv = await decoder.decode(result.value);
    console.log('csv', csv);
    return csv;
}