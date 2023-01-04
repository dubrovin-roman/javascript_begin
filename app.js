/*
13.11 Упражнение - склад
*/

const warehouse = {
    goods: [],
    findGoodById: function (id) {
        const findGood = this.goods.find(good => good.id === id);
        if (!findGood) {
            console.log(`Товар с id ${id} отсутствует на складе.`);
        }
        return findGood; 
    },
    addGood: function (newGood) {
        const findGood = this.goods.find(good => good.id === newGood.id);
        if (findGood) {
            console.log(`Товар с id ${newGood.id} уже существует на складе.`);
            return;
        }
        this.goods.push(newGood);
    },
    getWeightKg: function () {
        return this.goods.reduce((acc, good) => {
            const weightKg = good?.weight?.kg;
            if (weightKg) {
                return acc += weightKg;
            }
            return acc;
        }, 0);
    }
};

const car = {
    id: 1,
    weight: {
        kg: 1000
    },
    brand: 'Ford'
};

const chair = {
    id: 2,
    weight: {
        kg: 2
    }
};

const paper = {
    id: 3,
    color: 'red'
}

warehouse.addGood(car);
console.log(warehouse.goods);
warehouse.addGood(chair);
console.log(warehouse.goods);
warehouse.addGood(paper);
console.log(warehouse.goods);
console.log('--------------------');
console.log(warehouse.findGoodById(1));
console.log(warehouse.findGoodById(2));
console.log(warehouse.findGoodById(3));
console.log(warehouse.findGoodById(4));
console.log('--------------------');
console.log(warehouse.getWeightKg());