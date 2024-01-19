class Course{
    price(){
        console.log("This is course class");

    }
    }
class Frontend extends Course{
    price(){
        console.log("price of this course is 20k");
    }
}
class Backend extends Course{
    price(){
        console.log("price of the  course is 23k");
    }
}
class Datascience extends Course{
    price(){
        console.log("Price of course is 12k");
    }
}
f=new Frontend()
f.price();