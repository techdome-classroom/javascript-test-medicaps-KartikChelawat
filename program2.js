function smallestMissingPositiveInteger(nums) {

  // Implement the function smallest_missing_positive_integer
  const n=arr.length;
  let j=0;
  for(let i=0;i<n;i++)
  {
    if(nums[i]<=0)
    {
      [nums[i],nums[j]]=[arr[j],arr[i]];
      j++;
    }
  }
  for(let i=0;i<n-j;i++)
  {
    const c=Math.abs(nums[i])-1+j;
    if(c<n && nums[c]>0)
    {
      nums[c]=-nums[c];
    }
  }
  for(let i=0;i<n-j;i++)
  {
    if(arr[i]>0)
    {
      return i+1;
    }
  }
  return n+1;

}

module.exports = {smallestMissingPositiveInteger};
