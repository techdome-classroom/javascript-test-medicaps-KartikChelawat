function longestSubstring(s) {
    // Implementation of longestSubstring function
    let max=0;
    let l=0;
    let r=0;
    const st=new Set();
    while(r<s.length)
    {
        if(!st.has(s.charAt(r))){
            st.add(s.charAt(r));
            max=Math.max(max,r-l+1);
            r++;
        }
        else{
            st.delete(s.charAt(l))
            
                l++;
            
        }
        return max;
    }

}

module.exports = { longestSubstring };


