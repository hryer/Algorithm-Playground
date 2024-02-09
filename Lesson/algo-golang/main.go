package main

import (
	quicksort "algo-golang/sort/quicksort"
)

func main() {
	arr := []int{9, 4, 2, 3, 5}
	quicksort.QuickSort(arr, 0, len(arr)-1)
}
