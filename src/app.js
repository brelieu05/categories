const http = require('http')
const port = 3000
const fs = require('fs')

var dictionary = {
  A: [
    'ABKHAZIA',          'AFGHANISTAN',
    'ALAND ISLANDS',     'ALBANIA',
    'ALGERIA',           'AMERICAN SAMOA',
    'ANDORRA',           'ANGOLA',
    'ANGUILLA',          'ANTARCTICA',
    'ANTIGUA & BARBUDA', 'ARGENTINA',
    'ARMENIA',           'ARTSAKH',
    'ARUBA',             'AUSTRALIA',
    'AUSTRIA',           'AZERBAIJAN'
  ],
  "B": [
    'BAHAMAS',
    'BAHRAIN',
    'BANGLADESH',
    'BARBADOS',
    'BELARUS',
    'BELGIUM',
    'BELIZE',
    'BENIN',
    'BERMUDA',
    'BHUTAN',
    'BOLIVIA',
    'BOSNIA & HERZEGOVINA',
    'BOTSWANA',
    'BOUVET ISLAND',
    'BRAZIL',
    'BRITISH INDIAN OCEAN TERRITORY',
    'BRITISH VIRGIN ISLANDS',
    'BRUNEI',
    'BULGARIA',
    'BURKINA FASO',
    'BURUNDI'
  ],
  "C": [
    'CAMBODIA',
    'CAMEROON',
    'CANADA',
    'CAPE VERDE',
    'CARIBBEAN NETHERLANDS',
    'CAYMAN ISLANDS',
    'CENTRAL AFRICAN REPUBLIC',
    'CHAD',
    'CHILE',
    'CHINA',
    'CHRISTMAS ISLAND',
    'COCOS',
    'COLOMBIA',
    'COMOROS',
    'CONGO',
    'COOK ISLANDS',
    'COSTA RICA',
    'CROATIA',
    'CUBA',
    'CURAÇAO',
    'CYPRUS',
    'CZECHIA',
    'CÔTE D’IVOIRE'
  ],
  "D": [ 'DENMARK', 'DJIBOUTI', 'DOMINICA', 'DOMINICAN REPUBLIC' ],
  "E": [
    'ECUADOR',
    'EGYPT',
    'EL SALVADOR',
    'EQUATORIAL GUINEA',
    'ERITREA',
    'ESTONIA',
    'ESWATINI',
    'ETHIOPIA'
  ],
  "F": [
    'FALKLAND ISLANDS',
    'FAROE ISLANDS',
    'FIJI',
    'FINLAND',
    'FRANCE',
    'FRENCH GUIANA',
    'FRENCH POLYNESIA',
    'FRENCH SOUTHERN TERRITORIES'
  ],
  "G": [
    'GABON',         'GAMBIA',
    'GEORGIA',       'GERMANY',
    'GHANA',         'GIBRALTAR',
    'GREECE',        'GREENLAND',
    'GRENADA',       'GUADELOUPE',
    'GUAM',          'GUATEMALA',
    'GUERNSEY',      'GUINEA',
    'GUINEA-BISSAU', 'GUYANA'
  ],
  "H": [
    'HAITI',
    'HEARD & MCDONALD ISLANDS',
    'HONDURAS',
    'HONG KONG SAR CHINA',
    'HUNGARY'
  ],
  "I": [
    'ICELAND',     'INDIA',
    'INDONESIA',   'IRAN',
    'IRAQ',        'IRELAND',
    'ISLE OF MAN', 'ISRAEL',
    'ITALY'
  ],
  "J": [ 'JAMAICA', 'JAPAN', 'JERSEY', 'JORDAN' ],
  "K": [
    'KAZAKHSTAN',
    'KENYA',
    'KIRIBATI',
    'KOSOVO',
    'KUWAIT',
    'KYRGYZSTAN'
  ],
  "L": [
    'LAOS',
    'LATVIA',
    'LEBANON',
    'LESOTHO',
    'LIBERIA',
    'LIBYA',
    'LIECHTENSTEIN',
    'LITHUANIA',
    'LUXEMBOURG'
  ],
  "M": [
    'MACAO SAR CHINA', 'MADAGASCAR',
    'MALAWI',          'MALAYSIA',
    'MALDIVES',        'MALI',
    'MALTA',           'MARSHALL ISLANDS',
    'MARTINIQUE',      'MAURITANIA',
    'MAURITIUS',       'MAYOTTE',
    'MEXICO',          'MICRONESIA',
    'MOLDOVA',         'MONACO',
    'MONGOLIA',        'MONTENEGRO',
    'MONTSERRAT',      'MOROCCO',
    'MOZAMBIQUE',      'MYANMAR'
  ],
  "N": [
    'NAMIBIA',
    'NAURU',
    'NEPAL',
    'NETHERLANDS',
    'NEW CALEDONIA',
    'NEW ZEALAND',
    'NICARAGUA',
    'NIGER',
    'NIGERIA',
    'NIUE',
    'NORFOLK ISLAND',
    'NORTH KOREA',
    'NORTH MACEDONIA',
    'NORTHERN CYPRUS',
    'NORTHERN MARIANA ISLANDS',
    'NORWAY'
  ],
  "O": [ 'OMAN' ],
  "P": [
    'PAKISTAN',
    'PALAU',
    'PALESTINIAN TERRITORIES',
    'PANAMA',
    'PAPUA NEW GUINEA',
    'PARAGUAY',
    'PERU',
    'PHILIPPINES',
    'PITCAIRN ISLANDS',
    'POLAND',
    'PORTUGAL',
    'PUERTO RICO'
  ],
  "Q": [ 'QATAR' ],
  "R": [ 'ROMANIA', 'RUSSIA', 'RWANDA', 'RÉUNION' ],
  "S": [
    'SAHRAWI ARAB DEMOCRATIC REPUBLIC',
    'SAMOA',
    'SAN MARINO',
    'SAUDI ARABIA',
    'SENEGAL',
    'SERBIA',
    'SEYCHELLES',
    'SIERRA LEONE',
    'SINGAPORE',
    'SINT MAARTEN',
    'SLOVAKIA',
    'SLOVENIA',
    'SOLOMON ISLANDS',
    'SOMALIA',
    'SOMALILAND',
    'SOUTH AFRICA',
    'SOUTH GEORGIA & SOUTH SANDWICH ISLANDS',
    'SOUTH KOREA',
    'SOUTH OSSETIA',
    'SOUTH SUDAN',
    'SPAIN',
    'SRI LANKA',
    'ST. BARTHÉLEMY',
    'ST. HELENA',
    'ST. KITTS & NEVIS',
    'ST. LUCIA',
    'ST. MARTIN',
    'ST. PIERRE & MIQUELON',
    'ST. VINCENT & GRENADINES',
    'SUDAN',
    'SURINAME',
    'SVALBARD & JAN MAYEN',
    'SWEDEN',
    'SWITZERLAND',
    'SYRIA',
    'SÃO TOMÉ & PRÍNCIPE'
  ],
  "T": [
    'TAIWAN',
    'TAJIKISTAN',
    'TANZANIA',
    'THAILAND',
    'TIMOR-LESTE',
    'TOGO',
    'TOKELAU',
    'TONGA',
    'TRANSNISTRIA',
    'TRINIDAD & TOBAGO',
    'TUNISIA',
    'TURKEY',
    'TURKMENISTAN',
    'TURKS & CAICOS ISLANDS',
    'TUVALU'
  "U": [
    'U.S. OUTLYING ISLANDS',
    'U.S. VIRGIN ISLANDS',
    'UGANDA',
    'UKRAINE',
    'UNITED ARAB EMIRATES',
    'UNITED KINGDOM',
    'UNITED STATES',
    'URUGUAY',
    'UZBEKISTAN'
  ],
  "V": [ 'VANUATU', 'VATICAN CITY', 'VENEZUELA', 'VIETNAM' ],
  "W": [ 'WALLIS & FUTUNA', 'WESTERN SAHARA' ],
  "X": [],
  "Y": [ 'YEMEN' ],
  "Z": [ 'ZAMBIA', 'ZIMBABWE' ]
}


const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type' : 'text/html'})
    fs.readFile('index.html', function(err, data){
        if(err){
            res.writeHead(404)
            res.write('Error: File Not Found')
        }
        else{
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function(err){
    if(err) {
        console.log('Somehting went wrong', err)
    }
    else{
        console.log('Server is listening on port ' + port)
    }
})

function readFileToDictionary(filePath, callback) {
  
    // Read the file asynchronously line by line
    const stream = fs.createReadStream(filePath, 'utf8');
    let remainingData = '';
  
    stream.on('data', (chunk) => {
      remainingData += chunk;
      const lines = remainingData.split('\n');

      for (let i = 0; i < lines.length - 1; i++) {
        const countryName = lines[i].trim().toUpperCase();
        inputWord(countryName);
      }

  
      // Save the remaining incomplete line for the next iteration
      remainingData = lines[lines.length - 1];
    });
  
    stream.on('end', () => {
      // Process the last line (if any)
      if (remainingData.trim() !== '') {
        const countryName = remainingData.trim().toUpperCase();
        inputWord(countryName);
      }
  
      // Invoke the callback with the resulting dictionary
      callback(dictionary);
    });
  
    stream.on('error', (err) => {
      console.error(`Error reading file: ${err.message}`);
    });
  }


function inDictionary(word_input){
    var word_input = word_input.toUpperCase();
    var letter = word_input[0];
    var key = dictionary[letter];
    return key.includes(word_input);
}
function inputWord(word){
    if(word.length < 1) return;
    var firstLetter = word[0];
    dictionary[firstLetter].push(word);
}

const filePath = './countries.txt'; // Replace with the actual file path
readFileToDictionary(filePath, (result) => {
  console.log(result);
  console.log(inDictionary("Guam"));
});


