class Inventory {
    constructor() {
        this.slots = new Array(10).fill(null);
    }

    addItem(item) {
        const emptySlot = this.slots.indexOf(null);
        if (emptySlot !== -1) {
            this.slots[emptySlot] = item;
            console.log(`Added ${item} to slot ${emptySlot}.`);
        } else {
            console.log('Inventory is full!');
        }
    }

    removeItem(slot) {
        if (this.slots[slot]) {
            const item = this.slots[slot];
            this.slots[slot] = null;
            console.log(`Removed ${item} from slot ${slot}.`);
        } else {
            console.log(`Slot ${slot} is empty.`);
        }
    }

    get loadout() {
        return this.slots.filter(slot => slot !== null);
    }

    displayInventory() {
        console.log('Current Inventory:');
        this.slots.forEach((item, index) => {
            console.log(`Slot ${index}: ${item || 'Empty'}`);
        });
    }
}

// Example usage:
const myInventory = new Inventory();
myInventory.addItem('Sword');
myInventory.addItem('Shield');
myInventory.displayInventory();