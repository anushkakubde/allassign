class Cat{
    constructor(name){
        this.name=name;
        
    }
    display(){
        console.log("Name of the Cat is:",this.name)


    }
}
    const cat=new Cat("kitty")
    class Dog{
        constructor(name){
            this.name=name;

        }
        display(){
            console.log("name of the dog is:",this.name)

        }

    }
const dog=new Dog("Tiger")
cat.display();
dog.display();
