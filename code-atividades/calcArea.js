
const PI = 3.1415;

function calculateCircleArea(radius){
    return PI * radius * radius;
}

function calculateTriangleArea(base, height){
    return base * height / 2; 
}

function calculateRectangleArea(side){
    return side * side;
}

console.log("Circle area: ", calculateCircleArea(5));
console.log("Triangle area: ", calculateTriangleArea(3,5));
console.log("Rectangle area: ", calculateRectangleArea(13));