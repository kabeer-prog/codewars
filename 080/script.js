// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.
// area_or_perimeter(6, 10) --> 32
// area_or_perimeter(3, 3) --> 9

const areaOrPerimeter = function(l , w) {
    // Return your answer
    
    
    if (l == w){
      let area;
      area = l * w;
      return area;
    }
    if (l != w){
      let perimeter = 2 * (l+w);
      return perimeter;
    }
}

// better solution
// const areaOrPerimeter = function(l , w) {
//     return l == w ? l*w : 2*(l + w)
//   };