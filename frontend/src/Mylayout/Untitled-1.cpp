#include<bits/stdc++.h>
using namespace std;



int main()
{
  int n,s;
    cin>>n>>s;
    vector<int> v(n);
   for(int i=0;i<n;i++)
   {
     cin>>v[i];
   }

   int l=0,r=n-1;
   int count=0;
    while(l<=r)
    {sum+=v[r++];
      while(sum>s)
      {
        sum-=v[l++]
      }
      if(sum<=s)
         { count+=(r-l)+1;}  
    }

  







}