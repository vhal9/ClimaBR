/**
 * Função util para mapear as imagens e informações sobre o clima
 * utiliza um identificador do clima para retornar as informações sobre o mesmo
 * @param {String} tempo 
 * @returns {Object} label
 */
export const getLabelOption = tempo => {
    let label;

    switch (tempo){
        case 'ec':
            label = {
                icon: 'ec',
                label: 'Encoberto com Chuvas Isoladas',
                description: 'Céu totalmente encoberto sem aberturas e chuvas isoladas.',
            };
            break;
        case 'ci':
            label = {
                icon: 'ci',
                label: 'Chuvas Isoladas',
                description: 'Muitas nuvens com curtas aberturas e chuvas isoladas.',
            };
            break;
        case 'c':
            label = {
                icon: 'c',
                label: 'Chuvas Periódicas',
                description: 'Muitas nuvens e chuvas periódicas.',
            };
            break;
        case 'in':
            label = {
                icon: 'in',
                label: 'Instável',
                description: 'Períodos curtos de abertura intercalados com períodos de nebulosidade e chuvas a qualquer hora do dia.',
            };
            break;
        case 'pp':
            label = {
                icon: 'pp',
                label: 'Possibilidade de Pancadas de Chuva',
                description: 'Variação de nuvens com chance pequena de pancadas de chuva localizadas que poderão ser fortes e vir acompanhadas de trovoadas a qualquer hora do dia.',
            };
            break;
        case 'cm':
            label = {
                icon: 'cm',
                label: 'Chuva pela Manhã',
                description: 'Muitas nuvens com chuva pela manhã melhorando a partir da tarde.',
            };
            break;
        case 'cn':
            label = {
                icon: 'cn',
                label: 'Chuva à Noite',
                description: 'Sol com aumento gradativo de nebulosidade ao longo do dia e chuvas à noite.',
            };
            break;
        case 'pt':
            label = {
                icon: 'pt',
                label: 'Pancadas de Chuva a partir da Tarde',
                description: 'Variação de nuvens pela manhã com pancadas de chuva localizadas que poderão ser fortes e vir acompanhadas de trovoadas a partir da tarde.',
            };
            break;
        case 'pm':
            label = {
                icon: 'pm',
                label: 'Pancadas de Chuva de Manhã',
                description: 'Variação de nuvens com pancadas de chuva localizadas que poderão ser fortes e vir acompanhadas de trovoadas de manhã.',
            };
            break;
        case 'np':
            label = {
                icon: 'np',
                label: 'Nublado com Pancadas de Chuva',
                description: 'Muitas nuvens com curtas aberturas e pancadas de chuva localizadas que poderão ser fortes e vir acompanhadas de trovoadas a qualquer hora do dia.',
            };
            break;
        case 'pc':
            label = {
                icon: 'pc',
                label: 'Pancadas de Chuva',
                description: 'Variação de nuvens e pancadas de chuva localizadas que poderão ser fortes e vir acompanhadas de trovoadas a qualquer hora do dia.',
            };
            break;
        case 'pn':
            label = {
                icon: 'pn',
                label: 'Parcialmente Nublado',
                description: 'Parcialmente nublado.',
            };
            break;
        case 'cv':
            label = {
                icon: 'cv',
                label: 'Chuvisco',
                description: 'Muitas nuvens com chuva fraca ocasional.',
            };
            break;
        case 'ch':
            label = {
                icon: 'ch',
                label: 'Chuvoso',
                description: 'Encoberto com chuvas contínuas.',
            };
            break;
        case 't':
            label = {
                icon: 't',
                label: 'Tempestade',
                description: 'Chuvas localmente forte com acumulados pontuais de chuva acompanhada de trovoadas, rajadas de vento fortes e granizo eventual.'
            };
            break;
        case 'ps':
            label = {
                icon: 'ps',
                label: 'Predomínio de Sol',
                description: 'Céu claro com poucas nuvens.',
            };
            break;
        case 'e':
            label = {
                icon: 'e',
                label: 'Encoberto',
                description: 'Céu totalmente encoberto sem aberturas.',
            };
            break;
        case 'n':
            label = {
                icon: 'n',
                label: 'Nublado',
                description: 'Muitas nuvens com curtas aberturas.',
            };
            break;
        case 'g':
            label = {
                icon: 'g',
                label: 'Geada',
                description: 'Ocorrência de uma cobertura fina de cristais de gelo na superfície afetada.',
            };
            break;
        case 'nv':
            label = {
                icon: 'nv',
                label: 'Nevoeiro',
                description: 'Nuvens bem baixas, próximas à superfície, que reduzem visibilidade.',
            };
            break;
        case 'ne':
            label = {
                icon: 'ne',
                label: 'Neve',
                description: 'Precipitação ocasional de flocos de neve a qualquer hora do dia.',
            };
            break;
        case 'nd':
            label = {
                icon: 'nd',
                label: 'Não Definido',
                description: 'Não definido.',
            };
            break;
        case 'pnt':
            label = {
                icon: 'pnt',
                label: 'Pancadas de Chuva à Noite',
                description: 'Variação de nuvens durante o dia com pancadas de chuva localizadas que poderão ser fortes e vir acompanhadas de trovoadas à noite.',
            };
            break;
        case 'psc':
            label = {
                icon: 'psc',
                label: 'Possibilidade de Chuva',
                description: 'Nebulosidade variável com pequena chance de chuva.',
            };
            break;
        case 'pcm':
            label = {
                icon: 'pcm',
                label: 'Possibilidade de Chuva pela Manhã',
                description: 'Variação de nuvens com chance pequena de pancadas de chuva localizadas que poderão ser fortes e vir acompanhadas de trovoadas de manhã.',
            };
            break;
        case 'pcn':
            label = {
                icon: 'pcn',
                label: 'Possibilidade de Chuva à Noite',
                description: 'Variação de nuvens durante o dia com chance pequena de pancadas de chuva localizadas que poderão ser fortes e vir acompanhadas de trovoadas à noite.',
            };
            break;
        case 'pct':
            label = {
                icon: 'pct',
                label: 'Possibilidade de Chuva à Tarde',
                description: 'Variação de nuvens pela manhã com chance pequena de pancadas de chuva localizadas que poderão ser fortes e vir acompanhadas de trovoadas a partir da tarde.',
            };
            break;
        case 'npt':
            label = {
                icon: 'npt',
                label: 'Nublado com Pancadas a partir da Tarde',
                description: 'Muitas nuvens com curtas aberturas pela manhã com pancadas de chuva localizadas que poderão ser fortes e vir acompanhadas de trovoadas a partir da tarde.',
            };
            break;
        case 'npn':
            label = {
                icon: 'npn',
                label: 'Nublado com Pancadas à Noite',
                description: 'Muitas nuvens com curtas aberturas durante o dia e pancadas de chuva localizadas que poderão ser fortes e vir acompanhadas de trovoadas à noite.',
            };
            break;
        case 'ncn':
            label = {
                icon: 'ncn',
                label: 'Nublado com Possibilidade de Chuva à Noite',
                description: 'Muitas nuvens com curtas aberturas e com pequena chance de chuva à noite.',
            };
            break;
        case 'nct':
            label = {
                icon: 'nct',
                label: 'Nublado com Possibilidade de Chuva à Tarde',
                description: 'Muitas nuvens com curtas aberturas e com pequena chance de chuva à tarde.',
            };
            break;
        case 'ncm':
            label = {
                icon: 'ncm',
                label: 'Nublado com Possibilidade de Chuva pela Manhã',
                description: 'Muitas nuvens com curtas aberturas e pequena chance de chuva pela manhã.',
            };
            break;
        case 'npm':
            label = {
                icon: 'npm',
                label: 'Nublado com Pancadas de Manhã',
                description: 'Muitas nuvens com curtas aberturas e pancadas de chuva localizadas que poderão ser fortes e vir acompanhadas de trovoadas de manhã.',
            };
            break;
        case 'npp':
            label = {
                icon: 'npp',
                label: 'Nublado com Possibilidade de Chuva',
                description: 'Muitas nuvens com curtas aberturas e pequena chance de chuva a qualquer hora do dia.',
            };
            break;
        case 'vn':
            label = {
                icon: 'vn',
                label: 'Variação de Nebulosidade',
                description: 'Períodos curtos de abertura intercalados com períodos de nebulosidade.',
            };
            break;
        case 'ct':
            label = {
                icon: 'ct',
                label: 'Chuva à Tarde',
                description: 'Sol pela manhã com aumento gradativo de nebulosidade ao longo do dia e chuvas a partir da tarde.',
            };
            break;
        case 'ppn':
            label = {
                icon: 'ppn',
                label: 'Possibilidade de Pancadas de Chuva à Noite',
                description: 'Variação de nuvens durante o dia com chance pequena de pancadas de chuva localizadas que poderão ser fortes e vir acompanhadas de trovoadas à noite.',
            };
            break;
        case 'ppt':
            label = {
                icon: 'ppt',
                label: 'Possibilidade de Pancadas de Chuva à Tarde',
                description: 'Variação de nuvens pela manhã com chance pequena de pancadas de chuva localizadas que poderão ser fortes e vir acompanhadas de trovoadas a partir da tarde.',
            };
            break;
        case 'ppm':
            label = {
                icon: 'ppm',
                label: 'Possibilidade de Pancadas de Chuva de Manhã	',
                description: 'Variação de nuvens com chance pequena de pancadas de chuva localizadas que poderão ser fortes e vir acompanhadas de trovoadas de manhã.',
            };
            break;
        case 'nppc':
            label = {
                icon: 'nppc',
                label: 'Nublado com possibilidade de pancada de chuva e trovoadas',
                description: 'Muitas nuvens com curtas aberturas e chance pequena de pancadas de chuva localizadas que poderão ser fortes e vir acompanhadas de trovoadas a qualquer hora do dia.',
            };
            break;
        case 'nppcm':
            label = {
                icon: 'nppcm',
                label: 'Nublado com possibilidade de pancada de chuva e trovoadas de manhã',
                description: 'Muitas nuvens com curtas aberturas e chance pequena de pancadas de chuva localizadas que poderão ser fortes e vir acompanhadas de trovoadas pela manhã.',
            };
            break;
        case 'nppct':
            label = {
                icon: 'nppct',
                label: 'Nublado com possibilidade de pancada de chuva e trovoadas a partir da tarde',
                description: 'Muitas nuvens com curtas aberturas e com chance pequena de pancadas de chuva localizadas que poderão ser fortes e vir acompanhadas de trovoadas a partir da tarde.',
            };
            break;
        case 'nppcn':
            label = {
                icon: 'nppcn',
                label: 'Nublado com possibilidade de pancada de chuva e trovoadas à noite',
                description: 'Muitas nuvens com curtas aberturas durante o dia com chance pequena de pancadas de chuva localizadas que poderão ser fortes e vir acompanhadas de trovoadas à noite.',
            };
            break;
    }
    return label;
}

