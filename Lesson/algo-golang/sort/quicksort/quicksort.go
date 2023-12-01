package quicksort

func swap(arr []int, i, j int) {
	arr[i], arr[j] = arr[j], arr[i]
}

func partition(arr []int, start, end int) int {
	pivot := arr[end]
	center := start

	for i := start; i < end; i++ {
		if arr[i] < pivot {
			swap(arr, center, i)
			center++
		}
	}

	swap(arr, center, end)
	return center
}

func QuickSort(arr []int, start, end int) {
	if start < end {
		center := partition(arr, start, end)
		QuickSort(arr, start, center-1)
		QuickSort(arr, center+1, end)
	}
}
