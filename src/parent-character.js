class Character {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = 0;
        this.defence = 0;        
        this.validate(name, type);
        this.setCharacterStats();
    }

    validate(name, type) {
        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Имя должно быть строкой длиной от 2 до 10 символов');
        }
                 
        const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if (!validTypes.includes(type)) {
            throw new Error('Некорректный тип персонажа');
        }
    }
    
    setCharacterStats() {
        switch (this.type) {
            case 'Bowman':
                this.attack = 25;
                this.defence = 25;
                break;
            case 'Swordsman':
                this.attack = 40;
                this.defence = 10;
                break;
            case 'Magician':
                this.attack = 10;
                this.defence = 40;
                break;
            case 'Undead':
                this.attack = 25;
                this.defence = 25;
                break;
            case 'Zombie':
                this.attack = 40;
                this.defence = 10;
                break;
            case 'Daemon':
                this.attack = 10;
                this.defence = 40;
                break;
            default:
                throw new Error('Некорректный тип персонажа');
        }
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error('Нельзя повысить левел умершего');
        }
        this.level += 1;
        this.attack = Math.round(this.attack * 1.2);
        this.defence = Math.round(this.defence * 1.2);
        this.health = 100;
    }

    damage(points) {
        this.health = Math.max(this.health - points * (1 - this.defence / 100), 0); // чтобы health не был < 0
    }
}

export default Character;