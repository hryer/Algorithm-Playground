//https://www.hackerrank.com/challenges/diagonal-difference/problem

#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main(){
     int n; 
    
    cin>>n;
    int a[n][n];
    int x=0,y=0;
    
    for(int i = 0; i < n; i++){
       for(int j = 0; j < n; j++){
          
          cin >> a[i][j];
       }
    }
    
    for(int j = 0 ; j < n ; j++){    
        x = x + a[j][j];
    }
    
    int temp =0;
    for(int k = n-1 ; k >= 0; k--){
      y = y + a[k][temp];
      temp++;
    }
    
    if(x>y){
        cout << x-y; 
    }else{
        cout << y-x;
    }
    
    return 0;
}