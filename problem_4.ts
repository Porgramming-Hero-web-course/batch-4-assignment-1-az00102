//Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea 
//that uses type guards to calculate the area based on the shape type.

type Circle = {
    shape: "circle",
    radius: number
};

type Rectangle = {
    shape: "rectangle",
    width: number,
    height: number
}

type UnifiedShape = Circle | Rectangle;

function calculateShapeArea(shape: UnifiedShape) :number{
    let area :number = 0;

    if(shape.shape === 'circle'){
        area = Math.PI * Math.pow(shape.radius, 2);
        area = parseFloat(area.toFixed(2));
    }
    else if(shape.shape ==='rectangle'){
        area = shape.height * shape.width;
    }

    return area;
}

// console.log(calculateShapeArea({ shape: "circle", radius: 5 }))

// console.log(calculateShapeArea({
//     shape: "rectangle",
//     width: 4,
//     height: 6,
//   }))
