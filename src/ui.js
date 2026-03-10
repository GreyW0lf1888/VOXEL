// src/ui.js

// User Interface Module

// Hotbar Class - manages the hotbar display
class Hotbar {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
        this.render();
    }

    render() {
        console.log('Hotbar:', this.items);
    }
}

// Inventory Class - manages the inventory display
class Inventory {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
        this.render();
    }

    render() {
        console.log('Inventory:', this.items);
    }
}

// Exporting instances for use in other modules
export const hotbar = new Hotbar();
export const inventory = new Inventory();
