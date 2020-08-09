//https://www.hackerrank.com/challenges/ctci-bubble-sort/problem

#include <map>
#include <set>
#include <list>
#include <cmath>
#include <ctime>
#include <deque>
#include <queue>
#include <stack>
#include <string>
#include <bitset>
#include <cstdio>
#include <limits>
#include <vector>
#include <climits>
#include <cstring>
#include <cstdlib>
#include <fstream>
#include <numeric>
#include <sstream>
#include <iostream>
#include <algorithm>
#include <unordered_map>

using namespace std;


int main(){
    int n,temp=0;
    cin >> n;
    int a[n],swapcount=0;
    for(int i = 0;i < n;i++){
       cin >> a[i];
    }
    
    for(int j = 0 ; j < n ; j++){
        for(int k = 0 ; k < n-1 ; k++){
            if(a[k]>a[k+1]){
                temp = a[k];
                a[k] = a[k+1];
                a[k+1] = temp;
                swapcount++;
            }
        }
    }
     
    cout << "Array is sorted in " << swapcount << " swaps."<<endl;
    cout << "First Element: " << a[0] << endl;
    cout << "Last Element: " << a[n-1] ;
    return 0;
}