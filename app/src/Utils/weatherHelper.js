export function getIconsLabel() {
	var texto = {
		itens: [
            {
                icon: 'ec',
                label: 'Encoberto com Chuvas Isoladas',
                description: 'Céu totalmente encoberto sem aberturas e chuvas isoladas.',
		    },
            {
                icon: 'ci',
                label: 'Chuvas Isoladas',
                description: 'Muitas nuvens com curtas aberturas e chuvas isoladas.',
		    },
            {
                icon: 'c',
                label: 'Chuvas Periódicas',
                description: 'Muitas nuvens e chuvas periódicas.',
		    },
            {
                icon: 'in',
                label: 'Instável',
                description: 'Períodos curtos de abertura intercalados com períodos de nebulosidade e chuvas a qualquer hora do dia.',
		    },
            {
                icon: 'pp',
                label: 'Possibilidade de Pancadas de Chuva',
                description: 'Variação de nuvens com chance pequena de pancadas de chuva localizadas que poderão ser fortes e vir acompanhadas de trovoadas a qualquer hora do dia.',
		    },
            {
                icon: 'cm',
                label: 'Chuva pela Manhã',
                description: 'Muitas nuvens com chuva pela manhã melhorando a partir da tarde.',
		    },
            {
                icon: 'cn',
                label: 'Chuva à Noite',
                description: 'Sol com aumento gradativo de nebulosidade ao longo do dia e chuvas à noite.',
		    },
            {
                icon: 'pt',
                label: 'Pancadas de Chuva a partir da Tarde',
                description: 'Variação de nuvens pela manhã com pancadas de chuva localizadas que poderão ser fortes e vir acompanhadas de trovoadas a partir da tarde.',
		    },
            {
                icon: 'pm',
                label: 'Pancadas de Chuva de Manhã',
                description: 'Variação de nuvens com pancadas de chuva localizadas que poderão ser fortes e vir acompanhadas de trovoadas de manhã.',
		    },
            {
                icon: 'np',
                label: 'Nublado com Pancadas de Chuva',
                description: 'Muitas nuvens com curtas aberturas e pancadas de chuva localizadas que poderão ser fortes e vir acompanhadas de trovoadas a qualquer hora do dia.',
		    },
            {
                icon: 'pc',
                label: 'Pancadas de Chuva',
                description: 'Variação de nuvens e pancadas de chuva localizadas que poderão ser fortes e vir acompanhadas de trovoadas a qualquer hora do dia.',
		    },
            {
                icon: 'pn',
                label: 'Parcialmente Nublado',
                description: 'Parcialmente nublado.',
		    },
            {
                icon: 'cv',
                label: 'Chuvisco',
                description: 'Muitas nuvens com chuva fraca ocasional.',
		    },
            {
                icon: 'ch',
                label: 'Chuvoso',
                description: 'Encoberto com chuvas contínuas.',
		    },
            {
                icon: 't',
                label: 'Tempestade',
                description: 'Chuvas localmente forte com acumulados pontuais de chuva acompanhada de trovoadas, rajadas de vento fortes e granizo eventual.'
		    },
            {
                icon: 'ps',
                label: 'Predomínio de Sol',
                description: 'Céu claro com poucas nuvens.',
		    },
            {
                icon: 'e',
                label: 'Encoberto',
                description: 'Céu totalmente encoberto sem aberturas.',
		    },
            {
                icon: 'n',
                label: 'Nublado',
                description: 'Muitas nuvens com curtas aberturas.',
		    },
            {
                icon: 'g',
                label: 'Geada',
                description: 'Ocorrência de uma cobertura fina de cristais de gelo na superfície afetada.',
		    },
            {
                icon: 'nv',
                label: 'Nevoeiro',
                description: 'Nuvens bem baixas, próximas à superfície, que reduzem visibilidade.',
		    },
            {
                icon: 'ne',
                label: 'Neve',
                description: 'Precipitação ocasional de flocos de neve a qualquer hora do dia.',
		    },
            {
                icon: 'nd',
                label: 'Não Definido',
                description: 'Não definido.',
		    },
            {
                icon: 'pnt',
                label: 'Pancadas de Chuva à Noite',
                description: 'Variação de nuvens durante o dia com pancadas de chuva localizadas que poderão ser fortes e vir acompanhadas de trovoadas à noite.',
		    },
            {
                icon: 'psc',
                label: 'Possibilidade de Chuva',
                description: 'Nebulosidade variável com pequena chance de chuva.',
		    },
            {
                icon: 'pcm',
                label: 'Possibilidade de Chuva pela Manhã',
                description: 'Variação de nuvens com chance pequena de pancadas de chuva localizadas que poderão ser fortes e vir acompanhadas de trovoadas de manhã.',
		    },
            {
                icon: 'pcn',
                label: 'Possibilidade de Chuva à Noite',
                description: 'Variação de nuvens durante o dia com chance pequena de pancadas de chuva localizadas que poderão ser fortes e vir acompanhadas de trovoadas à noite.',
		    },
            {
                icon: 'pct',
                label: 'Possibilidade de Chuva à Tarde',
                description: 'Variação de nuvens pela manhã com chance pequena de pancadas de chuva localizadas que poderão ser fortes e vir acompanhadas de trovoadas a partir da tarde.',
		    },
            {
                icon: 'npt',
                label: 'Nublado com Pancadas a partir da Tarde',
                description: 'Muitas nuvens com curtas aberturas pela manhã com pancadas de chuva localizadas que poderão ser fortes e vir acompanhadas de trovoadas a partir da tarde.',
		    },
            {
                icon: 'npn',
                label: 'Nublado com Pancadas à Noite',
                description: 'Muitas nuvens com curtas aberturas durante o dia e pancadas de chuva localizadas que poderão ser fortes e vir acompanhadas de trovoadas à noite.',
		    },
            {
                icon: 'ncn',
                label: 'Nublado com Possibilidade de Chuva à Noite',
                description: 'Muitas nuvens com curtas aberturas e com pequena chance de chuva à noite.',
		    },
            {
                icon: 'nct',
                label: 'Nublado com Possibilidade de Chuva à Tarde',
                description: 'Muitas nuvens com curtas aberturas e com pequena chance de chuva à tarde.',
		    },

            {
                icon: 'ncm',
                label: 'Nublado com Possibilidade de Chuva pela Manhã',
                description: 'Muitas nuvens com curtas aberturas e pequena chance de chuva pela manhã.',
		    },

            {
                icon: 'npm',
                label: 'Nublado com Pancadas de Manhã',
                description: 'Muitas nuvens com curtas aberturas e pancadas de chuva localizadas que poderão ser fortes e vir acompanhadas de trovoadas de manhã.',
		    },

            {
                icon: 'npp',
                label: 'Nublado com Possibilidade de Chuva',
                description: 'Muitas nuvens com curtas aberturas e pequena chance de chuva a qualquer hora do dia.',
		    },

            {
                icon: 'vn',
                label: 'Variação de Nebulosidade',
                description: 'Períodos curtos de abertura intercalados com períodos de nebulosidade.',
		    },

            {
                icon: 'ct',
                label: 'Chuva à Tarde',
                description: 'Sol pela manhã com aumento gradativo de nebulosidade ao longo do dia e chuvas a partir da tarde.',
		    },

            {
                icon: 'ppn',
                label: 'Possibilidade de Pancadas de Chuva à Noite',
                description: 'Variação de nuvens durante o dia com chance pequena de pancadas de chuva localizadas que poderão ser fortes e vir acompanhadas de trovoadas à noite.',
		    },

            {
                icon: 'ppt',
                label: 'Possibilidade de Pancadas de Chuva à Tarde',
                description: 'Variação de nuvens pela manhã com chance pequena de pancadas de chuva localizadas que poderão ser fortes e vir acompanhadas de trovoadas a partir da tarde.',
		    },

            {
                icon: 'ppm',
                label: 'Possibilidade de Pancadas de Chuva de Manhã	',
                description: 'Variação de nuvens com chance pequena de pancadas de chuva localizadas que poderão ser fortes e vir acompanhadas de trovoadas de manhã.',
		    },

            {
                icon: 'nppc',
                label: 'Nublado com possibilidade de pancada de chuva e trovoadas',
                description: 'Muitas nuvens com curtas aberturas e chance pequena de pancadas de chuva localizadas que poderão ser fortes e vir acompanhadas de trovoadas a qualquer hora do dia.',
		    },

            {
                icon: 'nppcm',
                label: 'Nublado com possibilidade de pancada de chuva e trovoadas de manhã',
                description: 'Muitas nuvens com curtas aberturas e chance pequena de pancadas de chuva localizadas que poderão ser fortes e vir acompanhadas de trovoadas pela manhã.',
		    },

            {
                icon: 'nppct',
                label: 'Nublado com possibilidade de pancada de chuva e trovoadas a partir da tarde',
                description: 'Muitas nuvens com curtas aberturas e com chance pequena de pancadas de chuva localizadas que poderão ser fortes e vir acompanhadas de trovoadas a partir da tarde.',
		    },

            {
                icon: 'nppcn',
                label: 'Nublado com possibilidade de pancada de chuva e trovoadas à noite',
                description: 'Muitas nuvens com curtas aberturas durante o dia com chance pequena de pancadas de chuva localizadas que poderão ser fortes e vir acompanhadas de trovoadas à noite.',
		    },
        ]
    }
    return texto;
}

