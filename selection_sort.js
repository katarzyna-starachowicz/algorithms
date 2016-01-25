var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 

var selectionSort = function(array) {
    var tempStartIndex = 0;
    for (var i = 0; i < array.length; i++){
        tempStartIndex = indexOfMinimum(array, i);
        swap(array, tempStartIndex, i);
    }
};

var array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
println("Array after sorting:  " + array);

Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);

var new_array = [-1, 5, 8, -22, 0, 46, -4000];
selectionSort(new_array);
Program.assertEqual(new_array, [-4000, -22, -1, 0, 5, 8, 46]);