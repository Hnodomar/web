function getQuickSortAnimations(array) {
    const animations = [];
    //if (array.length <= 1) return array;
    quicksort(array, 0, array.length - 1, animations);
    return array;
}
function quicksort(array, left, right) {
    left = left || 0;
    right = right || array.length - 1;

    var pivot = partitionHoare(array, left, right);

    if (left < pivot - 1) {
        quicksort(array, left, pivot - 1);
    }

    if (right > pivot) {
        quicksort(array, pivot, right)
    }

    return array;

}

function partitionHoare(array, left, right) {
    var pivot = array[Math.floor((left + right) / 2)];

    while (left < right) {
        while (array[left] < array[pivot]) {
            left++
        }
        while (array[right] > array[pivot]) {
            right--
        }

        if (left <= right) {
            swap(array, left, right);
            left++
            right--
        }
    }
    return left;
}
/*function quickSort(array, startIndex, endIndex, animations) {
    var pivot = partition(array, startIndex, endIndex);
    if (startIndex < pivot - 1)
        quickSort(array, startIndex, pivot - 1);
    if (endIndex > pivot)
        quickSort(array, pivot, endIndex);
    return array;
}

function partition(array, startIndex, endIndex) {
    const pivot = Math.floor((startIndex + endIndex) / 2);
    while (startIndex < endIndex) {
        while (array[startIndex] < array[pivot]) {
            startIndex++;
        }
        while (array[endIndex] > array[pivot]) {
            endIndex--;
        }
        if (startIndex <= endIndex) {
            swap(array, startIndex, endIndex);
            startIndex++;
            endIndex--;
        }
    }
    return startIndex;
}*/

function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

export default getQuickSortAnimations;