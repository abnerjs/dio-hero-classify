import * as readline from "node:readline";

function classifyHeroLevel(xp: number): string {
	if (xp < 1000) return "Ferro";
	if (xp <= 2000) return "Bronze";
	if (xp <= 5000) return "Prata";
	if (xp <= 7000) return "Ouro";
	if (xp <= 8000) return "Platina";
	if (xp <= 9000) return "Ascendente";
	if (xp <= 10000) return "Imortal";
	if (xp >= 10001) return "Radiante";
	return "Indefinido";
}

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function promptHeroInfo() {
	rl.question("Digite o nome do herói (ou 'fim' para sair): ", (heroName) => {
		if (heroName.toLowerCase() === "fim") {
			rl.close();
			return;
		}

		rl.question("Digite o XP do herói: ", (xpInput) => {
			const heroXP = Number.parseInt(xpInput, 10);

			if (Number.isNaN(heroXP)) {
				console.log("XP inválido. Tente novamente.");
				promptHeroInfo();
				return;
			}

			const heroLevel = classifyHeroLevel(heroXP);
			console.log(`O Herói de nome ${heroName} está no nível de ${heroLevel}`);

			promptHeroInfo();
		});
	});
}

promptHeroInfo();
