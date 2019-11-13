import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-equipment',
    templateUrl: './equipment.component.html',
    styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
    title = 'equipment';
    days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    dogs = new Array<Dog>();
    show = false;
    bindedText:string = 'this is some text';

    colorClass = 'green';
    imageUrl = '';
    maxLength = '6';
    fieldValue = 'field one';

    constructor() {
        this.dogs.push(new Dog('rex', 4), new Dog('czaruś', 6), new Dog('pusia', 8));
    }

    ngOnInit() {
        console.log('equipment inited');
        console.log(this.dogs);
    }
    clickMe(ev){
        console.log("clicked: "+ev);
    }
    addChest(cos:string){
      console.log('dodaj: '+cos);
    }
}

class Dog {
    constructor(public name: string, public age: number){
        this.name = name;
        this.age = age;
    }
}
