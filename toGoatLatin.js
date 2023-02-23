// kodlash
// 1-shart 
// soz berilgan sozni pinkodlash kk
// unli  ('a', 'e', 'i', 'o', or 'u') oxiriga 'ma' qoshiladi
// undosh bolsa boshidagi oxiriga olib boriladi va "ma" qoshiladi
// har bir soz oxiriga nechinchi sozligiga qarab shuncha "a" qoshiladi 
// 'salom' => alomsmaa
// 'Our' => 'Ourmaa'
// 
var toGoatLatin = function (sentence) {
    let x = sentence.split(" ")
    let vowel = ['a', 'e', 'i', 'o', 'u']
    let result= x.map((item,index) => {
        if (vowel.includes(item[0].toLocaleLowerCase())) {
            return item + 'ma'+'a'.repeat(index+1)
        }
        else if (!vowel.includes(item[0].toLocaleLowerCase())) {
            item = item.slice(1) + item[0] + 'ma'+'a'.repeat(index+1)
            return item
        }

    })
    return result.join(' ')
};

console.log(toGoatLatin('Our'));